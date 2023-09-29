import React from "react";
import Markdown from "react-markdown";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { GetStaticProps } from "next";
import { getAboutPageData, AboutPageData } from "../lib/source-markdown";

export default function BlogAbout(props: AboutPageData) {
  const { title, markdown } = props;

  return (
    <Layout title={title}>
      <SEO title="about" />
      <h1 className="mt0">{title}</h1>
      <div>
        <img
          className="profile"
          src="/assets/profile.jpg"
          alt="Headshot Photo"
        ></img>
        <div className="textBody">
          <Markdown
            children={markdown}
            components={{
              a(props: any) {
                return <a href="google.com">hello</a>;
              },
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAboutPageData();

  return {
    props: data,
  };
};
