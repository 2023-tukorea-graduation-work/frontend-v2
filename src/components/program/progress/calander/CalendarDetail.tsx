import React from "react";
import styled from "@emotion/styled";
import BigCalander from "./BigCaledar";

const CalenderDetail = () => {
  return (
    <CalenderForm>
      <Calenderbox>
        <p
          style={{
            marginTop: "2.5rem",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginLeft: "1rem",
            marginBottom: "2rem",
          }}
        >
          일정
        </p>
        <Tablebox>
          <BigCalander></BigCalander>
        </Tablebox>
      </Calenderbox>
    </CalenderForm>
  );
};
const CalenderForm = styled.div`
  display: flex;
  flex-direction: row;
`;
const Calenderbox = styled.div`
  width: 100%;
  height: 82vh;
`;

const Tablebox = styled.div`
  width: 100%;
  background-color: skyblue;
`;

export default CalenderDetail;
