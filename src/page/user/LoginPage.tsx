import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginForm from "../../components/user/login/form/LoginForm";
import LoginMenu from "../../components/user/login/menu/LoginMenu";
import styled from "@emotion/styled";
import { useAppSelector } from "../../store/hooks";
const LoginPage = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <>
      <BackgroundColor user_gb={user_gb}>
        <Grid container>
          <Grid xs={3}></Grid>
          <Grid xs={6}>
            <LoginForm></LoginForm>
            <LoginMenu></LoginMenu>
          </Grid>
          <Grid xs={3}></Grid>
        </Grid>
      </BackgroundColor>
    </>
  );
};
const BackgroundColor = styled.div<{ user_gb: string }>`
  width: 100%;
  height: 30vh;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#399DA3"};
`;
export default LoginPage;
