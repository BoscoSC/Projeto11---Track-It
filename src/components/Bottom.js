import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Bottom() {
  const navigate = useNavigate();
  const percentage = 66;

  const navigateToToday = () => {
    navigate("/hoje");
  };

  const navigateToHabits = () => {
    navigate("/habitos");
  };

  const navigateToHistoric = () => {
    navigate("/historico");
  };

  return (
    <BottomWrapper>
      <p onClick={navigateToHabits}>Hábitos</p>
      {/* <img src={Hoje} alt="Hoje" onClick={navigateToToday} /> */}
      <div onClick={navigateToToday}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent",
          })}
        />
      </div>
      <p onClick={navigateToHistoric}>Histórico</p>
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
  color: #52b6ff;
  padding: 25px 35px;

  p {
    cursor: pointer;
  }

  svg {
    position: fixed;
    bottom: 10px;
    right: 45%;
    cursor: pointer;
    width: 100px;
  }
`;
