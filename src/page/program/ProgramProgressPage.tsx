import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import ProgressMain from "../../components/program/progress/main/ProgressMain";
import AttendenceDetail from "../../components/program/progress/attendance/AttendaceDetail";
import ProgressLeftBar from "../../components/program/progress/common/ProgressLeftBar";
import CalenderDetail from "../../components/program/progress/calander/CalendarDetail";

const ProgramProgressPage = () => {
  const selectIndex = useAppSelector((state) => state.leftBar.indexNumber);
  const [program, setProgram] = useState({
    programNo: 6,
  });

  const barArray = [
    { title: <div>0</div>, content: <ProgressMain /> },
    { title: <div>출석</div>, content: <AttendenceDetail /> },
    { title: <div>2</div>, content: <div>2</div> },
    { title: <div>3</div>, content: <div>3</div> },
    { title: <div>4</div>, content: <div>4</div> },
    {
      title: <div>일정</div>,
      content: <CalenderDetail />,
    },
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
