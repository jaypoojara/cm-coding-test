import { twMerge } from "tailwind-merge";
import { CommonHtmlDivProps } from "./types";

export const Container = ({ className, ...props }: CommonHtmlDivProps) => {
  return (
    <div
      className={twMerge(`mx-auto max-w-8xl w-4/5 px-4`, className)}
      {...props}
    />
  );
};
