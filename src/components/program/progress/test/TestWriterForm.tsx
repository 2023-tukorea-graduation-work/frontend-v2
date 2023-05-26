import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import { Button, Input } from "@mui/material";
import {
  FaPlus,
  FaTrashAlt,
  FaRegSave,
  FaRegFileAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
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
        <Testdatebox>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Start Date"
          />
          <p style={{ marginRight: "0.5rem", lineHeight: "1.5rem" }}>~</p>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            placeholderText="End Date"
          />
          <Input></Input>
        </Testdatebox>
        <TWTitle>
          <FaRegQuestionCircle></FaRegQuestionCircle>
          <FaRegSave></FaRegSave>
          <FaRegFileAlt></FaRegFileAlt>
          <FaTrashAlt></FaTrashAlt>
        </TWTitle>
      </TestWriterbox>
      <TestWriterlist>
        <p>1번문항</p>
        <TWselectbox>
          <TWselect></TWselect>
          <TWselectscore>
            <p>배점</p>
            <Input></Input>
          </TWselectscore>
        </TWselectbox>
      </TestWriterlist>
      <TestWrite>
        <Testtext>
          <Input></Input>
        </Testtext>
        <TestNumber>
          <Input></Input>

          <Input></Input>

          <Input></Input>

          <Input></Input>
        </TestNumber>
      </TestWrite>
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
  justify-content: space-between;
`;
const Testdatebox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
const TWTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const TWselectbox = styled.div`
  border: 1px solid blue;
  width: 15%;
  height: 15vh;
  display: flex;
  flex-direction: column;
`;
const TWselect = styled.div`
  width: 10%;
  height: 8vh;
  background-color: red;
  display: flex;
  flex-direction: column;
`;
const TestWrite = styled.div``;
const Testtext = styled.div``;
const TestNumber = styled.div``;
const TWselectscore = styled.div``;
export default TestWriterForm;
