import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FaHome, FaEye, FaRegBookmark, FaRegEnvelope } from "react-icons/fa";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  loadItemDetailAsync,
  programParticipateAsync,
} from "../../../slice/program/programDetailSlice";

interface WEEK {
  DETAIL: string;
}
const ProgramDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const { programId } = useParams() as any;
  const dispatch = useAppDispatch();
  const programDetail = useAppSelector((state) => state.programDetail.details);
  const mentee_no = useAppSelector((state) => state.login.object.USER_NO);
  useEffect(() => {
    dispatch(loadItemDetailAsync(programId));
  }, []);
  const Submit = () => {
    const menteeWithProgram = {
      menteeId: Number(mentee_no),
      programId: Number(programId),
    };
    console.log(mentee_no);
    console.log(programId);
    dispatch(programParticipateAsync(menteeWithProgram));
  };
  const startDateForm = programDetail.programStartDate;
  const todayDate = new Date();
  const todayDateForm = `${todayDate.getFullYear()}-${
    todayDate.getMonth() + 1
  }-${todayDate.getDate()}`;

  const today = new Date(todayDateForm);
  const start = new Date(startDateForm);

  const timeDiff = Math.ceil(
    Math.abs(today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  );
  return (
    <DetailForm>
      <Detailbox>
        <Detailca>
          <FaHome
            size="42%"
            color="#777777"
            style={{ marginTop: "1rem" }}
          ></FaHome>
        </Detailca>

        <DetailIntro>
          <p style={{ width: "30%" }}>멘토명: {programDetail.mentorName}</p>
          <p style={{ width: "100%" }}>멘토 상세 정보: {programDetail.institution} / {programDetail.major}</p>
          <p style={{ width: "50%" }}>모집인원 : {programDetail.capacity}</p>
          <p style={{ width: "50%" }}>
            활동기간 : {programDetail.programStartDate} ~
            {programDetail.programFinishDate}
          </p>
          <p style={{ width: "50%" }}>
            모집기간 : {programDetail.recruitStartDate} ~
            {programDetail.recruitFinishDate}
          </p>
          <p style={{ width: "50%" }}>
            수업장소 : {programDetail.programPlace}
          </p>
          <p style={{ width: "50%" }}>
            모집 마감 : D-{timeDiff}          
          </p>
        </DetailIntro>
      </Detailbox>

      <Programintro>
        <p>{programDetail.introduce}</p>
      </Programintro>

      <ProgramPlan>
        <TableContainer>
          <Table aria-label="a dense table">
            <TableHead></TableHead>
            <TableBody>
              {/* {programDetail.WEEKS.map((value: WEEK, index: number) => {  전체적으로 옮기는데 갑자기 에러 */}
              {programDetail.programWeeks.map((value: any, index: number) => {
                return (
                  <TableRow sx={{ height: "10vh" }} key={index}>
                    <TableCell width="10%">{value.registerDate}</TableCell>
                    <TableCell width="10%">{index + 1}주차</TableCell>
                    <TableCell align="center">{value.content}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </ProgramPlan>

      <div>
        {user_gb === "MENTEE" ? (
          <Button
            variant="contained"
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            sx={{
              height: "2.4rem",
              width: "11rem",
              fontSize: "1rem",
              fontFamily: "NotoSansRegular",
              boxShadow: "0",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
            onClick={Submit}
          >
            프로그램신청하기
          </Button>
        ) : (
          <></>
        )}
      </div>
    </DetailForm>
  );
};
const DetailForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;
  font-family: "NotoSansRegular";
  font-size: 1.2rem;
  align-items: center;
`;
const Detailbox = styled.div`
  height: 17rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const Detailca = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4% 2% 5% 4%;
`;
const DetailIntro = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 6%;
  margin-bottom: 6%;
  font-size: 0.9rem;
`;
const DetailIcon = styled.div`
  width: 24%;
  display: flex;
  flex-direction: row;
  margin-top: 4%;
  margin-bottom: 4%;
`;
const Programintro = styled.div`
  margin-top: 4%;
  margin-bottom: 4%;
  width: 40%;
  text-align: center;
  font-size: 0.8rem;
  line-height: 180%;
`;
const ProgramPlan = styled.div`
  width: 100%;
  height: 28vh;
  border: solid 0.8px #d6d6d6;
  overflow: auto;
`;

export default ProgramDetail;
