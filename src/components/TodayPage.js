import styled from "styled-components";

import TodayCard from "./TodayCard";
import Top from "./Top";
import Bottom from "./Bottom";
import useApp from "../context/useApp";
import { useEffect } from "react";
import dayjs from "dayjs";

export default function TodayPage() {
  const week = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const { today, loadToday, isLoading, percentage } = useApp();
  const dayOfWeek = week[dayjs().day()];
  const day = dayjs().date();
  const month = dayjs().month() + 1;

  useEffect(() => {
    loadToday();
  }, []);

  return (
    <Page>
      <Top />

      <Content>
        <ProgressionTab>
          <h2>
            {dayOfWeek}, {day}/{month}
          </h2>
          {percentage === 0 ? (
            <Text>Nenhum hábito concluído ainda</Text>
          ) : (
            <Text isGreen>{percentage}% dos hábitos concluídos</Text>
          )}
        </ProgressionTab>

        {today.length === 0 && !isLoading ? (
          <p>
            Você não tem nenhum hábito para hoje cadastrado ainda. Adicione um
            hábito para começar a trackear!
          </p>
        ) : (
          today.map((item) => (
            <TodayCard
              key={item.id}
              id={item.id}
              name={item.name}
              done={item.done}
              currentSequence={item.currentSequence}
              highestSequence={item.highestSequence}
            />
          ))
        )}
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
  padding: 80px 20px 110px 20px;

  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f2f2f2;

  gap: 10px;
`;

const ProgressionTab = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 23px;
  color: #126ba5;
  margin: 20px 0;

  h2 {
    line-height: 29px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  color: ${(props) => (props.isGreen ? "#8FC549" : "#bababa")};
`;
