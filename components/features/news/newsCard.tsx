import { twMerge } from "tailwind-merge";
import { NewsCardWrapperDetails } from "./newsCardWrapperDetail";
import { NewsCardProps } from "./types";

export const NewsCard = ({
  news,
  isCardLayout = false,
  className,
}: NewsCardProps) => {
  const {
    topicsTitle,
    publicationDate,
    description,
    organizationFieldName,
    originalHit,
    imageUrl,
    name,
    slug,
  } = news;

  if (isCardLayout) {
    return (
      <>
        <div className="image-wrap">
          <img
            src={imageUrl}
            className="object-cover w-full h-full"
            alt={name}
          />
        </div>
        <NewsCardWrapperDetails
          slug={slug}
          name={name}
          topicsTitle={topicsTitle}
          originalHit={originalHit}
          description={description}
          publicationDate={publicationDate}
          organizationFieldName={organizationFieldName}
          isCardLayout={isCardLayout}
          className="grid items-center"
        />
      </>
    );
  }

  return (
    <div className={twMerge("grid grid-cols-3 gap-8", className)}>
      <div className="image-wrapper  h-[95%] flex items-center justify-center ">
        <img src={imageUrl} className="object-cover w-full h-full" alt={name} />
      </div>
      <NewsCardWrapperDetails
        slug={slug}
        name={name}
        topicsTitle={topicsTitle}
        originalHit={originalHit}
        description={description}
        publicationDate={publicationDate}
        organizationFieldName={organizationFieldName}
        isCardLayout={isCardLayout}
        className="col-span-2"
      />
    </div>
  );
};
