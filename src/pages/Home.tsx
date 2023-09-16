import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Theme } from "../styles";

const Home = () => {
  return (
    <Wrap>
      <Container>
        <Title>SLASH</Title>
        <Horizontal />
        <Description>토스 개발자 컨퍼런스 SLASH - 기록 ✍🏻</Description>
        <ButtonWrap>
          <Button to="/slash-21">SLASH 21</Button>
        </ButtonWrap>
      </Container>
    </Wrap>
  );
};

export default Home;

const Wrap = styled.div`
  height: 100vh;
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

const Description = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 140%;
  color: ${Theme.color.defaultBlackColor};
`;

const ButtonWrap = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Button = styled(Link)`
  text-decoration: none;
  color: ${Theme.color.defaultBlackColor};
  border: 1px solid ${Theme.color.defaultBlackColor};
  border-radius: 12px;
  padding: 8px;
  line-height: 140%;
  font-size: 14px;

  :hover {
    color: ${Theme.color.defaultBlueColor};
    border: 1px solid ${Theme.color.defaultBlueColor};
  }
`;
