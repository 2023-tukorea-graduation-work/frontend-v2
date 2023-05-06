import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import LoginForm from "../../components/user/login/form/LoginForm";
import LoginMenu from "../../components/user/login/menu/LoginMenu";
import styled from "@emotion/styled";
import { useAppSelector } from "../../store/hooks";
import Topic from "../../components/program/completion/topic/Topic";
import PlanWithActivitie from "../../components/program/completion/planWithActivitie/PlanWithActivitie";
import Satisfaction from "../../components/program/completion/satisfactionWithReview/Satisfaction";
import Review from "../../components/program/completion/satisfactionWithReview/Review";
const ProgramCompletion = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <>
      <BackgroundColor user_gb={user_gb}>
        <Topic></Topic>
      </BackgroundColor>
      <Title>
        {/* 01,02,03을 왼쪽 간격을 맞추기 위함 */}
        <div style={{ width: "30rem" }}>
          <p>02</p>
          <p
            style={{
              fontFamily: "NotoSansBold",
              fontSize: "2.5rem",
              lineHeight: "4rem",
              width: "20rem",
            }}
          >
            학습 계획 & 활동
          </p>
        </div>
        {/* 01,02,03을 왼쪽 간격을 맞추기 위함 */}
        <div style={{ width: "50rem" }}></div>
      </Title>
      <PlanWithActivitieList>
        <PlanWithActivitie></PlanWithActivitie>
        <PlanWithActivitie></PlanWithActivitie>
      </PlanWithActivitieList>
      <Title>
        {/* 01,02,03을 왼쪽 간격을 맞추기 위함 */}
        <div style={{ width: "30rem" }}>
          <p>03</p>
          <p
            style={{
              fontFamily: "NotoSansBold",
              fontSize: "2.5rem",
              lineHeight: "4rem",
              width: "20rem",
            }}
          >
            만족도 조사 & 소감
          </p>
        </div>
        {/* 01,02,03을 왼쪽 간격을 맞추기 위함 */}
        <div style={{ width: "50rem" }}></div>
      </Title>
      <SatisfactionWithReviewList>
        <Satisfaction></Satisfaction>
        <Review></Review>
      </SatisfactionWithReviewList>
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
