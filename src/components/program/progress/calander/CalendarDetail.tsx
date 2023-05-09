import React from "react";
import styled from "@emotion/styled";
import BigCalander from "./BigCaledar";

const CalenderDetail = () => {
  return (
    <CalenderForm>
      <Calenderbox>
        <p
          style={{
            marginTop: "2rem",
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
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
`;

export default CalenderDetail;
