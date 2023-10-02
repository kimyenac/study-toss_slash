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
      {
        description: "Micro-frontend React, 점진적으로 도입하기",
        videoLink:
          "https://www.youtube.com/embed/DHPeeEvDbdo?si=JKO0Ninx1Z3LLt-M",
        blogLink: "https://yeroyal.tistory.com/154",
      },
      {
        description: "토스팀을 위한 슬랙봇 설계",
        videoLink:
          "https://www.youtube.com/embed/EChKnpxgX-4?si=I-492m2Oev6EbemR",
        blogLink: "https://yeroyal.tistory.com/155",
      },
    ];
  }, []);

  return <DefaultPageLayout title="SLASH 21" contentList={contentList} />;
};

export default Slash21;
