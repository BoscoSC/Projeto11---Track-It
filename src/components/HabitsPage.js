import styled from "styled-components";

import NewHabitCard from "./NewHabitCard";
import HabitCard from "./HabitCard";
import Top from "./Top";
import Bottom from "./Bottom";

export default function HabitsPage() {
  return (
    <Page>
      <Top />

      <Content>
        <AddHabit>
          <h2>Meus hábitos</h2>
          <button>+</button>
        </AddHabit>

        <NewHabitCard />

        {/* <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para 
        começar a trackear!</p> */}

        <HabitCard />
        <HabitCard />
        <HabitCard />

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
  padding: 80px 20px 110px 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #f2f2f2;
  gap: 10px;

  p {
    color: #666666;
    font-size: 18px;
  }
`;

const AddHabit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 23px;
  color: #126ba5;
  margin-bottom: 20px;

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