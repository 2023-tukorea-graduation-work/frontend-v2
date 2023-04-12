import React from "react";
import styled from "@emotion/styled";

const Attendance = () => {
  return <AttendanceBox></AttendanceBox>;
};

const AttendanceBox = styled.div`
  margin-right: 2%;
  background-color: blue;
  width: 45%;
  height: 30%;
  border-radius: 25px;
  display: flex;
`;

export default Attendance;