import { getNewsItems } from "../lib/contentfulService";
import { ContentFulApiResponse } from "../types/contentFulApiResponse";
import { ContentFulNewsConfig } from "../types/contentFulNewsConfig";

export const contentfulDataFetching =
  async (): Promise<ContentFulApiResponse> => {
    const contentFulResponse: ContentFulNewsConfig = await getNewsItems();

    const {
      logo: {
        fields: {
          title: logoTitle = "",
          file: {
            url: logoUrl = "/vercel.svg",
            details: {
              image: { width: logoWidth = 150, height: logoHeight = 50 },
            },
          },
        },
      },
      menuLabel: menuLabel = "News",
      searchLabel: searchLabel = "Filter & Refine",
      title: pageTitle = "CredibleMind Cm test task",
    } = contentFulResponse;

    return {
      logoDetails: { logoUrl, logoHeight, logoWidth, logoTitle },
      menuLabel,
      searchLabel,
      pageTitle,
    };
  };
