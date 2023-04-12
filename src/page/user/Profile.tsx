import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import MyPageFalse from "../components/MyPage/MyPageFalse";
import MyPageTrue from "../components/MyPage/MyPageTrue";


const Profile = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          {isLogin ? <MyPageTrue /> : <MyPageFalse />}
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  );
};

export default Profile;