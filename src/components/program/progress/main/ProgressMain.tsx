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
            <QuestionBox></QuestionBox>
            <DownloadingBox></DownloadingBox>
            <NoticeBox></NoticeBox>
          </Box2>
        </Box>
        <CalanderBox>2</CalanderBox>
      </div>
    </>
  );
};

const Box = styled.div`
  background-color: red;
  width: 68%;
  height: 83vh;
  margin-right: 2%;
`;
const Box2 = styled.div`
  background-color: skyblue;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: start;
`;

const Title = styled.div`
  background-color: green;
  width: 100%;
  height: 10%;
  border-radius: 25px;
  display: flex;
  align-items: center;
`;

const QuestionBox = styled.div`
  margin-right: 2%;
  margin-top: 2%;
  background-color: orange;
  width: 45%;
  height: 50.6%;
  border-radius: 25px;
`;

const DownloadingBox = styled.div`
  background-color: Purple;
  width: 45%;
  height: 35%;
  border-radius: 25px;
`;

const NoticeBox = styled.div`
  margin-top: 2%;
  background-color: yellow;
  width: 45%;
  height: 50.6%;
  border-radius: 25px;
`;
const CalanderBox = styled.div`
  background-color: blue;
  width: 30%;
  height: 83vh;
  border-radius: 25px;
  background-color: pink;
`;

export default ProgressMain;