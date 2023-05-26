import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  FaPlus,
  FaCheckCircle,
  FaRegWindowClose,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import TaskRegisterEditorForm from "./TaskRegisterEditorForm";
import TestWriterForm from "./TestWriterForm";
import TestScoreForm from "./TestScoreForm";

const TaskRegisterPopup = () => {
  const [TaskRegisterisOpen, TaskRegistersetIsOpen] = useState(true);
  const TaskRegistertogglePopup = () => {
    TaskRegistersetIsOpen(!TaskRegisterisOpen);
  };
  return (
    <div>
      {TaskRegisterisOpen && (
        <TaskRegisterPopupbox>
          <TaskRegisterPopupinner>
            <p
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              <FaAngleDoubleLeft
                style={{ marginRight: "0.5rem" }}
              ></FaAngleDoubleLeft>
              과제등록하기
            </p>

            <FaRegWindowClose
              size="15"
              style={{ marginLeft: "99%" }}
              cursor="pointer"
              onClick={TaskRegistertogglePopup}
            ></FaRegWindowClose>
            <TaskRegisterEditorForm></TaskRegisterEditorForm>
          </TaskRegisterPopupinner>
        </TaskRegisterPopupbox>
      )}
    </div>
  );
};

const TestWritePopup = () => {
  const [TestWriteisOpen, TestWritesetIsOpen] = useState(true);
  const TestWritetogglePopup = () => {
    TestWritesetIsOpen(!TestWriteisOpen);
  };
  return (
    <div>
      {TestWriteisOpen && (
        <TestWriterPopupbox>
          <TestWriterPopupinner>
            <p
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              <FaAngleDoubleLeft
                style={{ marginRight: "0.5rem" }}
              ></FaAngleDoubleLeft>
              시험출제하기
            </p>

            <FaRegWindowClose
              size="15"
              style={{ marginLeft: "99%" }}
              cursor="pointer"
              onClick={TestWritetogglePopup}
            ></FaRegWindowClose>

            <TestWriterForm></TestWriterForm>
          </TestWriterPopupinner>
        </TestWriterPopupbox>
      )}
    </div>
  );
};

const TaskscorePopup = () => {
  const [TaskScoreisOpen, TaskScoresetIsOpen] = useState(true);
  const TaskScoretogglePopup = () => {
    TaskScoresetIsOpen(!TaskScoreisOpen);
  };
  return (
    <div>
      {TaskScoreisOpen && (
        <TaskScorePopupbox>
          <TaskScorePopupinner>
            <p
              style={{
                marginTop: "2rem",
                fontSize: "1.1rem",
                fontWeight: "bold",
              }}
            >
              <FaAngleDoubleLeft
                style={{ marginRight: "0.5rem" }}
              ></FaAngleDoubleLeft>
              과제평가하기
            </p>

            <FaRegWindowClose
              size="15"
              style={{ marginLeft: "99%" }}
              cursor="pointer"
              onClick={TaskScoretogglePopup}
            ></FaRegWindowClose>
            <TestScoreForm></TestScoreForm>
          </TaskScorePopupinner>
        </TaskScorePopupbox>
      )}
    </div>
  );
};

