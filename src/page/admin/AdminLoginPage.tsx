import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import { useAppSelector } from "../../store/hooks";
import AdminLogin from "../../components/admin/adminLogin/AdminLogin";
const AdminLoginPage = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <>
      <BackgroundColor user_gb={user_gb}>
        <Grid container>
          <Grid xs={3}></Grid>
          <Grid xs={6}>
            <AdminLogin></AdminLogin>
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
export default AdminLoginPage;
