import React, { useState } from "react";
import Link from "next/link";
import { Layout, SearchBar, SEO, BookListLogo } from "../components";
import { siteMetadata } from "../site_metadata";
import { GetStaticProps } from "next";
import { getBlogPostEntries, BlogPostEntry } from "../lib/source-markdown";

import { CURR_YEAR_STRING } from "./utils";

export default function App({ posts }: { posts: BlogPostEntry[] }) {
  const [search, setSearch] = useState("");

  const siteTitle = siteMetadata.title;
  const description = siteMetadata.description;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // if (e.target.value.toLowerCase() === "mama") {
    //   navigate("/mothersday", { state: { isAuth: true } });
    // }
  };

  const renderPost = ({
    current,
    previous,
  }: {
    current: Omit<BlogPostEntry, "date">;
    previous: Omit<BlogPostEntry, "date"> | null;
  }) => {
    const { title, slug, year } = current;

    const prevYear = previous?.year ?? null;

    const color = year === CURR_YEAR_STRING ? "c-main" : "c-second";

    return (
      <div key={slug}>
        {prevYear !== year && (
          <h1 className={`roboto f5 ${color} tc mb3`}>{year}</h1>
        )}
        <div
          className="pv3 bt b--c-third flex items-center justify-between"
          key={`/${slug}`}
        >
          <h3 className="mv0 w-two-thirds">
            <Link
              style={{ boxShadow: `none` }}
              className="f4 mb2 roboto c-main"
              href={`/posts/${slug}`}
            >
              {title}
            </Link>
            <p
              dangerouslySetInnerHTML={{
                __html: current.description,
              }}
              className="f6 fw4 roboto c-second"
            />
          </h3>
          <small className="post-date f5 roboto c-second fr tr w-third">
            {current.displayDate}
          </small>
          <small className="post-date-small f5 roboto c-second fr tr w-third">
            {current.displayDateSmall}
          </small>
        </div>
      </div>
    );
  };

  const newsletterEmbed = (
    <div className="mb4" style={{ height: "11rem" }}>
      <iframe
        src="https://www.newsletter.kahvipatel.com/embed"
        className="w-100 br3 h-100 bn"
      ></iframe>
    </div>
  );

  return (
    <Layout title={siteTitle} description={description}>
      <BookListLogo />
      {newsletterEmbed}
      <SearchBar
        handleSearch={handleSearch}
        placeholderText="search posts..."
        searchVal={search}
        isSticky={false}
      />
      <SEO title={siteTitle} />
      {posts
        .filter(
          (entry) =>
            (entry.title + entry.displayDate + entry.description)
              .toLowerCase()
              .includes(search.toLowerCase()) || search === ""
        )
        .map((entry, ind, arr) => ({
          current: entry,
          previous: arr[ind - 1] ?? null,
        }))
        .map(renderPost)}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getBlogPostEntries();

  return {
    props: {
      posts: data,
    },
  };
};
