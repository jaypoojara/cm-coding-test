import { HTMLProps } from "react";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
import { ToggleViewButtonProps } from "./types";

export const ToggleViewButton = ({
  onClick,
  isListLayout,
}: HTMLProps<HTMLButtonElement> & ToggleViewButtonProps) => {
  return (
    <button
      className="border border-primary-300 rounded-sm p-2 hover:bg-primary-400/10 focus:bg-primary-400/10 focus-within::bg-primary-400/10 active:bg-primary-400/10"
      onClick={onClick}
    >
      {isListLayout ? <GridViewRoundedIcon /> : <ViewAgendaRoundedIcon />}
    </button>
  );
};
