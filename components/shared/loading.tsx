import { HTMLProps } from "react";
import { CircularProgress } from "@mui/material";

export const Loading = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className="h-[20rem] flex items-center justify-center ">
      <CircularProgress color="primary" />
    </div>
  );
};
