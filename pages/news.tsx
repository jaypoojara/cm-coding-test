import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Credible mind</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-green-700">
          Hello world!
        </h1>
      </main>
    </div>
  );
};

export default Home;
