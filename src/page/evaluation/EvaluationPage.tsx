import React, { useState } from "react";
import LeftBar from "../../components/common/leftbar/LeftBar";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2";
import { useAppSelector } from "../../store/hooks";
import Lecture from "../../components/evaluation/Lecture";
import MentoOrMentee from "../../components/evaluation/MentoOrMentee";
import SystemWithReview from "../../components/evaluation/SystemWithReview";
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
                "01.만족도 평가",
                "02.멘토링 후기",
                "03.팝업식 설문조사",
              ]}
            />
            <WhiteBox>
              {
                countStep === 0 && (
                  <Lecture increaseStep={increaseStep}></Lecture>
                )
                // <UserType increaseStep={increaseStep} isMento={isMento} />
              }
              {countStep === 1 && (
                <SystemWithReview
                  increaseStep={increaseStep}
                ></SystemWithReview>
              )}
              {countStep === 2 && (
                <MentoOrMentee increaseStep={increaseStep}></MentoOrMentee>
              )}
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
