import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import UserCreationLeftBar from "../../components/user/creation/UserCreationLeftBar";
import UserType from "../../components/user/creation/UserType";
import Mentor from "../../components/user/creation/Mentor";
import Mentee from "../../components/user/creation/Mentee";
import UserCreationComplete from "../../components/user/creation/UserCreationComplete";

const UserCreationPage = () => {
  const [mento, setMento] = useState(false);
  const [countStep, setCountStep] = useState(0);
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
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#FFB07A",
        }}
      >
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <UserCreationLeftBar
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
      </div>
    </>
  );
};

export default UserCreationPage;
