/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Theme } from "../styles";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { DefaultContentData } from "../types";

const DefaultContentsLayout = (contentData: DefaultContentData) => {
  return (
    <ContentContainer key={contentData.description}>
      <iframe
        height="250"
        src={contentData.videoLink}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <Title>{contentData.description}</Title>
      <DescriptionWrap>
        <Description>
          <a href={contentData.blogLink} css={LinkStyle}>
            스터디 기록 블로그 구경하기
          </a>
        </Description>
        {contentData.codeLink && (
          <Description>
            <Link css={LinkStyle} to={contentData.codeLink}>
              적용 코드 구경하기
            </Link>
          </Description>
        )}
      </DescriptionWrap>
    </ContentContainer>
  );
};

export default DefaultContentsLayout;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 30%;
  min-width: 360px;
`;

const Title = styled.div`
  color: ${Theme.color.defaultBlackColor};
  line-height: 140%;
  font-size: 18px;
  font-weight: bold;
`;

const DescriptionWrap = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 16px;
  color: ${Theme.color.defaultBlackColor};
`;

const Description = styled.li`
  list-style: disc;
  color: ${Theme.color.defaultBlackColor};
  line-height: 140%;
  font-size: 14px;

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
