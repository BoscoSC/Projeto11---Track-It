import styled from "styled-components";
import { useState } from "react";
import useApp from "../context/useApp";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function NewHabitCard() {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [days, setDays] = useState([]);
  const [nameNewTask, setNameNewTask] = useState("");
  const { token, setCardAddOpen, loadHabits } = useApp();
  const [loading, setLoading] = useState(false);

  function addDay(index) {
    if (days.includes(index)) {
      const oldDays = [...days];
      const indexAux = days.indexOf(index);
      oldDays.splice(indexAux, 1);
      setDays(oldDays);
    } else {
      setDays([...days, index]);
    }
  }

  function closeCard() {
    setCardAddOpen(false);
  }

  function postNewHabitCard() {
    setLoading(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const body = {
      name: nameNewTask,
      days: days,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, body, config);

    promise.then(() => {
      setLoading(false);
      loadHabits();
      closeCard();
    });

    promise.catch((error) => {
      setLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <NewCard disabled={loading}>
      <input
        disabled={loading}
        type="text"
        placeholder="nome do hábito"
        value={nameNewTask}
        onChange={(e) => setNameNewTask(e.target.value)}
        required
      />

      <DaysWrapper>
        {week.map((day, index) => (
          <DaysButton
            key={index}
            onClick={() => addDay(index)}
            selected={days.includes(index)}
            disabled={loading}
          >
            {day}
          </DaysButton>
        ))}
      </DaysWrapper>

      <CompleteCard>
        <CancelNewHabit onClick={closeCard}>Cancelar</CancelNewHabit>
        <SaveNewHabit disabled={loading} onClick={postNewHabitCard}>
          {loading ? (
            <ThreeDots
              color="#ffffff"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Salvar"
          )}
        </SaveNewHabit>
      </CompleteCard>
    </NewCard>
  );
}

const NewCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;

  input {
    color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};
    background: ${(props) => (props.disabled ? "#F2F2F2" : "#ffffff")};
    width: 100%;
    height: 45px;
    font-size: 21px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 6px;
    padding: 0 11px;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #dbdbdb;
  }
`;

const DaysWrapper = styled.div`
  button {
    cursor: pointer;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    text-align: center;
  }
`;

const DaysButton = styled.button`
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  background: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
`;

const CompleteCard = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const CancelNewHabit = styled.div`
  cursor: pointer;
  font-size: 16px;
  background: #ffffff;
  border-radius: 4.63636px;
  padding: 10px 15px;
  color: #52b6ff;
  margin-right: 10px;
  height: 25px;
`;

const SaveNewHabit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  background: #52b6ff;
  border-radius: 4.63636px;
  padding: 10px 15px;
  height: 15px;
`;
