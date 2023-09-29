import { AppProps } from "next/app";
import "../styles/imports.css";
import "../styles/links.scss";
import "../styles/style.scss";
import "../styles/tachyons.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
