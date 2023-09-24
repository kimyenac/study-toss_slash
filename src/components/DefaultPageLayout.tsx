import styled from "@emotion/styled";
import { Theme } from "../styles";
import { DefaultPageLayoutProps } from "../types";
import DefaultContentsLayout from "./DefaultContentsLayout";

const DefaultPageLayout = ({
  title,
  contentList,
  children,
}: DefaultPageLayoutProps) => {
  return (
    <Wrap>
      <Container>
        <Title>{title}</Title>
        <Horizontal />
        <ContentWrap>
          {contentList &&
            contentList.map((item) => (
              <DefaultContentsLayout
                description={item.description}
                videoLink={item.videoLink}
                blogLink={item.blogLink}
                codeLink={item.codeLink}
              />
            ))}
        </ContentWrap>
        {children}
      </Container>
    </Wrap>
  );
};

export default DefaultPageLayout;

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  max-width: 1200px;
  gap: 8px;
`;

const Title = styled.div`
  color: ${Theme.color.defaultBlackColor};
  font-size: 32px;
  font-weight: bold;
  line-height: 140%;
`;

const Horizontal = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Theme.color.defaultBlackColor};
`;

const ContentWrap = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 24px;
`;
