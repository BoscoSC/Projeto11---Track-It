import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImg from "../assets/logoImg.png";

export default function RegisterPage() {
  return (
    <LoginContainer>
      <LogoContainer>
        <img src={logoImg} alt="" />
      </LogoContainer>

      <InputContainer>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />
        <button>Cadastrar</button>
        <Link to={`/`}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </InputContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20% 10%;
`;

const LogoContainer = styled.div`
  width: 50%;

  img {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    color: #666666;
    width: 100%;
    height: 45px;
    font-size: 21px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    margin-bottom: 8px;
    padding: 0 11px;
    box-sizing: border-box;
  }

  input::placeholder {
    color: #dbdbdb;
  }

  button {
    width: 100%;
    height: 45px;
    color: #ffffff;
    font-size: 21px;
    background: #52b6ff;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
  }

  p {
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;