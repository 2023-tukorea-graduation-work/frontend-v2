import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/common/header/Header";
import MainPage from "./page/main/MainPage";
import ProgramProgressPage from "./page/program/ProgramProgressPage";
import ProgramCreationPage from "./page/program/ProgramCreationPage";
import ProgramListPage from "./page/program/ProgramListPage";
import ProgramDetail from "./components/program/detail/ProgramDetail";
import UserCreationPage from "./page/user/UserCreationPage";
import ProfilePage from "./page/user/ProfilePage";
import LoginPage from "./page/user/LoginPage";
import EvaluationPage from "./page/evaluation/EvaluationPage";
import ProgramCompletion from "./page/program/ProgramCompletion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<MainPage />}></Route>
          <Route
            path="/projectProgress"
            element={<ProgramProgressPage />}
          ></Route>
          <Route
            path="/programCreation"
            element={<ProgramCreationPage />}
          ></Route>
          <Route path="/programList" element={<ProgramListPage />} />
          <Route
            path="/programListDetail/:PROGRAM_NO"
            element={<ProgramDetail />}
          ></Route>
          <Route path="/userCreation" element={<UserCreationPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/evaluation" element={<EvaluationPage />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/programCompletion"
            element={<ProgramCompletion />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
