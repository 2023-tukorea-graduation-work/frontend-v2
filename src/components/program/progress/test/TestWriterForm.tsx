import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Button, Input } from "@mui/material";
import { FaPlus } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TestWriterForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  return (
    <TestWriterform>
      <TestWriterbox>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
        />
        <TWTitle>
          <Input></Input>
          <p>사용방법</p>
        </TWTitle>
      </TestWriterbox>
      <TestWriterlist></TestWriterlist>
      <TestWriterplus>
        <FaPlus
          size="20"
          color="#80b7d1"
          style={{ cursor: "pointer" }}
        ></FaPlus>
      </TestWriterplus>
    </TestWriterform>
  );
};
const TestWriterform = styled.div`
  display: flex;
  flex-direction: column;
`;
const TestWriterbox = styled.div`
  width: 99.7%;
  height: 8vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: 3px solid #80b7d1;
  display: flex;
  flex-direction: row;
`;
const TestWriterlist = styled.div`
    width;100%;
    height:40vh;
    margin-top:1rem;
    border-radius: 10px;
  border: 3px solid #80b7d1;
`;
const TestWriterplus = styled.div`
  margin-left: 49%;
  margin-top: 1rem;
`;
const TWTitle = styled.div``;
export default TestWriterForm;
