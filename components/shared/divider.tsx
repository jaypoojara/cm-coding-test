import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

export interface CustomFieldForDivider {
  isHorizontal?: Boolean;
}

export const Divider = ({
  className,
  isHorizontal = false,
  ...props
}: HTMLProps<HTMLDivElement> & CustomFieldForDivider) => {
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
