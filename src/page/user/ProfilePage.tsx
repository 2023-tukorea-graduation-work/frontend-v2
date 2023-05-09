import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import ReturnLogin from "../../components/user/profile/ReturnLogin";
import Profile from "../../components/user/profile/Profile";
import { useAppSelector } from "../../store/hooks";

const ProfilePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <BackGround user_gb={user_gb}>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          {isLogin ? <Profile /> : <ReturnLogin />}
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </BackGround>
  );
};
const BackGround = styled.div<{ user_gb: string }>`
  height: 90vh;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#ffb07a" : "#399DA3"};
`;

export default ProfilePage;
