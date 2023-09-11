import { Highlight } from "react-instantsearch";
import { twMerge } from "tailwind-merge";
import { truncate } from "../../../utils/text";
import { Divider } from "../../shared/divider";
import { FormatDate } from "../../shared/format-date";
import Link from "next/link";
import {
  NewsCardDescriptionProps,
  NewsCardFooterProps,
  NewsCardNameProps,
  NewsCardTopicsTitleProps,
  NewsCardWrapperDetailsProps,
} from "../../../types/newsCardWrapperDetailsProps";
import { CommonHtmlDivProps } from "../../../types/commonHtmlDivProps";

const NewsCardTopicsTitle = ({
  topicsTitle,
  originalHit,
  className,
}: NewsCardTopicsTitleProps & CommonHtmlDivProps) => {
  const originalHitTopicsLength = originalHit?.topics?.length || 0;
  /**
   * @ref: https://github.com/algolia/instantsearch/issues/5791
   */
  return originalHit.topics.map((topicItem: { title: string }, i: number) => {
    return (
      <span
        className={twMerge("text-secondary mb-2 mx-1", className)}
        key={`topics${i}${topicItem?.title}`}
      >
        <Highlight
          key={i}
          hit={originalHit}
          attribute={["topics", i.toString(), "title"]}
        />
        {originalHitTopicsLength > 1 && i < originalHitTopicsLength - 1 && " ,"}
      </span>
    );
  });
};

const NewsCardName = ({ name, slug, originalHit }: NewsCardNameProps) => {
  return (
    <h3 className="text-primary-500 text-4xl font-medium mb-6 self-start">
      <Link href={`news/${slug}`}>{name}</Link>
    </h3>
  );
};

const NewsCardDescription = ({ description }: NewsCardDescriptionProps) => {
  return (
    <p className="text-primary-400 mb-4 text-lg">{truncate(description)}</p>
  );
};

const NewsCardFooter = ({
  publicationDate,
  organizationFieldName,
}: NewsCardFooterProps) => {
  return (
    <footer className=" flex items-center gap-6">
      <div className="text-primary-400">
        <FormatDate date={publicationDate} />
      </div>
      <Divider isHorizontal={true} className="h-auto self-stretch" />
      <small className="text-secondary text-base">
        {organizationFieldName}
      </small>
    </footer>
  );
};

export const NewsCardWrapperDetails = ({
  topicsTitle,
  originalHit,
  description,
  publicationDate,
  organizationFieldName,
  isCardLayout,
  name,
  slug,
  className,
}: NewsCardWrapperDetailsProps & CommonHtmlDivProps) => {
  return (
    <div className={twMerge("detail-wrapper", className)}>
      <div className="mb-1">
        <NewsCardTopicsTitle
          topicsTitle={topicsTitle}
          originalHit={originalHit}
          className="text-base"
        />
      </div>
      <NewsCardName originalHit={originalHit} name={name} slug={slug} />
      {!isCardLayout && <NewsCardDescription description={description} />}
      <NewsCardFooter
        publicationDate={publicationDate}
        organizationFieldName={organizationFieldName}
      />
    </div>
  );
};
