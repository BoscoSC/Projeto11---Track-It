import styled from "styled-components";

import TodayCard from "./TodayCard";
import Top from "./Top";
import Bottom from "./Bottom";

export default function TodayPage() {
  return (
    <Page>
      <Top />

      <Content>
        <ProgressionTab>
          <h2>Segunda, 17/05</h2>
          <p>Nenhum hábito concluído ainda</p>
        </ProgressionTab>

        <TodayCard />
        <TodayCard />
        <TodayCard />
        <TodayCard />
        <TodayCard />
        <TodayCard />
      </Content>

      <Bottom />
    </Page>
    //content
    //bottom
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
  background-color: #F2F2F2;

  padding: 10px 20px;
  gap: 10px;
`;

const ProgressionTab = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 23px;
  color: #126ba5;
  margin: 20px 0;

  p {
    font-size: 18px;
    color: #BABABA;
  }

  button {
    cursor: pointer;
    color: #ffffff;
    background-color: #52b6ff;
    width: 40px;
    height: 40px;
    border-radius: 4.63636px;
    text-align: center;
    font-size: 27px;
  }
`;