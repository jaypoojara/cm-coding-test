import { twMerge } from "tailwind-merge";
import { CommonHtmlDivProps, DividerProps } from "./types";

export const Divider = ({
  className,
  isHorizontal = false,
  ...props
}: CommonHtmlDivProps & DividerProps) => {
  if (isHorizontal) {
    return (
      <div
        className={twMerge(`w-[1px] h-full bg-primary-300`, className)}
      ></div>
    );
  }
  return (
    <div className={twMerge(`w-full h-[1px] bg-primary-300`, className)}></div>
  );
};
