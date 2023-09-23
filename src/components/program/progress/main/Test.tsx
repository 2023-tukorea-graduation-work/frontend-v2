import styled from "@emotion/styled";
import React from "react";
import { FaEdit, FaPlus, FaListOl } from "react-icons/fa";
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

const Test = () => {
  return (
    <TestForm>
      <Tasktitle>
        <FaEdit size="22"></FaEdit>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>과제</p>
      </Tasktitle>
      <Taskmainbox>
        <Taskmaindetial>
          <p style={{ fontWeight: "bold" }}>[1차시]과제제목</p>
          <p style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
            과제수행기간:2023.05.12 ~ 2023.05.13
          </p>
          <p style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
            과제제출자이름: 미제출
          </p>
        </Taskmaindetial>
      </Taskmainbox>
      <HorizonLine />
      <Testtitle>
        <FaListOl size="22"></FaListOl>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>시험</p>
      </Testtitle>
      <Testmainbox>
        <Testmaindetial>
          <p style={{ fontWeight: "bold" }}>1차시험</p>
          <p style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
            시험시간:2023.05.12 10:00 ~ 2023.05.13 14:00
          </p>
          <p style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
            참여자: 미제출
          </p>
        </Testmaindetial>
      </Testmainbox>
    </TestForm>
  );
};
const TestForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const Tasktitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Taskmainbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 10vh;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  border-radius: 15px;
  margin-bottom: 2rem;
`;
const Taskmaindetial = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
const Testtitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 1.5rem;
`;
const Testmainbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 88%;
  height: 10vh;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  border-radius: 15px;
  margin-bottom: 2rem;
`;
const Testmaindetial = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
export default Test;
