import { Layout, SEO } from "../../components";
import {
  BlogPost,
  getBlogPost,
  getBlogPostEntries,
} from "../../lib/source-markdown";
import { siteMetadata } from "../../site_metadata";

type Props = { post: BlogPost };

export default function BlogPostTemplate({ post }: Props) {
  const { title, html, frontmatter } = post;
  const { displayDate, displayDateSmall, description } = frontmatter;
  const siteTitle = siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <SEO title={title} description={description} />
      <header className="flex justify-between items-center pb3 mb4 bb b--c-main">
        <h1 className="f3 c-second ma0 pb0 fw4 roboto w-70">{title}</h1>
        <p className="post-date-small f5 fw4 roboto pa0 ma0 c-second w-30 tr">
          {displayDateSmall}
        </p>
        <p className="post-date f5 fw4 roboto pa0 ma0 c-second w-30 tr">
          {displayDate}
        </p>
      </header>
      <div className="textBody" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

type StaticProps = { params: { slug: string } };

export async function getStaticProps({ params }: StaticProps) {
  const post = await getBlogPost(params.slug);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const data = await getBlogPostEntries();

  return {
    paths: data.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
