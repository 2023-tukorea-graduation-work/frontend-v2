import React, { useEffect, useRef, useState } from "react";
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
import Logo2 from "../../../assets/Logo2.png";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useAppDispatch();

  const userNo = useAppSelector((state) => state.login.object.USER_NO);
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const navigate = useNavigate();
  const location = useLocation();
  const [test, setTest] = useState(false);
  const modalOn = () => {
    dispatch(alertModalChange({ value: true }));
  };
  const profileModalOn = () => {
    dispatch(profileModalChange({ value: true }));
  };
  const dropDownOff = () => {
    setTest(false);
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
                  src={Logo2}
                  style={{ width: "6rem", height: "5rem" }}
                ></img>
              </LogoStyle>
              <NavStyle>
                <NaviStyle
                  className="mainpage"
                  onClick={() => {
                    navigate("/main");
                  }}
                >
                  메인페이지
                </NaviStyle>
                <NaviStyle
                  className="programlistpage"
                  onClick={() => {
                    navigate("/programList");
                  }}
                >
                  플젝구인게시판
                </NaviStyle>
                <NaviStyle
                  className="programcompletionlistpage"
                  onClick={() => {
                    navigate("/ProgramCompletionList");
                  }}
                >
                  플젝완료게시판
                </NaviStyle>
                <NaviStyle className="classpage">과외구인게시판</NaviStyle>
              </NavStyle>
              <AlertWithLogin>
                <AlertModal />
                {userNo === null ? (
                  <>
                    <>
                      <CircleStyle
                        onClick={(e) => {
                          setTest(!test);
                        }}
                      >
                        <img alt="iconError" src={bell3} />
                      </CircleStyle>
                      <ProfileModal
                        dropDownState={test}
                        dropDownOff={dropDownOff}
                      >
                        <ul>
                          <li>&nbsp;</li>
                          <li onClick={() => navigate("/")}>로그인하기</li>
                          <li>&nbsp;</li>
                        </ul>
                      </ProfileModal>
                    </>
                  </>
                ) : (
                  <>
                    <CircleStyle
                      onClick={(e) => {
                        setTest(!test);
                      }}
                    >
                      <img alt="iconError" src={bell3} />
                    </CircleStyle>
                    <ProfileModal
                      dropDownState={test}
                      dropDownOff={dropDownOff}
                    >
                      <ul>
                        <li>&nbsp;</li>
                        <ProfileModalLi onClick={modalOn}>알림</ProfileModalLi>
                        <ProfileModalLi onClick={() => navigate("/profile")}>
                          내 프로필
                        </ProfileModalLi>

                        <ProfileModalLi
                          onClick={() => {
                            dispatch(logOut());
                            navigate("/main");
                          }}
                        >
                          로그아웃
                        </ProfileModalLi>

                        <li>&nbsp;</li>
                      </ul>
                    </ProfileModal>
                  </>
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
const ProfileModalLi = styled.li`
  cursor: pointer;
  line-height: 2rem;
  padding-left: 1rem;
  margin-right: 1rem;
  &:hover {
    background-color: #dedede;
    border-radius: 15px;
  }
`;
const NaviStyle = styled.div`
  cursor: pointer;
  width: 10rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Header;
