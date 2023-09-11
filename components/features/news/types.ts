export type NewsItem = {
  topicsTitle: string;
  name: string;
  description: string;
  publicationDate: Date;
  organizationFieldName: string;
  slug: string;
  imageUrl: string;
  originalHit: any;
};

export type NewsCardProps = {
  news: NewsItem;
  isCardLayout?: Boolean;
  className: string;
};

export type NewsCardWrapperDetailsProps = {
  name: string;
  topicsTitle: string;
  originalHit: any;
  publicationDate: Date;
  organizationFieldName: string;
  isCardLayout: Boolean;
  description: string;
  slug: string;
};

export type NewsCardDescriptionProps = {
  description: string;
};
export type NewsCardNameProps = {
  name: string;
  originalHit: any;
  slug: string;
};
export type NewsCardTopicsTitleProps = {
  topicsTitle: string;
  originalHit: any;
};
export type NewsCardFooterProps = {
  publicationDate: Date;
  organizationFieldName: string;
};
