import { mapNewsItemPropsFromApiResponse } from "../../../helpers/newsItemsPropsMapping";
import { NewsCard } from "../news/newsCard";

type HitProps = {
  hit: any;
  isCardLayout: Boolean;
};

export const Hit = ({ hit, isCardLayout }: HitProps) => {
  const dataItem = mapNewsItemPropsFromApiResponse(hit);
  return (
    <NewsCard
      news={dataItem}
      key={dataItem.slug.toString()}
      className="mb-6"
      isCardLayout={isCardLayout}
    />
  );
};
