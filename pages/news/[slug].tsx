import type { GetServerSideProps } from "next";
import Head from "next/head";
import { Configure, Hits, InstantSearch } from "react-instantsearch";
import { Hit } from "../../components/features/algolia/hit";
import { Container } from "../../components/shared/container";
import { Layout } from "../../components/templates/layout";
import { contentfulDataFetching } from "../../helpers/contentfulDataFetching";
import { ContentFulApiResponse } from "../../interfaces/contentFulApiResponse";
import searchClient from "../../lib/algoliaService";

const NewsWithSlug = (props: ContentFulApiResponse & { slug: string }) => {
  const { slug, logoDetails, menuLabel, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout logoDetails={logoDetails} menuLabel={menuLabel}>
        <main className="flex py-8">
          <Container>
            <InstantSearch searchClient={searchClient} indexName="news">
              <Configure filters={`slug:${slug}`} />
              <Hits
                hitComponent={({ hit }) => (
                  <Hit hit={hit} isCardLayout={false} />
                )}
                classNames={{
                  root: "MyCustomHits",
                  list: "grid grid-cols-1 items-center gap-8 ",
                }}
              />
            </InstantSearch>
          </Container>
        </main>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query;
    const contentFulResponse: ContentFulApiResponse =
      await contentfulDataFetching();
    return {
      props: {
        ...contentFulResponse,
        slug,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
};

export default NewsWithSlug;
