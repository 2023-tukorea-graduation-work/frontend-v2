import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import { Button } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const AttendenceDetail = () => {
  const peopleInfo = [
    {
      name: "홍길동",
      school: "숭의여자고등학교",
      age: "25세",
      출석: 5,
      지각: 1,
      결석: 0,
    },
    {
      name: "김길동",
      school: "서강남초고등학교",
      age: "23세",
      출석: 4,
      지각: 1,
      결석: 1,
    },
    {
      name: "박길동",
      school: "서울여자고등학교",
      age: "22세",
      출석: 4,
      지각: 1,
      결석: 1,
    },
    {
      name: "정길동",
      school: "숭의남자고등학교",
      age: "21세",
      출석: 3,
      지각: 2,
      결석: 1,
    },
  ];
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
        {user_gb === "MENTO" && (
          <p>
            {peopleInfo.map((value, index) => (
              <>
                <Studentbox>
                  <Studentlist>
                    <p>icon</p>
                    <p>{value.name}</p>
                    <p>{value.school}</p>
                    <p>{value.age}</p>
                  </Studentlist>
                  <StudentAttend>
                    <p>
                      현재 총 수업 수: {value.결석 + value.지각 + value.출석}회
                    </p>
                    <p>출석 {value.출석}회</p>
                    <p>지각 {value.지각}회</p>
                    <p>결석 {value.결석}회</p>
                  </StudentAttend>
                </Studentbox>
              </>
            ))}
          </p>
        )}
        {user_gb === "MENTEE" && (
          <p>
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
          </p>
        )}
        <Checklist>
          <p style={{ fontSize: "0.8rem" }}>날짜 :</p>
          <p>2023.08.13</p>
          <p>진행차시 : 6차시 / 9차시</p>
          <p>프로그램기간 : 2023.08.13 ~ 2023.09.21</p>
        </Checklist>
        {user_gb === "MENTO" && (
          <>
            {peopleInfo.map((value, index) => (
              <>
                <Studentbox>
                  <Studentlist>
                    <p>icon</p>
                    <p>{value.name}</p>
                    <p>{value.school}</p>
                    <p>{value.age}</p>
                  </Studentlist>
                  <StudentAttendCheck>
                    <FormControl>
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                      >
                        <FormControlLabel
                          value="출석"
                          control={<Radio color="secondary" />}
                          label="출석"
                        />
                        <FormControlLabel
                          value="지각"
                          control={<Radio color="secondary" />}
                          label="지각"
                        />
                        <FormControlLabel
                          value="결석"
                          control={<Radio color="secondary" />}
                          label="결석"
                        />
                      </RadioGroup>
                    </FormControl>
                  </StudentAttendCheck>
                </Studentbox>
              </>
            ))}
          </>
        )}
        {user_gb === "MENTEE" && (
          <Studentbox>
            <Studentlist>
              <p>1차시</p>
              <p>23.02.13</p>
              <p>16:00 ~ 18:00</p>
            </Studentlist>
          </Studentbox>
        )}
      </Attendbox>
      {user_gb === "MENTO" && (
        <div style={{ display: "inlineBlock", float: "right" }}>
          <Button
            variant="contained"
            color="secondary"
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
      )}
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
  align-items: center;
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
