import { ReactNode } from "react";

export type DefaultContentData = {
  description: string;
  videoLink: string;
  blogLink: string;
  codeLink?: string;
};

export type DefaultPageLayoutProps = {
  title: string;
  contentList?: DefaultContentData[];
  children?: ReactNode;
};
