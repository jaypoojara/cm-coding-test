export type ContentFulNewsConfig = {
  menuLabel: string;
  title: string;
  logo: Logo;
  searchLabel: string;
};

export type Logo = {
  fields: Fields;
};

export type Fields = {
  title: string;
  description: string;
  file: File;
};

export type File = {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
};

export type Details = {
  size: number;
  image: Image;
};

export type Image = {
  width: number;
  height: number;
};
