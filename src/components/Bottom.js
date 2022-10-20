import styled from "styled-components";
import Hoje from "../assets/Hoje.png";
import { useNavigate } from "react-router-dom";

export default function Bottom() {
  const navigate = useNavigate();

  const navigateToToday = () => {
    navigate("/hoje");
  };

  const navigateToHabits = () => {
    navigate("/habitos");
  };

  return (
    <BottomWrapper>
      <p onClick={navigateToHabits}>Hábitos</p>
      <div>
        <img src={Hoje} alt="Hoje" onClick={navigateToToday} />
      </div>
      <p>Histórico</p>
    </BottomWrapper>
  );
}

const BottomWrapper = styled.div`
  z-index: 100;
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

  p {
    cursor: pointer;
  }

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
