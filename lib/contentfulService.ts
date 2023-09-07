import { createClient } from "contentful";
import { ContentFulNewsConfig } from "../interfaces/contentFulNewsConfig";

const client = createClient({
  space: "js9tcr1yo5ym",
  accessToken: "v188QINSp_3nRKiTGTtvFcWxihls-vHNcXgEa3XmZWM",
  host: "cdn.contentful.com",
});

// Retrieve the list of blog posts from Contentful
export const getNewsItems = async () => {
  const response = await client.getEntries({
    content_type: "newsconfig",
  });

  const fields: ContentFulNewsConfig | undefined = response.items
    .map((item) => {
      return item.fields as ContentFulNewsConfig;
    })
    .pop();

  return fields;
};

export default client;
