import Link from "next/link";

import { Container } from "../shared/container";
import Image from "next/image";
import { LogoDetails } from "../../interfaces/logoDetails";

interface Props {
  logoDetails: LogoDetails;
  menuLabel: string;
}

export const Header = (props: Props) => {
  const {
    logoDetails: { logoHeight, logoTitle, logoUrl, logoWidth },
    menuLabel,
  } = props;

  const absoluteLogoUrl = logoUrl.replace("//", "https://");
  return (
    <header>
      <Container className="flex flex-col gap-4 py-3">
        <div className="row w-fit h-auto flex items-center justify-center">
          <Image
            src={absoluteLogoUrl}
            width={logoWidth}
            height={logoHeight}
            alt={logoTitle}
          />
        </div>
        <hr />
        <nav className="flex items-center justify-between ">
          <h1 className="text-2xl text-primary-400 font-light">{menuLabel}</h1>
          <p className="text-secondary">John Doe</p>
        </nav>
      </Container>
      <hr />
    </header>
  );
};
