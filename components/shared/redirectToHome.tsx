import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";
import { CommonHtmlDivProps } from "./types";

export const RedirectToHome = ({ className, ...props }: CommonHtmlDivProps) => {
  const router = useRouter();

  const clickHandler = () => {
    router.replace("/news");
  };

  return (
    <button
      className={twMerge(
        "bg-secondary/90 hover:bg-secondary text-white font-medium py-2 px-4 rounded w-fit text-lg",
        className
      )}
      onClick={clickHandler}
    >
      Home
    </button>
  );
};
