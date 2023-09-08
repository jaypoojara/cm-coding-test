import { InstantSearch, SearchBox } from "react-instantsearch";
import { mapNewsItemPropsFromApiResponse } from "../../helpers/news-items-props-mapping";
import searchClient from "../../lib/algoliaService";
import { InfiniteHits } from "./algolia/algolia-infinite-hits";
import { Container } from "../shared/container";
import { Divider } from "../shared/divider";
import { NewsCard } from "./news/news-card";
import { Stats } from "./stats";

const Hit = ({ hit }: any) => {
  const dataItem = mapNewsItemPropsFromApiResponse(hit);
  return (
    <>
      <NewsCard
        news={dataItem}
        key={dataItem.slug.toString()}
        className="mb-6"
        isCardLayout={false}
      />
      <Divider />
    </>
  );
};

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
              hitComponent={Hit}
              className={{ list: "grid grid-cols-1 items-center gap-8 " }}
            />
          </div>
        </Container>
      </section>
    </InstantSearch>
  );
};
