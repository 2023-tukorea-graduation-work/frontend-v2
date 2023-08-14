import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import React, { useState } from "react";
import MenteeTestForm from "../../components/program/progress/test/MenteeTestForm";
import { useAppSelector } from "../../store/hooks";
import LeftBar from "../../components/common/leftbar/LeftBar";
import Lecture from "../../components/evaluation/Lecture";
import MentoOrMentee from "../../components/evaluation/MentoOrMentee";
import SystemWithReview from "../../components/evaluation/SystemWithReview";
import Mentee from "../../components/user/creation/Mentee";

const ProgramMenteeTestForm = () => {
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
              orderProcess={["01~", "05~", "10~"]}
            />
            <WhiteBox>
              <MenteeTestForm></MenteeTestForm>
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
export default ProgramMenteeTestForm;
