import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import ReturnLogin from "../../components/user/profile/ReturnLogin";
import Profile from "../../components/user/profile/Profile";

const ProfilePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          {isLogin ? <Profile /> : <ReturnLogin />}
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  );
};

export default ProfilePage;
