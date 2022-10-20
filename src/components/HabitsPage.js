import logo from "../assets/logo.png";
import Hoje from "../assets/Hoje.png";
import userImg from "../assets/userImg.png";
import styled from "styled-components";

import NewHabitCard from "./NewHabitCard";
import HabitCard from "./HabitCard";

export default function HabitsPage() {
  return (
    <Page>
      <Top>
        <img src={logo} alt="" />
        <img src={userImg} alt="" />
      </Top>

      <Content>
        <AddHabit>
          <h2>Meus hábitos</h2>
          <button>+</button>
        </AddHabit>

        <NewHabitCard />

        {/* <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para 
        começar a trackear!</p> */}

        <HabitCard />
      </Content>

      <Bottom>
        <p>Hábitos</p>
        <div>
          <img src={Hoje} alt="Hoje" />
        </div>
        <p>Histórico</p>
      </Bottom>
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

const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #126ba5;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Content = styled.div`
  margin: 70px 0;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #e5e5e5;
  padding: 10px 20px;
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

const Bottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-align: center;
  color: #52b6ff;
  padding: 25px 35px;

  div {
    width: 30%;
    position: fixed;
    bottom: 10px;
    right: 35%;

    img {
      cursor: pointer;
    }
  }
`;
