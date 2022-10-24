import { BsTrash } from "react-icons/bs";
import styled from "styled-components";
import axios from "axios";
import useApp from "../context/useApp";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function HabitCard({ id, name, days }) {
  const week = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [open, setOpen] = useState(false);

  const { token, loadHabits, loadToday } = useApp();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      loadToday();
    });

    promise.catch((error) => {
      alert(error.response.data.message);
    });

    handleClose();
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
      <BsTrash onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Deseja excluir este hábito?
          </Typography>
          <WrapperButtons>
            <Cancel onClick={handleClose}>Não</Cancel>
            <Confirm onClick={deleteCard}>Sim</Confirm>
          </WrapperButtons>
        </Box>
      </Modal>
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

const WrapperButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 16px;
`;

const Cancel = styled.button`
  cursor: pointer;
  font-size: 16px;
  background: #ffffff;
  border-radius: 4.63636px;
  padding: 10px 15px;
  color: #52b6ff;
  margin-right: 10px;
  height: 25px;
`;

const Confirm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  background: #52b6ff;
  border-radius: 4.63636px;
  padding: 10px 15px;
  height: 15px;
`;
