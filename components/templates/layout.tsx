import { ReactNode } from "react";

import { Footer } from "./footer";
import { Header } from "./header";
import { LogoDetails } from "../../interfaces/logoDetails";

interface LayoutPropsInterface {
  children: ReactNode;
  logoDetails: LogoDetails;
  menuLabel: string;
}

export const Layout = ({
  children,
  logoDetails,
  menuLabel,
}: LayoutPropsInterface) => {
  return (
    <>
      <Header logoDetails={logoDetails} menuLabel={menuLabel} />
      {children}
      <Footer />
    </>
  );
};
