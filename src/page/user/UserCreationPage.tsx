import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import LeftBar from "../../components/common/leftbar/LeftBar";
import UserType from "../../components/user/creation/UserType";
import Mentor from "../../components/user/creation/Mentor";
import Mentee from "../../components/user/creation/Mentee";
import UserCreationComplete from "../../components/user/creation/UserCreationComplete";
import { useAppSelector } from "../../store/hooks";

const UserCreationPage = () => {
  const [mento, setMento] = useState(false);
  const [countStep, setCountStep] = useState(0);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const isMento = () => {
    setMento(!mento);
  };
  const increaseStep = () => {
    setCountStep((state) => state + 1);
    console.log(countStep);
  };
  const WhiteBox = styled.div`
    height: 87vh;
    width: 85%;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
    background-color: #fff;
    border-top-right-radius: 4rem;
  `;
  return (
    <>
      <BackgroundColor user_gb={user_gb}>
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <LeftBar
              countStep={countStep}
              orderProcess={[
                "01.멘토/멘티설정",
                "02.기본정보입력",
                "03.회원가입완료",
              ]}
            />
            <WhiteBox>
              {countStep === 0 && (
                <UserType increaseStep={increaseStep} isMento={isMento} />
              )}
              {countStep === 1 && mento && (
                <Mentor increaseStep={increaseStep} />
              )}
              {countStep === 1 && !mento && (
                <Mentee increaseStep={increaseStep} />
              )}
              {countStep === 2 && <UserCreationComplete />}
            </WhiteBox>
          </Grid>
          <Grid xs={1}></Grid>
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
export default UserCreationPage;
