import React from "react";
import styled from "@emotion/styled";
import { FaUserCheck } from "react-icons/fa";

const Attendance = () => {
  return (
    <AttendanceBox>
      <FaUserCheck></FaUserCheck>
    </AttendanceBox>
  );
};

const AttendanceBox = styled.div`
  margin-right: 2%;
  background-color: #f5f5f5;
  width: 50%;
  height: 32.5%;
  border-radius: 25px;
  display: flex;
`;

export default Attendance;
