import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logoImg from "../assets/logoImg.png";
import { ThreeDots } from "react-loader-spinner";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/");
  };

  function registerUser(event) {
    event.preventDefault();
    setLoading(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const body = {
      email: email,
      name: name,
      image: img,
      password: password,
    };

    const promise = axios.post(URL, body);

    promise.then(() => {
      setLoading(false);
      alert("register success");
      navigateToLogin();
    });

    setLoading(false);
  }
  return (
    <LoginContainer>
      <LogoContainer>
        <img src={logoImg} alt="" />
      </LogoContainer>

      <InputContainer disabled={loading}>
        <form onSubmit={registerUser}>
          <input
            required
            disabled={loading}
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            disabled={loading}
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            required
            disabled={loading}
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            disabled={loading}
            type="url"
            placeholder="foto"
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
          <button disabled={loading} type="submit">
            {loading ? (
              <ThreeDots
                color="#ffffff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            ) : (
              "Cadastrar"
            )}
          </button>
        </form>

        <p onClick={navigateToLogin}>Já tem uma conta? Faça login!</p>
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
    color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};
    background: ${(props) => (props.disabled ? "#F2F2F2" : "#ffffff")};
    width: 100%;
    height: 45px;
    font-size: 21px;
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
