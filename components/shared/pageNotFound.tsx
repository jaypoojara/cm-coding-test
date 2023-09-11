import { twMerge } from "tailwind-merge";
import { CommonHtmlDivProps } from "../../types/commonHtmlDivProps";
import { RedirectToHome } from "./redirectToHome";

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
