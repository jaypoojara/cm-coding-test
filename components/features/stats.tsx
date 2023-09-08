import { HTMLProps } from "react";
import { useStats } from "react-instantsearch";
import { twMerge } from "tailwind-merge";

export const Stats = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  const { hitsPerPage } = useStats();
  return (
    <h3 className={twMerge("text-2xl font-bold text-primary-400", className)}>
      {hitsPerPage} Resources Found
    </h3>
  );
};
