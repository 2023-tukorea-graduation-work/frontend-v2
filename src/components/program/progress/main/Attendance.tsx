import React from "react";
import styled from "@emotion/styled";
import { FaUserCheck } from "react-icons/fa";
import { useAppSelector } from "../../../../store/hooks";

const Attendance = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <AttendanceForm>
      <Attendancetitle>
        <FaUserCheck size="22"></FaUserCheck>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>출석</p>
      </Attendancetitle>
      <Attendancebox>
        {user_gb === "MENTEE" && (
          <Attendstudentlist>
            <StudentMenteebox></StudentMenteebox>
            <p
              style={{
                marginLeft: "2.3rem",
                marginTop: "0.5rem",
                fontWeight: "bold",
              }}
            >
              이름
            </p>

            <p
              style={{
                color: "#FF8E41",
                marginLeft: "2rem",
                marginTop: "0.5rem",
              }}
            >
              출석률
            </p>
          </Attendstudentlist>
        )}
        {user_gb === "MENTO" && (
          <MentoStudentbox>
            <Attendstudentlist>
              <Studentbox></Studentbox>
              <p
                style={{
                  marginLeft: "2.3rem",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                이름
              </p>

              <p
                style={{
                  color: "#07858c",
                  marginLeft: "2rem",
                  marginTop: "0.5rem",
                }}
              >
                출석률
              </p>
            </Attendstudentlist>

            <Attendstudentlist>
              <Studentbox></Studentbox>
              <p
                style={{
                  marginLeft: "2.3rem",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                이름
              </p>
              <p
                style={{
                  color: "#07858c",
                  marginLeft: "2rem",
                  marginTop: "0.5rem",
                }}
              >
                출석률
              </p>
            </Attendstudentlist>
            <Attendstudentlist>
              <Studentbox></Studentbox>
              <p
                style={{
                  marginLeft: "2.3rem",
                  marginTop: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                이름
              </p>
              <p
                style={{
                  color: "#07858c",
                  marginLeft: "2rem",
                  marginTop: "0.5rem",
                }}
              >
                출석률
              </p>
            </Attendstudentlist>
          </MentoStudentbox>
        )}
      </Attendancebox>
    </AttendanceForm>
  );
};
const MentoStudentbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const AttendanceForm = styled.div`
  margin-right: 2%;
  background-color: #f5f5f5;
  width: 50%;
  height: 32.5%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
`;
const Attendancetitle = styled.div`
  height: 3vh;
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const Attendancebox = styled.div`
  display: flex;
  width: 80%;
  height: 65%;
  margin-left: 2.5rem;
  margin-top: 0.9rem;
  justify-content: space-between;
`;
const Attendstudentlist = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  font-size: 0.7rem;
`;
const Studentbox = styled.div`
  width: 86%;
  height: 59%;
  background-color: white;
  border-radius: 60px;
  border: 5.5px solid #07858c;
`;
const StudentMenteebox = styled.div`
  width: 86%;
  height: 59%;
  background-color: white;
  border-radius: 60px;
  border: 5.5px solid #ff8e41;
`;
export default Attendance;
