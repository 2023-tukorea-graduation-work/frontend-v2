import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import styled from "@emotion/styled";
import LeftBar from "../components/Progress/LeftBar/LeftBar";
import ProgressMain from "../components/Progress/ProgressMain/ProgressMain";
import Attendencedetail from "../components/Progress/ProgressDetail/Attendancedetail";
import Calenderdetail from "../components/Progress/ProgressDetail/Calenderdetail";
import { useAppSelector } from "../app/hook";
import {useState, useEffect} from 'react'


const ProgramProgress = () => {
  const selectIndex = useAppSelector((state) => state.leftBar.indexNumber);
  const [program, setProgram] = useState({
    programNo : 6,
  })
  
  const barArray = [
    { title: <div>0</div>, content: <ProgressMain /> },
    { title: <div>출석</div>, content: <Attendencedetail /> },
    { title: <div>2</div>, content: <div>2</div> },
    { title: <div>3</div>, content: <div>3</div> },
    { title: <div>4</div>, content: <div>4</div> },
    { title: <div>일정</div>, content: <Calenderdetail programNo={program.programNo}/> },
  ];

  useEffect(() => {
    // backend program detail 정보를 가져온다. 

  }, [])

  return (
    <>
      <Grid container>
        <Grid xs={1}></Grid>
        <Grid xs={10} sx={{ display: "flex" }}>
          <LeftBar programNo={program.programNo}></LeftBar>
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

export default ProgramProgress;