import { useStats } from "react-instantsearch";
import { twMerge } from "tailwind-merge";
import { CommonHtmlDivProps } from "../../shared/types";

export const Stats = ({ className, ...props }: CommonHtmlDivProps) => {
  const { nbHits } = useStats();

  if (!nbHits) {
    return (
      <h3 className={twMerge("text-2xl font-bold text-primary-400", className)}>
        No Resources Found
      </h3>
    );
  }

  return (
    <h3 className={twMerge("text-2xl font-bold text-primary-400", className)}>
      {nbHits} Resources Found
    </h3>
  );
};
