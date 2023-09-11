import { HTMLProps } from "react";

export type CommonHtmlDivProps = HTMLProps<HTMLDivElement>;

export type DividerProps = {
  isHorizontal?: Boolean;
};

export type FormatDateProps = {
  date: number | Date | undefined;
  locale?: string;
};

export type ToggleViewButtonProps = { isListLayout: Boolean };
