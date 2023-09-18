import React, { useState } from "react";
import { Layout, SEO, SearchBar } from "../components";
import {
  getBookShelfData,
  BookShelfData,
  BookNode,
} from "../lib/source-contentful";
import { GetStaticProps } from "next";
import { yearMap } from "./utils";

export default function BookList({ bookShelf }: { bookShelf: BookShelfData }) {
  const [search, setSearch] = useState("");

  const { books, introHtml, title } = bookShelf;

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const renderBook = ({
    current,
    previous,
  }: {
    current: BookNode;
    previous: BookNode | null;
  }) => {
    const { author, title, descriptionHtml, year, dateFinished } = current;
    const prevYear = previous?.year ?? null;

    const idLink = title
      .replace(/[!'’.()*:]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

    return (
      <div key={idLink}>
        {prevYear !== year && <h2 className="f4 underline">{yearMap(year)}</h2>}
        <li id={idLink} className="book mb4">
          <div className="mb2">
            <a
              className="book anchor c-second b"
              href={`/book-shelf#${idLink}`}
            >
              <span className="fw5">{title}</span>
            </a>
            by {author}
            {parseInt(year) > 2018 && <em> - {dateFinished} </em>}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: descriptionHtml,
            }}
          />
        </li>
      </div>
    );
  };

  return (
    <Layout title="book shelf" description="Somewhere for my books">
      <SEO title="book shelf" />
      <h1 className="mt0">{title}</h1>
      <div className="textBody">
        <div
          dangerouslySetInnerHTML={{
            __html: introHtml,
          }}
        />
        <SearchBar
          handleSearch={handleSearch}
          placeholderText="search books..."
          searchVal={search}
          isSticky={false}
        />
        <ul className="ml0">
          {books
            .filter(
              ({ title, author, dateFinished }) =>
                `${title} by ${author} - ${dateFinished}`
                  .toLowerCase()
                  .includes(search.toLowerCase()) || search === ""
            )
            .map((book, ind, arr) => ({
              current: book,
              previous: arr[ind - 1] ?? null,
            }))
            .map(renderBook)}
        </ul>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBookShelfData();

  return {
    props: {
      bookShelf: data,
    },
  };
};
