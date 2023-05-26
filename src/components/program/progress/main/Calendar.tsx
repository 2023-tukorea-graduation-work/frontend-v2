import styled from "@emotion/styled";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./customCalendar.css";

type ValuePiece = Date | null;

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 10px",
      }}
    ></div>
  );
};

const Calendarmain = (props: any) => {
  const [value, onChange] = useState<ValuePiece | [ValuePiece, ValuePiece]>(
    new Date()
  );
  return (
    <CalendarForm>
      <Calendartitle>
        <FaRegCalendarAlt size="22"></FaRegCalendarAlt>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>일정</p>
      </Calendartitle>
      <Calendarbox>
        <Calendar onChange={onChange} value={value} />
      </Calendarbox>
      <HorizonLine />
      <Calendardetail>
        <p style={{ fontWeight: "bold", fontSize: "0.9rem" }}>2023.05.10</p>
        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
          }}
        >
          일정내용
        </p>
        <p style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>일정내용</p>
      </Calendardetail>
      <HorizonLine />
    </CalendarForm>
  );
};
const CalendarForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const Calendartitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Calendarbox = styled.div`
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Calendardetail = styled.div`
  margin-top: 1rem;
  margin-left: 1.5rem;
  margin-bottom: 1rem;
`;
export default Calendarmain;
