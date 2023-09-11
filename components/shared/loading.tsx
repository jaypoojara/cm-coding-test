import { CircularProgress } from "@mui/material";
import { CommonHtmlDivProps } from "./types";

export const Loading = ({ className, ...props }: CommonHtmlDivProps) => {
  return (
    <div className="h-[20rem] flex items-center justify-center ">
      <CircularProgress color="primary" />
    </div>
  );
};
