import "../styles/LG/skeleton.css";
import "../styles/LG/bootstrap.scss";
import "../styles/LG/lg-default.scss";
import "../styles/LG/components.css";
import "../styles/LG/hsad-style.css";
import "../styles/LG/hsad-package.css";
import "../styles/globals.scss";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
