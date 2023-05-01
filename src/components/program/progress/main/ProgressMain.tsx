import React from "react";
import styled from "@emotion/styled";
import Attendance from "./Attendance";

const ProgressMain = () => {
  const program_no = 6;

  return (
    <>
      <div style={{ display: "flex" }}>
        <Box>
          <Title>프로젝트주제</Title>
          <Box2>
            <Attendance />
            <NoticematerBox>1</NoticematerBox>
            <QuestionBox>2</QuestionBox>
            <OnlineclassBox></OnlineclassBox>
          </Box2>
        </Box>
        <CalanderBox>2</CalanderBox>
      </div>
    </>
  );
};

const Box = styled.div`
  width: 68%;
  height: 83vh;
  margin-right: 1.2%;
`;
const Box2 = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: start;
`;

const Title = styled.div`
  width: 100%;
  height: 10%;
  font-size: 1.1rem;
  border-radius: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;
`;

const NoticematerBox = styled.div`
  margin-right: 2%;
  margin-top: 2%;
  background-color: #f5f5f5;
  width: 50%;
  height: 65%;
  border-radius: 25px;
`;

const QuestionBox = styled.div`
  background-color: #f5f5f5;
  width: 48%;
  height: 40%;
  border-radius: 25px;
`;

const OnlineclassBox = styled.div`
  margin-top: 2%;
  background-color: #f5f5f5;
  width: 48%;
  height: 57.5%;
  border-radius: 25px;
`;
const CalanderBox = styled.div`
  width: 30%;
  height: 83vh;
  border-radius: 25px;
  background-color: #f5f5f5;
`;

export default ProgressMain;
