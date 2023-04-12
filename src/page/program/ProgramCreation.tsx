import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import LeftProcess from "../components/Register/LeftProcess/LeftProcess2";
import PrStepFirst from "../components/ProgramCreation/PrStepFirst/PrStepFirst";
import PrStepSecond from "../components/ProgramCreation/PrStepSecond/PrStepSecond";
import PrStepThird from "../components/ProgramCreation/PrStepThird/PrStepThird";


const ProgramCreation = () => {
  const [countStep, setCountStep] = useState(0);
  const increaseStep = () => {
    setCountStep((state) => state + 1);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "30vh",
          backgroundColor: "#83C2C5",
        }}
      >
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <LeftProcess
              countStep={countStep}
              orderProcess={["01.분야 설정", "02.상세정보입력", "03.생성완료"]}
            />
            <WhiteBox>
              {countStep === 0 && <PrStepFirst increaseStep={increaseStep} />}
              {countStep === 1 && <PrStepSecond increaseStep={increaseStep} />}
              {countStep === 2 && <PrStepThird />}
            </WhiteBox>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </div>
    </>
  );
};
const WhiteBox = styled.div`
  height: 87vh;
  width: 85%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-top-right-radius: 4rem;
`;

export default ProgramCreation;