import { LayoutProps } from "../../types/layoutProps";
import { Footer } from "./footer";
import { Header } from "./header";

export const Layout = ({ children, logoDetails, menuLabel }: LayoutProps) => {
  return (
    <>
      <Header logoDetails={logoDetails} menuLabel={menuLabel} />
      {children}
      <Footer />
    </>
  );
};
