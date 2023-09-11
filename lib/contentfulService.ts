import { createClient } from "contentful";
import { ContentFulNewsConfig } from "../interfaces/contentFulNewsConfig";

const client = createClient({
  space: "js9tcr1yo5ym",
  accessToken: "v188QINSp_3nRKiTGTtvFcWxihls-vHNcXgEa3XmZWM",
  host: "cdn.contentful.com",
});

// Retrieve the list of blog posts from Contentful
export const getNewsItems = async (): Promise<ContentFulNewsConfig> => {
  const response = await client.getEntries({
    content_type: "newsconfig",
  });

  const fields: ContentFulNewsConfig = response.items.map(
    (item): ContentFulNewsConfig => {
      return item.fields as ContentFulNewsConfig;
    }
  ).pop() as ContentFulNewsConfig;

  return fields;
};

export default client;
