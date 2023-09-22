import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { INLINES } from "@contentful/rich-text-types";
import { getDateFormats } from "./utils";

const attributeValue = (value: string) => `"${value.replace(/"/g, "&quot;")}"`;
const HOSTNAME = "kahvipatel.com";

const BOOK_SHELF_DATA_QUERY = `
{
  bookShelf(id: "${process.env.BOOK_SHELF_ID}") {
    title
    intro {
      json
    }
    bookListCollection(order: dateFinished_DESC) {
      items {
        bookTitle
        bookAuthor
        bookDescription {
          json
        }
        dateFinished
      }
    }
  }
}
`;

const RENDER_OPTIONS = {
  renderNode: {
    [INLINES.HYPERLINK]: (node: any, next: any) => {
      const href = typeof node.data.uri === "string" ? node.data.uri : "";
      const url = new URL(href);

      if (url.hostname === HOSTNAME) {
        return `<a href=${attributeValue(url.href)}>${next(node.content)}</a>`;
      }
      return `<a href=${attributeValue(url.href)} target="_blank">${next(
        node.content
      )}</a>`;
    },
  },
};

export async function fetchGraphQL(
  query: string,
  preview = false
): Promise<any> {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    }
  );

  return await response.json();
}

export interface BookShelfData {
  title: string;
  introHtml: string;
  books: BookNode[];
}

export interface BookNode {
  title: string;
  author: string;
  descriptionHtml: string;
  dateFinished: string;
  year: string;
}

export async function getBookShelfData(): Promise<BookShelfData> {
  const { data } = await fetchGraphQL(BOOK_SHELF_DATA_QUERY);

  const { title, intro } = data.bookShelf;
  const introHtml = documentToHtmlString(intro.json, RENDER_OPTIONS);

  const books: BookNode[] = data.bookShelf.bookListCollection.items.map(
    (bookItem: any) => {
      const {
        bookTitle: title,
        bookAuthor: author,
        dateFinished,
        bookDescription,
      } = bookItem;

      const { year, displayDate } = getDateFormats(dateFinished, "DD/MM/YYYY");
      const descriptionHtml = documentToHtmlString(
        bookDescription.json,
        RENDER_OPTIONS
      );

      return {
        title,
        author,
        dateFinished: displayDate,
        descriptionHtml,
        year,
      };
    }
  );

  return {
    title,
    introHtml,
    books,
  };
}
