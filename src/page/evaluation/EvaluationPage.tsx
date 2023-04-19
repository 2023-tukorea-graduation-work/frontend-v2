import React, { useState } from "react";
import LeftBar from "../../components/common/leftbar/LeftBar";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../store/hooks";
const EvaluationPage = () => {
  const [countStep, setCountStep] = useState(0);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const increaseStep = () => {
    setCountStep((state) => state + 1);
    console.log(countStep);
  };
  return (
    <>
      <BackgroundColor user_gb={user_gb}>
        <Grid container>
          <Grid xs={1}></Grid>
          <Grid xs={10} sx={{ display: "flex" }}>
            <LeftBar
              countStep={countStep}
              orderProcess={[
                "01.강의평가",
                "02.멘토/멘티평가",
                "03.시스템평가 및 후기",
              ]}
            />
            <WhiteBox>
              {
                countStep === 0 && <div></div>
                // <UserType increaseStep={increaseStep} isMento={isMento} />
              }
              {countStep === 1 && <div></div>}
              {countStep === 2 && <div></div>}
            </WhiteBox>
          </Grid>
          <Grid xs={1}></Grid>
        </Grid>
      </BackgroundColor>
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
const BackgroundColor = styled.div<{ user_gb: string }>`
  width: 100%;
  height: 30vh;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#399DA3"};
`;
export default EvaluationPage;
