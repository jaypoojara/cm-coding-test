import { Configure, Hits, InstantSearch } from "react-instantsearch";
import searchClient from "../../lib/algoliaService";
import { Container } from "../shared/container";
import { Hit } from "./algolia/hit";
import { CommonHtmlDivProps } from "../shared/types";

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
            hitComponent={({ hit }) => <Hit hit={hit} isCardLayout={true} />}
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
