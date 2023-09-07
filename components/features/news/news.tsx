import { twMerge } from "tailwind-merge";
import { FormatDate } from "../../shared/format-date";
import { NewsItem } from "../../../interfaces/newsItem";
import Image from "next/image";
import { truncate } from "../../../utils/text";
import { Divider } from "../../shared/divider/divider";

interface NewsProps {
  news: NewsItem;
  isCardLayout?: Boolean;
}
export const NewsCard = ({ news, isCardLayout = false }: NewsProps) => {
  const { title, publicationDate, name, description, organizationFieldName } =
    news;

  // return card layout rather than list layout
  if (isCardLayout) {
    return (
      <div className="grid grid-cols-1">
        <div className="image-wrapper w-full h-64 flex items-center justify-center mb-4">
          <div className="wrapper relative w-full h-full">
            <Image
              src="https://picsum.photos/seed/picsum/600/300"
              layout="fill"
              alt="Testing logo"
              className="object-cover"
            />
          </div>
        </div>
        <div className="detail-wrapper h-full content-stretch">
          <small className="text-secondary text-base">{title}</small>
          <h3 className="text-primary-500 text-4xl font-medium mb-6">{name}</h3>

          <footer className=" flex items-center gap-6">
            <div className="text-primary-400">
              <FormatDate date={publicationDate} />
            </div>
            <Divider isHorizontal={true} className="h-auto self-stretch" />
            <small className="text-secondary text-base">
              {organizationFieldName}
            </small>
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-8">
      <div className="image-wrapper  h-[95%] flex items-center justify-center ">
        <div className="wrapper relative w-full h-full">
          <Image
            src="https://picsum.photos/seed/picsum/600/300"
            layout="fill"
            alt="Testing logo"
            className="object-cover"
          />
        </div>
      </div>
      <div className="detail-wrapper h-full content-stretch col-span-2">
        <small className="text-secondary">{title}</small>
        <h3 className="text-primary-500 text-2xl font-bold mb-6">{name}</h3>
        <p className="text-primary-400 mb-4 text-lg">{truncate(description)}</p>
        <footer className=" flex items-center gap-6">
          <div className="text-primary-400">
            <FormatDate date={publicationDate} />
          </div>
          <Divider isHorizontal={true} className="h-auto self-stretch" />
          <small className="text-secondary text-base">
            {organizationFieldName}
          </small>
        </footer>
      </div>
    </div>
  );
};
