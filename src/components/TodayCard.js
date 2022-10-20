import { BsFillCheckSquareFill } from "react-icons/bs";
import styled from "styled-components";

export default function HabitCard() {
  return (
    <Card>
      <h3>Ler 1 capítulo de livro</h3>
      <p>
        Sequência atual: 3 dias <br />
        Seu recorde: 5 dias
      </p>

      <BsFillCheckSquareFill />
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
    color: #ebebeb;
    /* color: #8FC549; */
  }
`;