/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Theme } from "../styles";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import { DefaultPageLayoutProps } from "../types";

const DefaultPageLayout = ({ title, contentList }: DefaultPageLayoutProps) => {
  return (
    <Wrap>
      <Container>
        <Title>{title}</Title>
        <Horizontal />
        <ContentWrap>
          {contentList.map((item) => (
            <ContentContainer key={item.blogLink}>
              <iframe
                height="250"
                src={item.videoLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <DescriptionWrap>
                <Description>
                  <a href={item.blogLink} css={LinkStyle}>
                    스터디 기록 블로그 구경하기
                  </a>
                </Description>
                {item.codeLink && (
                  <Description>
                    <Link css={LinkStyle} to={item.codeLink}>
                      적용 코드 구경하기
                    </Link>
                  </Description>
                )}
              </DescriptionWrap>
            </ContentContainer>
          ))}
        </ContentWrap>
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
  align-items: center;
  gap: 24px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 30%;
  min-width: 400px;
`;

const DescriptionWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: 140%;
  font-size: 14px;
  padding-left: 26px;
  color: ${Theme.color.defaultBlackColor};
`;

const Description = styled.li`
  list-style: disc;
  color: ${Theme.color.defaultBlackColor};
  line-height: 140%;
  font-size: 16px;

  :hover {
    color: ${Theme.color.defaultBlueColor};
  }
`;

const LinkStyle = css`
  text-decoration: none;
  color: ${Theme.color.defaultBlackColor};

  :hover {
    color: ${Theme.color.defaultBlueColor};
  }
`;
