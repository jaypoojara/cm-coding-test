import Head from "next/head";
import { PageNotFound } from "../components/shared/pageNotFound";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Page Not Found</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex items-center justify-center p-4">
        <PageNotFound />
      </main>
    </div>
  );
};

export default Home;
