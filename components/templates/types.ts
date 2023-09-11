import { ReactNode } from "react";

export type LogoDetails = {
  logoUrl: string;
  logoHeight: number;
  logoWidth: number;
  logoTitle: string;
};

export type HeaderProps = {
  logoDetails: LogoDetails;
  menuLabel: string;
};

export type LayoutProps = {
  logoDetails: LogoDetails;
  menuLabel: string;
  children: ReactNode;
};
