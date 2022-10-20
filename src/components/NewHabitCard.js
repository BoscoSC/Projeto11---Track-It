import styled from "styled-components";

export default function NewHabitCard() {
  return (
    <NewCard>
      <input type="text" placeholder="nome do hábito" />

      <DaysWrapper>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
      </DaysWrapper>

      <CompleteCard>
        <div>Cancelar</div>
        <button>Salvar</button>
      </CompleteCard>
    </NewCard>
  );
}

const NewCard = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  padding: 18px;

  input {
    color: #666666;
    width: 100%;
    height: 45px;
    font-size: 21px;
    background: #ffffff;
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
    color: #DBDBDB;
  }

  /* button {    //clicado
    cursor: pointer;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    text-align: center;
    color: #ffffff;
    background-color: #CFCFCF;
  } */
`;

const CompleteCard = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  div{
    cursor: pointer;
    font-size: 16px;
    background: #ffffff;
    border-radius: 4.63636px;
    padding: 10px 15px;
    color: #52B6FF;
    margin-right: 10px;
  }

  button {
    cursor: pointer;
    color: #ffffff;
    font-size: 16px;
    background: #52b6ff;
    border-radius: 4.63636px;
    padding: 10px 15px;
  }
`;