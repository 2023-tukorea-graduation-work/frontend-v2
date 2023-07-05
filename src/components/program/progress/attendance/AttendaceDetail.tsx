import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import { Button } from "@mui/material";
import Icon from "./Icon";
import { useAppSelector } from "../../../../store/hooks";

const Attend = {
  mento_no: null,
};

const AttendenceDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <AttendForm>
      <p
        style={{
          marginTop: "2rem",
          fontWeight: "bold",
          fontSize: "1.1rem",
        }}
      >
        출석
      </p>
      <Attendbox>
        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttend>
            <p>현재 총 수업 수: 4회</p>
            <p>출석 5회</p>
            <p>지각 1회</p>
            <p>결석 1회</p>
          </StudentAttend>
        </Studentbox>

        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttend>
            <p>현재 총 수업 수: 4회</p>
            <p>출석 5회</p>
            <p>지각 1회</p>
            <p>결석 1회</p>
          </StudentAttend>
        </Studentbox>

        <Checklist>
          <p style={{ fontSize: "0.8rem" }}>날짜 :</p>
          <p>2022.02.31</p>
          <p>진행차시 : 1차시 / 9차시</p>
          <p>프로그램기간 : 2022.02.01 ~ 2022.09.21</p>
        </Checklist>

        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttendCheck>
            <Attendanceicon>
              <p style={{ lineHeight: "1.5rem" }}>출석</p>
              <Icon></Icon>
            </Attendanceicon>
            <Perceiveicon>
              <p style={{ lineHeight: "1.5rem" }}>지각</p>
              <Icon></Icon>
            </Perceiveicon>
            <Absenticon>
              <p style={{ lineHeight: "1.5rem" }}>결석</p>
              <Icon></Icon>
            </Absenticon>
          </StudentAttendCheck>
        </Studentbox>
        <Studentbox>
          <Studentlist>
            <p>icon</p>
            <p>박서영</p>
            <p>숭의여자고등학교</p>
            <p>25세</p>
          </Studentlist>
          <StudentAttendCheck>
            <Attendanceicon>
              <p style={{ lineHeight: "1.5rem" }}>출석</p>
              <Icon></Icon>
            </Attendanceicon>
            <Perceiveicon>
              <p style={{ lineHeight: "1.5rem" }}>지각</p>
              <Icon></Icon>
            </Perceiveicon>
            <Absenticon>
              <p style={{ lineHeight: "1.5rem" }}>결석</p>
              <Icon></Icon>
            </Absenticon>
          </StudentAttendCheck>
        </Studentbox>
      </Attendbox>
      <div style={{ display: "inlineBlock", float: "right" }}>
        <Button
          variant="contained"
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
          fullWidth={true}
          sx={{
            fontSize: "1rem",
            fontFamily: "NotoSansMedium",
            width: "1rem",
            height: "2rem",
            borderRadius: "20px",
            float: "right",
          }}
        >
          적용
        </Button>
      </div>
    </AttendForm>
  );
};
const AttendForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Studentlist = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;
  justify-content: space-between;
  margin: 2% 34% 2% 2%;
  font-size: 0.8rem;
`;
const Studentbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 6vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`;
const StudentAttend = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: space-between;
  margin: 2% 2% 2% 2%;
  font-size: 0.8rem;
`;
const StudentAttendCheck = styled.div`
  display: flex;
  flex-direction: row;
  width: 35%;
  justify-content: space-between;
  margin: 1.5% 2% 1.8% 14%;
  font-size: 1rem;
`;
const Checklist = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 45%;
  margin-top: 3.5%;
  margin-bottom: 2%;
  font-size: 0.9rem;
`;

const Attendbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.7rem;
`;
const Attendanceicon = styled.div`
  display: flex;
  flex-direction: row;
`;
const Perceiveicon = styled.div`
  display: flex;
  flex-direction: row;
`;
const Absenticon = styled.div`
  display: flex;
  flex-direction: row;
`;
export default AttendenceDetail;
