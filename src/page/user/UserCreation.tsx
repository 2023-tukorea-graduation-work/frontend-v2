import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import LeftProcess from "../components/Register/LeftProcess/LeftProcess";
import StepFirst from "../components/Register/StepFirst/StepFirst";
import StepSecondMentor from "../components/Register/StepSecond/StepSecondMentor";
import StepThird from "../components/Register/StepThird/StepThird";
import StepSecondMentee from "../components/Register/StepSecond/StepSecondMentee";

const UserCreation = () => {
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
            <LeftProcess
              countStep={countStep}
              orderProcess={[
                "01.멘토/멘티설정",
                "02.기본정보입력",
                "03.회원가입완료",
              ]}
            />
            <WhiteBox>
              {countStep === 0 && (
                <StepFirst increaseStep={increaseStep} isMento={isMento} />
              )}
              {countStep === 1 && mento && (
                <StepSecondMentor increaseStep={increaseStep} />
              )}
              {countStep === 1 && !mento && (
                <StepSecondMentee increaseStep={increaseStep} />
              )}
              {countStep === 2 && <StepThird />}
            </WhiteBox>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserCreation;