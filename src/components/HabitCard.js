import { BsTrash } from 'react-icons/bs';
import styled from "styled-components";

export default function HabitCard() {
  return(
    <Card>
      <h3>Ler 1 capítulo de livro</h3>

      <DaysWrapper>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
      </DaysWrapper>

      <BsTrash />
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
  button {
    cursor: pointer;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    text-align: center;
    color: #DBDBDB;
  }
`;