export type DefaultContentData = {
  videoLink: string;
  blogLink: string;
  codeLink?: string;
};

export type DefaultPageLayoutProps = {
  title: string;
  contentList: DefaultContentData[];
};
