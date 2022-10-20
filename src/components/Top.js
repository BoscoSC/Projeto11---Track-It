import logo from "../assets/logo.png";
import userImg from "../assets/userImg.png";
import styled from "styled-components";

export default function Top() {
  return (
    <TopWrapper>
      <img src={logo} alt="" />
      <img src={userImg} alt="" />
    </TopWrapper>
  );
}

const TopWrapper = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #126ba5;
  height: 70px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;