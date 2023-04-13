import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import ProgramCreationLeftBar from "../../components/program/creation/ProgramCreationLeftBar";
import Category from "../../components/program/creation/Category";
import Detail from "../../components/program/creation/Detail";
import Complete from "../../components/program/creation/ProgramCreationComplete";

const ProgramCreationPage = () => {
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
            <ProgramCreationLeftBar
              countStep={countStep}
              orderProcess={["01.분야 설정", "02.상세정보입력", "03.생성완료"]}
            />
            <WhiteBox>
              {countStep === 0 && <Category increaseStep={increaseStep} />}
              {countStep === 1 && <Detail increaseStep={increaseStep} />}
              {countStep === 2 && <Complete />}
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

export default ProgramCreationPage;
