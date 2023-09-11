import { NewsItem } from "../components/features/news/types";

export const mapNewsItemPropsFromApiResponse = (hit: any): NewsItem => {
  const {
    slug,
    imageUrl,
    name,
    publicationDate,
    description,
    topics = [],
    organization = [],
  } = hit;

  const topicsTitle = topics
    .map((topicItem: any) => {
      return topicItem?.title || "";
    })
    .join(",");

  const organizationFieldName = organization
    .map((organizationItem: any) => {
      const {
        fields: { name = "" },
      } = organizationItem;
      return name;
    })
    .join(",");

  const dataItem: NewsItem = {
    imageUrl,
    description,
    name,
    slug,
    topicsTitle,
    publicationDate: new Date(publicationDate),
    organizationFieldName,
    originalHit: hit,
  };

  return dataItem;
};
