import logo from "../assets/logo.png";
import styled from "styled-components";
import useApp from "../context/useApp";

export default function Top() {
  const { image } = useApp();
  console.log(image);

  return (
    <TopWrapper>
      <img src={logo} alt="" />
      <ProfileImg src={image} alt="" />
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

const ProfileImg = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
`;