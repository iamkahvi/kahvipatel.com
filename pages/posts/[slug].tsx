import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Layout, SEO } from "../../components";
import {
  BlogPost,
  getBlogPost,
  getBlogPostEntries,
} from "../../lib/source-markdown";
import { siteMetadata } from "../../site_metadata";

type Props = { post: BlogPost };

export default function BlogPostTemplate({ post }: Props) {
  const { title, markdown, frontmatter } = post;
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
      <div className="textBody">
        <Markdown
          children={markdown}
          components={{
            code(props: any) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                // @ts-ignore
                <SyntaxHighlighter
                  {...rest}
                  children={String(children).replace(/\n$/, "")}
                  style={prism}
                  language={match[1]}
                  className="br3"
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
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
