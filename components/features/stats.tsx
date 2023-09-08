import { HTMLProps } from "react";
import { useStats } from "react-instantsearch";
import { twMerge } from "tailwind-merge";

export const Stats = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
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
