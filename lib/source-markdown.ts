import { readdir } from "node:fs/promises";
import { join } from "node:path";
import matter from "gray-matter";
import moment from "moment";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";

const POSTS_PATH = join(process.cwd(), "content/posts");

export interface BlogPost {
  title: string;
  html: string;
  frontmatter: {
    year: string;
    displayDate: string;
    displayDateSmall: string;
    description: string;
  };
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const file = Bun.file(join(POSTS_PATH, slug));
  const text = await file.text();

  const { data, content } = matter(text);
  const { title, date, description } = data;

  const html = String(
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(content)
  );

  const { year, displayDate, displayDateSmall } = getDateFormats(date);

  return {
    title,
    html,
    frontmatter: {
      year,
      displayDate,
      displayDateSmall,
      description,
    },
  };
}

export interface BlogPostEntry {
  title: string;
  year: string;
  displayDate: string;
  displayDateSmall: string;
  description: string;
  slug: string;
}

export async function getBlogPostEntries(): Promise<BlogPostEntry[]> {
  const paths = await readdir(POSTS_PATH);

  const entryPromises = paths.map<Promise<BlogPostEntry>>(
    async (path: string) => {
      const file = Bun.file(join(POSTS_PATH, path));
      const text = await file.text();

      const frontMatter = matter(text);
      const { title, date, description } = frontMatter.data;

      const { year, displayDate, displayDateSmall } = getDateFormats(date);

      return {
        title,
        year,
        displayDate,
        displayDateSmall,
        description,
        slug: path,
      };
    }
  );

  const entries = Promise.all(entryPromises);

  return entries;
}

function getDateFormats(date: string): {
  year: string;
  displayDate: string;
  displayDateSmall: string;
} {
  const momentDate = moment(date);

  const year = momentDate.format("YYYY");
  const displayDate = momentDate.format("MMMM Do, YYYY");
  const displayDateSmall = momentDate.format("MMM D");

  return {
    year,
    displayDate,
    displayDateSmall,
  };
}

type Highlight = {
  book: string;
  author: string;
  quote: string;
  page: number | null;
  location: {
    start: number;
    end: number;
  };
  dateAdded: number;
};

export function getMarkdownHighlights(): Highlight[] {
  return [];
}
