import { InstantSearch, SearchBox } from "react-instantsearch";
import searchClient from "../../lib/algoliaService";
import { Container } from "../shared/container";
import { Divider } from "../shared/divider";
import { InfiniteHits } from "./algolia/algoliaInfiniteHits";
import { Hit } from "./algolia/hit";
import { Stats } from "./algolia/stats";
import { foundNewsListsProps } from "./types";
import { CommonHtmlDivProps } from "../shared/types";
import { useState } from "react";
import { ToggleViewButton } from "../shared/toggleViewButton";

export const FoundNewsLists = ({
  searchLabel,
}: foundNewsListsProps & CommonHtmlDivProps) => {
  const [isListLayout, setIsLayout] = useState(true);
  const layoutChangeHandler = () => {
    setIsLayout((prevIsLayout) => !prevIsLayout);
  };
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
            <div className="flex justify-between items-center">
              <Stats />
              <ToggleViewButton
                onClick={layoutChangeHandler}
                isListLayout={isListLayout}
              />
            </div>
            <Divider className="mt-6 mb-9" />
            <InfiniteHits
              hitComponent={({ hit }: { hit: any }) => (
                <Hit hit={hit} isCardLayout={!isListLayout} />
              )}
              className={{
                list: isListLayout
                  ? "grid grid-cols-1 items-center gap-8"
                  : "grid grid-cols-2 items-center gap-8",
                item: !isListLayout
                  ? "grid grid-cols-1 grid-rows-[18.75rem_10rem] gap-4"
                  : "",
              }}
            />
          </div>
        </Container>
      </section>
    </InstantSearch>
  );
};
