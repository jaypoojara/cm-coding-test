import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "react-error-boundary";
import { SomethingWentWrong } from "../components/shared/somethingWenWrong";
import "../styles/algolioSearchBox.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary fallbackRender={SomethingWentWrong}>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
