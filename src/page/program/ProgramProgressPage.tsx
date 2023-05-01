import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import ProgressMain from "../../components/program/progress/main/ProgressMain";
import AttendenceDetail from "../../components/program/progress/attendance/AttendaceDetail";
import ProgressLeftBar from "../../components/program/progress/common/ProgressLeftBar";
import CalenderDetail from "../../components/program/progress/calander/CalendarDetail";
import QnaDetail from "../../components/program/progress/qna/QnaDetail";
import NoticeDetail from "../../components/program/progress/notice/NoticeDetail";
import MaterialDetail from "../../components/program/progress/material/MaterialDetail";
import OnlineclassDetail from "../../components/program/progress/onlineclass/OnlineclassDetail";

const ProgramProgressPage = () => {
  const selectIndex = useAppSelector((state) => state.leftBar.indexNumber);
  const [program, setProgram] = useState({
    programNo: 6,
  });

  const barArray = [
    { title: <div>0</div>, content: <ProgressMain /> },
    { title: <div>출석</div>, content: <AttendenceDetail /> },
    {
      title: <div>질문</div>,
      content: <QnaDetail />,
    },
    { title: <div>자료</div>, content: <MaterialDetail /> },
    { title: <div>공지</div>, content: <NoticeDetail /> },
    {
      title: <div>일정</div>,
      content: <CalenderDetail />,
    },
    { title: <div>온라인강의</div>, content: <OnlineclassDetail /> },
  ];

  useEffect(() => {
    // backend program detail 정보를 가져온다.
  }, []);

  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          <ProgressLeftBar />
          <Boxx2>
            <div>{barArray[selectIndex].content}</div>
          </Boxx2>
        </Grid>
        <Grid xs={1}></Grid>
      </Grid>
    </>
  );
};

const Boxx2 = styled.div`
  height: 83vh;
  width: 100%;
  background-color: #fff;
  margin-left: 1%;
`;

export default ProgramProgressPage;
