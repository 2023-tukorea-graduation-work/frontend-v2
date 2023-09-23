import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginForm from "../../components/user/login/form/LoginForm";
import LoginMenu from "../../components/user/login/menu/LoginMenu";
import styled from "@emotion/styled";
import Topic from "../../components/program/completion/topic/Topic";
import PlanWithActivitie from "../../components/program/completion/planWithActivitie/PlanWithActivitie";
import Satisfaction from "../../components/program/completion/satisfactionWithReview/Satisfaction";
import Review from "../../components/program/completion/satisfactionWithReview/Review";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  loadItemDetailAsync,
  programParticipateAsync,
} from "../../slice/program/programDetailSlice";

import programIMG from "../../assets/program.png";

const ProgramCompletion = () => {

  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  
  return (
    <>
      <img
                  alt="iconError"
                  src={programIMG}
                  style={{ width: "100%", height: "100%" }}
                ></img>
      {/* <BackgroundColor user_gb={user_gb}>
        <Topic />
      </BackgroundColor> */}
    </>
  );
};
const BackgroundColor = styled.div<{ user_gb: string }>`
  width: 100%;
  height: 54.5rem;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#399DA3"};
`;
const Title = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;
  font-family: NotoSansRegular;
  font-size: 1.5rem;
  line-height: 3rem;
`;
const PlanWithActivitieList = styled.div`
  dispaly: flex;
  flex-direction: column;
`;
const SatisfactionWithReviewList = styled.div`
  height: 150rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ProgramCompletion;
