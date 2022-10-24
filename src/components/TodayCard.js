import { BsFillCheckSquareFill } from "react-icons/bs";
import styled from "styled-components";
import useApp from "../context/useApp";
import axios from "axios";

export default function HabitCard({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
}) {
  const { token, loadToday } = useApp();

  function markAsDone() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, {}, config);

    promise.then(() => {
      loadToday();
    });

    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  function markAsNotDone() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.post(URL, {}, config);

    promise.then(() => {
      loadToday();
    });

    promise.catch((error) => {
      alert(error.response.data.message);
    });
  }

  return (
    <Card>
      <h3>{name}</h3>
      <p>
        Sequência atual:{" "}
        <Quantity isDone={done}>{currentSequence} dias</Quantity> <br />
        Seu recorde:{" "}
        <Quantity isDone={done && currentSequence === highestSequence}>
          {highestSequence} dias
        </Quantity>
      </p>

      {done ? (
        <BsFillCheckSquareFill
          onClick={markAsNotDone}
          style={{ color: "#8FC549" }}
        />
      ) : (
        <BsFillCheckSquareFill
          onClick={markAsDone}
          style={{ color: "#ebebeb" }}
        />
      )}
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

  p {
    font-size: 13px;
    color: #666666;
  }

  svg {
    cursor: pointer;
    font-size: 70px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const Quantity = styled.span`
  ${(props) => props.isDone && `color: #8FC549`}
`;
