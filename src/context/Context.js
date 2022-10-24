import { createContext } from "react";
import { useState } from "react";
import axios from "axios";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [habits, setHabits] = useState([]);
  const [today, setToday] = useState([]);
  const [cardAddOpen, setCardAddOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);

  function loadHabits() {
    setIsLoading(true);
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((res) => {
      setIsLoading(false);
      setHabits(res.data);
    });

    promise.catch((error) => {
      setIsLoading(false);
      console.log(error.response.data);
    });
  }

  function loadToday() {
    setIsLoading(true);

    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);

    promise.then((answer) => {
      const total = answer.data.length;
      const dones = answer.data.filter((item) => item.done === true).length;
      const result = (dones / total) * 100;

      console.log("Total: ", total);
      console.log("Dones: ", dones);
      console.log("Result: ", result);

      setPercentage(result);
      setIsLoading(false);
      setToday(answer.data);
    });

    promise.catch((error) => {
      setIsLoading(false);
      alert(error.response.data.message);
    });
  }

  return (
    <ContextApp.Provider
      value={{
        token,
        setToken,
        name,
        setName,
        image,
        setImage,
        habits,
        setHabits,
        loadHabits,
        today,
        loadToday,
        cardAddOpen,
        setCardAddOpen,
        isLoading,
        percentage,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
};
