import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./global";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import HabitsPage from "./HabitsPage";
import TodayPage from "./TodayPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}