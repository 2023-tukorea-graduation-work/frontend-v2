import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { logOut } from "../../../slice/user/loginSlice";
import ClearIcon from "@mui/icons-material/Clear";
import Modal from "react-modal";

const Header = () => {
  const customStyles = {
    overlay: {
      background: "rgba(125, 125, 125, 0.2)",
      backdropFilter: "blur(4px)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "25px",
      boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.15)",
      width: "23.813rem",
      height: "47.563rem",
      backgroundColor: "#f5f5f5",
      padding: "0",
    },
  };
  const dispatch = useAppDispatch();
  const userNo = useAppSelector((state) => state.login.object.USER_NO);
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const modalOn = () => {
    setIsOpen(true);
  };
  const modalOff = () => {
    setIsOpen(false);
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
      ? "white"
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
              <LogoStyle>1</LogoStyle>
              <NavStyle>
                <div>메인페이지</div>
                <div>플젝구인게시판</div>
                <div>플젝완료게시판</div>
                <div>과외구인게시판</div>
                <div>프로젝트소개</div>
              </NavStyle>
              <AlertWithLogin>
                <CircleStyle onClick={modalOn}>Alert</CircleStyle>
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                  ariaHideApp={false}
                >
                  <ModalodalHeader>
                    <div
                      style={{
                        marginLeft: "1.5rem",
                        fontSize: "1.2rem",
                        fontFamily: "NotoSansRegular",
                      }}
                    >
                      알림
                    </div>

                    <ClearIcon
                      onClick={modalOff}
                      sx={{ marginRight: "1.5rem", cursor: "pointer" }}
                    />
                  </ModalodalHeader>
                  <ModalDate>
                    <p>2023.03.15 목요일</p>
                  </ModalDate>
                </Modal>
                {userNo === null ? (
                  <CircleStyle
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Login
                  </CircleStyle>
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
  background-color: green;
`;

const CircleStyle = styled.div`
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  border: 3px solid #d9d9d9;
  border-radius: 50%;
  object-fit: fill;
  line-height: 5vh;
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  margin-right: 1rem;
`;
const AlertWithLogin = styled.div`
  display: flex;
`;
const ModalodalHeader = styled.div`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
`;
const ModalDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  height: 2rem;
  font-family: Inter;
  font-size: 0.5rem;
  color: #676767;
`;
export default Header;
