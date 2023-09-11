import { InstantSearch, SearchBox } from "react-instantsearch";
import searchClient from "../../lib/algoliaService";
import { Container } from "../shared/container";
import { Divider } from "../shared/divider";
import { InfiniteHits } from "./algolia/algoliaInfiniteHits";
import { Hit } from "./algolia/hit";
import { Stats } from "./algolia/stats";

export const FoundNewsLists = ({ searchLabel }: { searchLabel: String }) => {
  return (
    <InstantSearch searchClient={searchClient} indexName="news">
      <section className="found-news-list">
        <Container className="grid grid-cols-4 relative gap-8">
          <div className="search-and-filter sticky top-8 h-fit">
            <div className="wrapper border p-4">
              <h4 className="text-xl mt-2 mb-8">{searchLabel}</h4>
              <div className="search-wrapper">
                <SearchBox placeholder="Search" searchAsYouType={false} />
              </div>
            </div>
          </div>
          <div className="display-list col-span-3">
            <Stats />
            <Divider className="mt-6 mb-9" />
            <InfiniteHits
              hitComponent={({ hit }: { hit: any }) => (
                <Hit hit={hit} isCardLayout={false} />
              )}
              className={{ list: "grid grid-cols-1 items-center gap-8 " }}
            />
          </div>
        </Container>
      </section>
    </InstantSearch>
  );
};
