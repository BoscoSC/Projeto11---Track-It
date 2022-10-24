import styled from "styled-components";

import Top from "./Top";
import Bottom from "./Bottom";

export default function HistoricPage() {
  return (
    <Page>
      <Top />

      <Content>
        <h2>Histórico</h2>
        <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
      </Content>

      <Bottom />
    </Page>
  );
}

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  margin: 70px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 10px 20px;
  gap: 10px;

  h2 {
    display: flex;
    flex-direction: column;
    font-size: 23px;
    color: #126ba5;
    margin: 20px 0;
  }

  p {
    color: #666666;
    font-size: 18px;
    line-height: 22px;
  }
`;