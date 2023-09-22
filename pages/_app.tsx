import { AppProps } from "next/app";
import "../styles/imports.css";
import "../styles/links.scss";
import "../styles/style.scss";
import "../styles/tachyons.min.css";
import hljs from "highlight.js";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
