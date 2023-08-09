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
import UserManagementPage from "./page/admin/UserManagementPage";
import ProgramOnlineLivePage from "./page/program/ProgramOnlineLive";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import AdminLoginPage from "./page/admin/AdminLoginPage";
import ProgramListDetailPage from "./page/program/ProgramDetailPage";
import ProgramCompletionListPage from "./page/program/ProgramCompletionListPage";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/main" element={<MainPage />}></Route>
          <Route
            path="/projectProgress/:programId"
            element={<ProgramProgressPage />}
          ></Route>

          <Route
            path="/programCreation"
            element={<ProgramCreationPage />}
          ></Route>
          <Route path="/programList" element={<ProgramListPage />} />
          <Route
            path="/programListDetail/:programId"
            element={<ProgramListDetailPage />}
          ></Route>
          <Route path="/userCreation" element={<UserCreationPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/evaluation" element={<EvaluationPage />}></Route>
          <Route path="/" element={<LoginPage />}></Route>
          <Route
            path="/programCompletion"
            element={<ProgramCompletion />}
          ></Route>
          <Route
            path="/userManagementPage"
            element={<UserManagementPage />}
          ></Route>
          <Route path="/adminLoginPage" element={<AdminLoginPage />}></Route>
          <Route
            path="/ProgramCompletionList"
            element={<ProgramCompletionListPage />}
          ></Route>

          <Route path="onlineLive" element={<ProgramOnlineLivePage />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right" // 알람 위치 지정
        autoClose={1000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
      />
    </>
  );
}

export default App;
