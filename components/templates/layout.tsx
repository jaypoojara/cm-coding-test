import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { LayoutProps } from "./types";

export const Layout = ({ children, logoDetails, menuLabel }: LayoutProps) => {
  return (
    <>
      <Header logoDetails={logoDetails} menuLabel={menuLabel} />
      {children}
      <Footer />
    </>
  );
};
