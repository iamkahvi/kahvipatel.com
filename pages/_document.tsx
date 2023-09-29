import { Html, Head, Main, NextScript } from "next/document";
import { themeMap } from "../hooks/colorThemes.mjs";

export default function Document() {
  const codeToSetStyles = `
    (function () {
      const themeMap = ${JSON.stringify(themeMap)};
      function getInitialColorMode() {
        const persistedColorPreference = window.localStorage.getItem("color-theme");
        const hasPersistedPreference = typeof persistedColorPreference === "string";

        if (hasPersistedPreference) {
          return persistedColorPreference;
        }

        const mql = window.matchMedia("(prefers-color-scheme: dark)");
        const hasMediaQueryPreference = typeof mql.matches === "boolean";

        if (hasMediaQueryPreference && mql.matches) {
          return "dark";
        }

        return "classic";
      }
      function setRootStyles(theme) {
        const root = document.documentElement;
        Object.entries(themeMap[theme]).forEach((val) => {
          const [k, v] = val;
          root.style.setProperty(k, v);

          // Ugly fix for selection color
          if (k == "--c-main") {
            root.style.setProperty("--c-main-selection", v + "50");
          }
        });
      }
      const colorMode = getInitialColorMode();
      setRootStyles(colorMode);
    })();`;

  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: codeToSetStyles }} />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js"></script>
        <script>Prism.highlightAll();</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
