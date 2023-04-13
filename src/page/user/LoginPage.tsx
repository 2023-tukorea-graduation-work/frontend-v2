import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginForm from "../../components/user/login/form/LoginForm";
import LoginMenu from "../../components/user/login/menu/LoginMenu";

const LoginPage = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#FFB07A",
        }}
      >
        <Grid container>
          <Grid xs={3}></Grid>
          <Grid xs={6}>
            <LoginForm></LoginForm>
            <LoginMenu></LoginMenu>
          </Grid>
          <Grid xs={3}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default LoginPage;
