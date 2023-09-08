import { Configure, Hits, InstantSearch } from "react-instantsearch";
import { mapNewsItemPropsFromApiResponse } from "../../helpers/news-items-props-mapping";
import searchClient from "../../lib/algoliaService";
import { Container } from "../shared/container";
import { NewsCard } from "./news/news-card";

const Hit = ({ hit }: any) => {
  const dataItem = mapNewsItemPropsFromApiResponse(hit);
  return (
    <NewsCard
      news={dataItem}
      key={dataItem.slug.toString()}
      className="mb-6"
      isCardLayout={true}
    />
  );
};

export const TopLatestNews = () => {
  return (
    <section className="top-latest-news">
      <Container>
        <div className="flex items-center justify-center pt-12 pb-24">
          <h2 className="text-5xl font-bold text-primary-500">
            CredibleMind in the news
          </h2>
        </div>
        <InstantSearch searchClient={searchClient} indexName="news">
          <Configure hitsPerPage={3} />
          <Hits
            hitComponent={Hit}
            classNames={{
              list: "wrapper grid grid-cols-3 gap-5",
              item: "grid grid-cols-1 grid-rows-[1fr_10rem] gap-4",
            }}
          />
        </InstantSearch>
      </Container>
    </section>
  );
};
