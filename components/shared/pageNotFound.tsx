import { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";
import { RedirectToHome } from "./redirectToHome";

export const PageNotFound = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(`flex flex-col items-center`, className)}
      {...props}
    >
      <h1 className="text-6xl mb-8 font-medium">404 - Page Not Found</h1>
      <RedirectToHome />
    </div>
  );
};
