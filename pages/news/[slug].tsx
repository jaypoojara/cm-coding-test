import type { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Configure, Hits, InstantSearch } from "react-instantsearch";
import { NewsCard } from "../../components/features/news/news-card";
import { Container } from "../../components/shared/container";
import { Layout } from "../../components/templates/layout";
import { mapNewsItemPropsFromApiResponse } from "../../helpers/news-items-props-mapping";
import { ContentFulApiResponse } from "../../interfaces/contentFulApiResponse";
import { ContentFulNewsConfig } from "../../interfaces/contentFulNewsConfig";
import searchClient from "../../lib/algoliaService";
import { getNewsItems } from "../../lib/contentfulService";

const Hit = ({ hit }: any) => {
  const dataItem = mapNewsItemPropsFromApiResponse(hit);
  return (
    <NewsCard
      news={dataItem}
      key={dataItem.slug.toString()}
      className="mb-6"
      isCardLayout={false}
    />
  );
};

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
                hitComponent={Hit}
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
  const { slug } = query;

  const fields: ContentFulNewsConfig | undefined = await getNewsItems();

  let logoUrl: string,
    logoWidth: number,
    logoHeight: number,
    logoTitle: string,
    menuLabel: string,
    searchLabel: string,
    pageTitle: string;

  logoUrl = "/vercel.svg";
  logoWidth = 150;
  logoHeight = 50;
  logoTitle = "";
  menuLabel = "News";
  searchLabel = "Filter & Refine";
  pageTitle = "CredibleMind Cm test task";

  if (fields) {
    // logo details
    const {
      logo: {
        fields: {
          title: responseLogoTitle,
          file: {
            url: responseLogoUrl,
            details: {
              image: { width: responseLogoWidth, height: responseLogoHeight },
            },
          },
        },
      },
      menuLabel: responseMenuLabel,
      searchLabel: responseSearchLabel,
      title: responsePageTitle,
    } = fields;

    logoUrl = responseLogoUrl;
    logoWidth = responseLogoWidth;
    logoHeight = responseLogoHeight;
    logoTitle = responseLogoTitle;
    menuLabel = responseMenuLabel;
    searchLabel = responseSearchLabel;
    pageTitle = responsePageTitle;
  }

  return {
    props: {
      slug,
      logoDetails: { logoUrl, logoHeight, logoWidth, logoTitle },
      menuLabel,
      searchLabel,
      pageTitle,
    },
  };
};

export default NewsWithSlug;
