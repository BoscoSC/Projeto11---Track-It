import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import useApp from "../context/useApp";

export default function HabitCard({ id, name, days }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const { token, loadHabits } = useApp();

  function deleteCard() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.delete(URL, config);

    promise.then(() => {
      loadHabits();
    });

    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  return (
    <Card>
      <h3>{name}</h3>
      <DaysWrapper>
        {week.map((item, index) => (
          <Days key={index} selected={days.includes(index)}>
            {item}
          </Days>
        ))}
      </DaysWrapper>
      <BsTrash onClick={deleteCard} />
    </Card>
  );
}

const Card = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;
  position: relative;

  h3 {
    color: #666666;
    width: 100%;
    font-size: 21px;
    margin-bottom: 6px;
    box-sizing: border-box;
  }

  svg {
    cursor: pointer;
    font-size: 20px;
    position: absolute;
    top: 10px;
    right: 10px;
    color: #666666;
  }
`;

const DaysWrapper = styled.div`
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    text-align: center;
  }
`;

const Days = styled.div`
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  background: ${(props) => (props.selected ? "#CFCFCF" : "#ffffff")};
`;
