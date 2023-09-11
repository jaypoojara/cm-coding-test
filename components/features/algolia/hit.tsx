import { mapNewsItemPropsFromApiResponse } from "../../../helpers/newsItemsPropsMapping";
import { Divider } from "../../shared/divider";
import { NewsCard } from "../news/newsCard";
import { HitProps } from "./types";

export const Hit = ({ hit, isCardLayout }: HitProps) => {
  const dataItem = mapNewsItemPropsFromApiResponse(hit);
  return (
    <>
      <NewsCard
        news={dataItem}
        key={dataItem.slug.toString()}
        className="mb-6"
        isCardLayout={isCardLayout}
      />
      {!isCardLayout && <Divider />}
    </>
  );
};
