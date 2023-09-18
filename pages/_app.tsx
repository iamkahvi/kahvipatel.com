import { AppProps } from "next/app";
import "../styles/links.scss";
import "../styles/style.scss";
import "../styles/prism.css";
import "../styles/tachyons.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
