import '../styles/globals.css'
import "../styles/algolioSearchBox.css";
import type { AppProps } from 'next/app'
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ErrorBoundary from "../components/shared/error-bounderies";

/**
 * @ref: https://github.com/bvaughn/react-error-boundary/issues/111
 */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp
