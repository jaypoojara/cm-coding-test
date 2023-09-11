import { twMerge } from "tailwind-merge";
import { RedirectToHome } from "./redirectToHome";
import { CommonHtmlDivProps } from "./types";

export const PageNotFound = ({ className, ...props }: CommonHtmlDivProps) => {
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
