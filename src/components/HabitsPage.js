import styled from "styled-components";
import NewHabitCard from "./NewHabitCard";
import HabitCard from "./HabitCard";
import Top from "./Top";
import Bottom from "./Bottom";
import useApp from "../context/useApp";
import { useEffect } from "react";

export default function HabitsPage() {
  const { habits, setCardAddOpen, cardAddOpen, loadHabits, isLoading } =
    useApp();

  useEffect(() => {
    loadHabits();
  }, []);

  function openCardNewHabit() {
    setCardAddOpen(true);
  }

  return (
    <Page>
      <Top />

      <Content>
        <AddHabit>
          <h2>Meus hábitos</h2>
          <button onClick={openCardNewHabit}>+</button>
        </AddHabit>

        {cardAddOpen && <NewHabitCard />}

        {habits.length === 0 && !isLoading ? (
          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        ) : (
          habits.map((item) => (
            <HabitCard
              key={item.id}
              id={item.id}
              name={item.name}
              days={item.days}
            />
          ))
        )}
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
