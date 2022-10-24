import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import logoImg from "../assets/logoImg.png";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import useApp from "../context/useApp";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setToken, setImage, setName } = useApp();

  const navigateToToday = () => {
    navigate("/hoje");
  };

  const navigateToRegister = () => {
    navigate("/cadastro");
  };

  function loginUser(event) {
    event.preventDefault();
    setLoading(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    const body = {
      email: email,
      password: password,
    };

    const promise = axios.post(URL, body);

    promise.then((answer) => {
      setLoading(false);
      console.log(answer.data);
      setToken(answer.data.token);
      setName(answer.data.name);
      setImage(answer.data.image);
      navigateToToday();
    });

    promise.catch((error) => {
      setLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <LoginContainer>
      <LogoContainer>
        <img src={logoImg} alt="" />
      </LogoContainer>

      <InputContainer disabled={loading}>
        <form onSubmit={loginUser}>
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
              "Entrar"
            )}
          </button>
        </form>

        <p onClick={navigateToRegister}>Não tem uma conta? Cadastre-se!</p>
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
    margin-bottom: 6px;
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
    cursor: pointer;
  }

  p {
    text-decoration-line: underline;
    color: #52b6ff;
    cursor: pointer;
  }
`;
