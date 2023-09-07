export interface ContentFulNewsConfig {
  menuLabel: string;
  title: string;
  logo: Logo;
  searchLabel: string;
}

export interface Logo {
  fields: Fields;
}

export interface Fields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}
