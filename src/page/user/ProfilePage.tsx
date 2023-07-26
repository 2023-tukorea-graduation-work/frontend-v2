import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import ReturnLogin from "../../components/user/profile/ReturnLogin";
import Profile from "../../components/user/profile/Profile";
import { useAppSelector } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const ProfilePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const USER_NO = useAppSelector((state) => state.login.object.USER_NO);
  useEffect(() => {
    if (!USER_NO) {
      navigate("/");
      toast.warning("로그인을 먼저하세요");
    }
  }, []);
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