const TestDetail = () => {
  const [TaskRegisterisOpen, TaskRegistersetIsOpen] = useState(false);
  const [TestWriterisOpen, TestWritersetIsOpen] = useState(false);
  const [TaskScoreisOpen, TaskScoresetIsOpen] = useState(false);
  const TaskRegistersPopup = () => {
    TaskRegistersetIsOpen(!TaskRegisterisOpen);
  };
  const TestWritersPopup = () => {
    TestWritersetIsOpen(!TestWriterisOpen);
  };
  const TaskScoresPopup = () => {
    TaskScoresetIsOpen(!TaskScoreisOpen);
  };
  return (
    <TestForm>
      <TaskTestTitle>
        <p>과제</p>
        <p style={{ marginLeft: "51%" }}>시험</p>
      </TaskTestTitle>
      <BoxTotal>
        <Boxtitle>
          <p
            style={{
              color: "#07858C",
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
              float: "right",
              cursor: "pointer",
            }}
            onClick={TaskRegistersPopup}
          >
            과제등록하기<FaPlus></FaPlus>
          </p>
          {TaskRegisterisOpen && <TaskRegisterPopup />}
          <p
            style={{
              color: "#07858C",
              fontSize: "0.9rem",
              marginLeft: "37rem",
              marginBottom: "0.5rem",
              cursor: "pointer",
            }}
            onClick={TestWritersPopup}
          >
            시험출제하기<FaPlus></FaPlus>
          </p>
          {TestWriterisOpen && <TestWritePopup />}
        </Boxtitle>
        <TestTaskbox>
          <Taskbox>
            <Tasklist>
              <Taskcheck>
                <FaCheckCircle
                  size="40"
                  style={{
                    marginTop: "38%",
                    marginLeft: "32%",
                    cursor: "pointer",
                    color: "#07858C",
                  }}
                ></FaCheckCircle>
              </Taskcheck>
              <Taskname>
                <p style={{ cursor: "pointer" }} onClick={TaskScoresPopup}>
                  [1차시]과제제목
                </p>
                {TaskScoreisOpen && <TaskscorePopup />}
                <Taskdetail>
                  <p>과제수행기간 2023.03.03 10:00 ~ 2023.03.03 10:00</p>
                  <p style={{ marginTop: "0.5rem" }}>
                    과제제출자: 이름, 이름, 이름
                  </p>
                </Taskdetail>
              </Taskname>
            </Tasklist>
            <Tasklist>
              <Taskcheck>
                <FaCheckCircle
                  size="40"
                  style={{
                    marginTop: "38%",
                    marginLeft: "32%",
                    cursor: "pointer",
                    color: "#07858C",
                  }}
                ></FaCheckCircle>
              </Taskcheck>
              <Taskname>
                <p>[1차시]과제제목</p>
                <Taskdetail>
                  <p>과제수행기간 2023.03.03 10:00 ~ 2023.03.03 10:00</p>
                  <p style={{ marginTop: "0.5rem" }}>
                    과제제출자: 이름, 이름, 이름
                  </p>
                </Taskdetail>
              </Taskname>
            </Tasklist>
          </Taskbox>
          <Testbox>
            <Testlist>
              <Testcheck>
                <Testscore>
                  <p
                    style={{
                      marginTop: "0.9rem",
                      fontSize: "0.6rem",
                      marginLeft: "0.7rem",
                    }}
                  >
                    AVERAGE
                  </p>
                  <p
                    style={{
                      marginTop: "0.3rem",
                      marginLeft: "1.3rem",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                    }}
                  >
                    85
                  </p>
                </Testscore>
              </Testcheck>
              <Testname>
                <p>1차 시험</p>
                <Testdetail>
                  <p>시험시간: 2023.03.03 10:00 ~ 2023.03.03 10:00</p>
                  <p style={{ marginTop: "0.5rem" }}>
                    참여자: 이름, 이름, 이름
                  </p>
                </Testdetail>
              </Testname>
            </Testlist>
            <Testlist>
              <Testcheck>
                <Testscore>
                  <p
                    style={{
                      marginTop: "0.9rem",
                      fontSize: "0.6rem",
                      marginLeft: "0.7rem",
                    }}
                  >
                    AVERAGE
                  </p>
                  <p
                    style={{
                      marginTop: "0.3rem",
                      marginLeft: "1.3rem",
                      fontSize: "1.4rem",
                      fontWeight: "bold",
                    }}
                  >
                    85
                  </p>
                </Testscore>
              </Testcheck>
              <Testname>
                <p>1차 시험</p>
                <Testdetail>
                  <p>시험시간: 2023.03.03 10:00 ~ 2023.03.03 10:00</p>
                  <p style={{ marginTop: "0.5rem" }}>
                    참여자: 이름, 이름, 이름
                  </p>
                </Testdetail>
              </Testname>
            </Testlist>
          </Testbox>
        </TestTaskbox>
      </BoxTotal>
    </TestForm>
  );
};
const TestForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const TaskTestTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;
const BoxTotal = styled.div`
  display: flex;
  flex-direction: column;
`;
const Taskbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  height: 50vh;
`;
const Boxtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Testbox = styled.div`
  margin-left: 5.5rem;
  width: 48%;
  height: 50vh;
  display: flex;
  flex-direction: column;
`;
const TestTaskbox = styled.div`
  display: flex;
  flex-direction: row;
`;
const Tasklist = styled.div`
  width: 99%;
  height: 12vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: 4px solid #b5dadd;
  display: flex;
  flex-direction: row;
`;
const Taskcheck = styled.div`
  width: 17%;
`;
const Taskname = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  font-size: 1.1rem;
`;
const Taskdetail = styled.div`
  font-size: 0.7rem;
  margin-top: 1rem;
  color: #777777;
`;
const Testlist = styled.div`
  width: 99%;
  height: 12vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: 4px solid #80b7d1;
  display: flex;
  flex-direction: row;
`;
const Testcheck = styled.div`
  width: 17%;
  display: flex;
  flex-direction: column;
`;
const Testscore = styled.div`
  background-color: #80b7d1;
  width: 65%;
  height: 7vh;
  border-radius: 47px;
  margin-top: 21%;
  margin-left: 17%;
  color: white;
`;
const Testname = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  font-size: 1.1rem;
`;
const Testdetail = styled.div`
  font-size: 0.7rem;
  margin-top: 1rem;
  color: #777777;
`;
const TaskRegisterPopupbox = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  width: 74%;
  height: 75%;
  margin-top: 2%;
  margin-left: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TaskRegisterPopupinner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
`;
const TestWriterPopupbox = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  width: 74%;
  height: 75%;
  margin-top: 2%;
  margin-left: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TestWriterPopupinner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
`;
const TaskScorePopupbox = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  width: 74%;
  height: 75%;
  margin-top: 2%;
  margin-left: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TaskScorePopupinner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  font-size: 0.8rem;
`;

export default TestDetail;
