import { ReactNode } from "react";
import { LogoDetails } from "./logoDetails";

export type LayoutProps = {
  children: ReactNode;
  logoDetails: LogoDetails;
  menuLabel: string;
};
