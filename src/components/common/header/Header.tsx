import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import "./Header.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../../slice/user/loginSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  const userNo = useAppSelector((state) => state.login.object.USER_NO);
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const navigate = useNavigate();
  const HeaderColor = styled.div`
    width: 100%;
    height: 10vh;
    background-color: ${userGb === "MENTO" ? "#399DA3" : "#ffb07a"};
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
                <div>P R O G R A M</div>
                <div>S E A R C H</div>
                <div>C L A S S</div>
              </NavStyle>
              {userNo === null ? (
                <ImageStyle
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Login
                </ImageStyle>
              ) : (
                <ImageStyle onClick={() => dispatch(logOut())}>
                  {userNo}
                </ImageStyle>
              )}
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
const NavStyle = styled.div`
  width: 35%;
  display: flex;
  font-family: Inter;
  font-size: 110%;
  color: #ffffff;
  justify-content: space-between;
`;
const ImageStyle = styled.div`
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
`;

export default Header;
