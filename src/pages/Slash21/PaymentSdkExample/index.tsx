import { loadTossPayments } from "@tosspayments/payment-sdk";
import DefaultPageLayout from "../../../components/DefaultPageLayout";
import CodeImg from "../../assets/payment_sdk_example.png";
import styled from "@emotion/styled";
import { Theme } from "../../../styles";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";

const PaymentSdkExample = () => {
  // SDK 사용 예제
  const onClick = async () => {
    const tossPayments = await loadTossPayments(clientKey);
    tossPayments.requestPayment("카드", {
      amount: 1500000,
      orderName: "test_orderName_01",
      successUrl: window.location.origin,
      failUrl: window.location.origin,
      orderId: "test_orderId_01",
    });
  };

  return (
    <DefaultPageLayout title="@tosspayments/payment-sdk - 결제 API 사용 예제 코드">
      <Layout>
        <Contents>
          <Code src={CodeImg} alt="" />
          <Button onClick={onClick}>결제창 호출 (Click!)</Button>
        </Contents>
        <Contents>
          <Title>✍🏻 예제 코드를 작성하며 느낀 점</Title>
          <DescriptionWrap>
            <Description>
              패키지 설치를 하고, 코드를 작성하여 결제창 로드 연결까지 채 5분도
              걸리지 않음.
            </Description>
            <Description>
              사용법이 단순하고, 가이드가 잘 되어 있어서 구현하는 데 어려움이
              전혀 없었음.
            </Description>
            <Description>
              오류 발생 시 원인을 한 눈에 파악할 수 있도록 오류 메세지가 상당히
              친절하게 나옴.
            </Description>
            <Description>
              확실히 사용성에 신경을 많이 쓰셨다는 게 사용자 입장에서도 느껴져
              좋았음.
            </Description>
          </DescriptionWrap>
        </Contents>
      </Layout>
    </DefaultPageLayout>
  );
};

export default PaymentSdkExample;

const Layout = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 28px;
`;

const Contents = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Code = styled.img`
  width: 100%;
`;

const Button = styled.button`
  color: ${Theme.color.defaultBlackColor};
  border: 1px solid ${Theme.color.defaultBlackColor};
  border-radius: 12px;
  padding: 8px;
  line-height: 140%;
  font-size: 18px;
  cursor: pointer;

  :hover {
    color: ${Theme.color.defaultBlueColor};
    border: 1px solid ${Theme.color.defaultBlueColor};
  }
`;

const Title = styled.div`
  font-weight: bold;
  color: ${Theme.color.defaultBlackColor};
  line-height: 140%;
  font-size: 18px;
  padding-left: 8px;
`;

const DescriptionWrap = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 26px;
  color: ${Theme.color.defaultBlackColor};
`;

const Description = styled.li`
  list-style: decimal;
  color: ${Theme.color.defaultBlackColor};
  line-height: 140%;
  font-size: 16px;
`;
