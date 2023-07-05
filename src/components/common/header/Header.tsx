import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../../slice/user/loginSlice";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "react-modal";
import AlertModal from "./AlertModal";

import {
  alertModalChange,
  profileModalChange,
} from "../../../slice/common/headerSlice";
import ProfileModal from "./ProfileModal";
import bell3 from "../../../assets/bell3.png";
import testLogo from "../../../assets/testLogo.png";

const Header = () => {
  const dispatch = useAppDispatch();
  const userNo = useAppSelector((state) => state.login.object.USER_NO);
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const navigate = useNavigate();
  const location = useLocation();
  const modalOn = () => {
    dispatch(alertModalChange({ value: true }));
  };
  const profileModalOn = () => {
    dispatch(profileModalChange({ value: true }));
  };

  const NavStyle = styled.div`
    width: 70%;
    display: flex;
    font-family: Inter;
    font-size: 110%;
    color: ${location.pathname === "/projectProgress" ? "black" : "#ffffff"};
    justify-content: space-between;
  `;

  const HeaderColor = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${location.pathname === "/projectProgress"
      ? ""
      : userGb === "MENTO"
      ? "#399DA3"
      : "#ffb07a"};
  `;

  return (
    <>
      <HeaderColor>
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ height: "10vh" }}>
            <HeaderStyle>
              <LogoStyle>
                <img
                  alt="iconError"
                  src={testLogo}
                  style={{ width: "6rem", height: "5rem" }}
                ></img>
              </LogoStyle>
              <NavStyle>
                <div
                  className="mainpage"
                  onClick={() => {
                    navigate("/main");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  메인페이지
                </div>
                <div
                  className="programlistpage"
                  onClick={() => {
                    navigate("/programList");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  플젝구인게시판
                </div>
                <div
                  className="programcompletionlistpage"
                  onClick={() => {
                    navigate("/ProgramCompletionList");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  플젝완료게시판
                </div>
                <div
                  className="classpage"
                  onClick={() => {
                    navigate("/");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  과외구인게시판
                </div>
              </NavStyle>
              <AlertWithLogin>
                <CircleStyle onClick={modalOn}>
                  <img alt="iconError" src={bell3} />
                </CircleStyle>
                <AlertModal />
                {userNo === null ? (
                  <>
                    <CircleStyle onClick={profileModalOn}>Login</CircleStyle>
                    <ProfileModal />
                  </>
                ) : (
                  <CircleStyle onClick={() => dispatch(logOut())}>
                    {userNo}
                  </CircleStyle>
                )}
              </AlertWithLogin>
            </HeaderStyle>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </HeaderColor>
    </>
  );
};

const HeaderStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoStyle = styled.div`
  width: 4rem;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleStyle = styled.div`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  object-fit: fill;
  line-height: 5vh;
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
const AlertWithLogin = styled.div`
  display: flex;
`;
export default Header;
