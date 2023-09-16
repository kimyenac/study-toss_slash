import DefaultPageLayout from "../../components/DefaultPageLayout";
import { useMemo } from "react";
import { DefaultContentData } from "../../types";

const Slash21 = () => {
  const contentList: DefaultContentData[] = useMemo(() => {
    return [
      {
        videoLink:
          "https://www.youtube.com/embed/E4_0WWqmF3M?si=0C7ydc_90kvIwFtb",
        blogLink: "",
        codeLink: "",
      },
    ];
  }, []);

  return <DefaultPageLayout title="SLASH 21" contentList={contentList} />;
};

export default Slash21;
