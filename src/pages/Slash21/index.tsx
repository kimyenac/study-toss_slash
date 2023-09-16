import DefaultPageLayout from "../../components/DefaultPageLayout";
import { useMemo } from "react";
import { DefaultContentData } from "../../types";

const Slash21 = () => {
  const contentList: DefaultContentData[] = useMemo(() => {
    return [
      {
        description: "결제 시스템의 SDK와 API 디자인",
        videoLink:
          "https://www.youtube.com/embed/E4_0WWqmF3M?si=0C7ydc_90kvIwFtb",
        blogLink: "https://yeroyal.tistory.com/153",
        codeLink: "/slash-21/payment-sdk-example",
      },
    ];
  }, []);

  return <DefaultPageLayout title="SLASH 21" contentList={contentList} />;
};

export default Slash21;
