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
import TestIcon from "./TestIcon";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { loadQuestionListAsync } from "../../../../slice/program/programProgressQuestion";
import { loadExamListAsync } from "../../../../slice/program/programProgressExamSlice";

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
            <TaskRegisterEditorForm
              subtogglePopup={TaskRegistertogglePopup}
            ></TaskRegisterEditorForm>
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
    <div style={{ backgroundColor: "white" }}>
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

            <TestWriterForm
              subtogglePopup={TestWritetogglePopup}
            ></TestWriterForm>
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
            <TestScoreForm
              subtogglePopup={TaskScoretogglePopup}
            ></TestScoreForm>
          </TaskScorePopupinner>
        </TaskScorePopupbox>
      )}
    </div>
  );
};

const TestDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const examList = useAppSelector((state) => state.programProgressExam.list);
  const dispatch = useAppDispatch();
  const { programId } = useParams() as any;
  useEffect(() => {
    dispatch(loadExamListAsync(Number(programId)));
  }, []);
  useEffect(() => {}, [examList]);
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
          {user_gb === "MENTO" && (
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
          )}

          {TaskRegisterisOpen && <TaskRegisterPopup />}
          {user_gb === "MENTO" && (
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
          )}

          {TestWriterisOpen && <TestWritePopup />}
        </Boxtitle>
        <TestTaskbox>
          <Taskbox>
            <Tasklist user_gb={user_gb}>
              <Taskcheck>
                <TestIcon></TestIcon>
              </Taskcheck>
              <Taskname>
                {user_gb === "MENTO" && (
                  <div>
                    <p style={{ cursor: "pointer" }} onClick={TaskScoresPopup}>
                      [1차시]과제제목
                    </p>

                    {TaskScoreisOpen && <TaskscorePopup />}
                  </div>
                )}
                {user_gb === "MENTEE" && (
                  <div>
                    <p style={{ cursor: "pointer" }} onClick={TaskScoresPopup}>
                      [1차시]과제제목
                    </p>

                    {TaskScoreisOpen && <TaskscorePopup />}
                  </div>
                )}
                <Taskdetail>
                  <p>과제수행기간 2023.03.03 10:00 ~ 2023.03.03 10:00</p>
                  {user_gb === "MENTO" && (
                    <p style={{ marginTop: "0.5rem" }}>
                      과제제출자: 이름, 이름, 이름
                    </p>
                  )}
                  {user_gb === "MENTEE" && (
                    <p style={{ marginTop: "0.5rem" }}>
                      과제제출시간: 2023.03.03 10:30
                    </p>
                  )}
                  {user_gb === "MENTEE" && (
                    <p
                      style={{
                        textAlign: "right",
                        marginRight: "1.5rem",
                        color: "#FF8E41",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      }}
                    >
                      제출완료
                    </p>
                  )}
                </Taskdetail>
              </Taskname>
            </Tasklist>
            <Tasklist user_gb={user_gb}>
              <Taskcheck>
                <TestIcon></TestIcon>
              </Taskcheck>
              <Taskname>
                <p style={{ cursor: "pointer" }} onClick={TaskScoresPopup}>
                  [1차시]과제제목
                </p>
                {TaskScoreisOpen && <TaskscorePopup />}
                <Taskdetail>
                  <p>과제수행기간 2023.03.03 10:00 ~ 2023.03.03 10:00</p>
                  {user_gb === "MENTO" && (
                    <p style={{ marginTop: "0.5rem" }}>
                      과제제출자: 이름, 이름, 이름
                    </p>
                  )}

                  {user_gb === "MENTEE" && (
                    <p
                      style={{
                        textAlign: "right",
                        marginRight: "1.5rem",
                        color: "#FF8E41",
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                        marginTop: "1rem",
                      }}
                    >
                      과제제출하기
                    </p>
                  )}
                </Taskdetail>
              </Taskname>
            </Tasklist>
          </Taskbox>
          <Testbox>
            {examList.map((value, index) => {
              return (
                <>
                  <Testlist user_gb={user_gb}>
                    <Testcheck>
                      <Testscore user_gb={user_gb}>
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
                      <p>{value.examTitle}</p>
                      <Testdetail>
                        <p>
                          시험시간: {value.examStartTime} ~
                          {value.examFinishTime}
                        </p>
                        <p style={{ marginTop: "0.5rem" }}>
                          참여자: 이름, 이름, 이름
                        </p>
                      </Testdetail>
                    </Testname>
                  </Testlist>
                </>
              );
            })}
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
const Tasklist = styled.div<{ user_gb: string }>`
  width: 99%;
  height: 12vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: ${(props) =>
    props.user_gb === "MENTEE"
      ? "4px solid rgba(255, 142, 65, 0.3)"
      : "4px solid #b5dadd"};
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
  width: 100%;
`;
const Taskdetail = styled.div`
  font-size: 0.7rem;
  margin-top: 1rem;
  color: #777777;
`;
const Testlist = styled.div<{ user_gb: string }>`
  width: 99%;
  height: 12vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: ${(props) =>
    props.user_gb === "MENTEE"
      ? " 4px solid rgba(232, 94, 46, 0.3);"
      : "  4px solid #80b7d1"};

  display: flex;
  flex-direction: row;
`;
const Testcheck = styled.div`
  width: 17%;
  display: flex;
  flex-direction: column;
`;
const Testscore = styled.div<{ user_gb: string }>`
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "rgba(232, 94, 46, 0.3);" : "#80b7d1"};
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
  width: 75%;
  height: 75%;
  margin-top: 2%;
  margin-left: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  background-color: white;
`;
const TestWriterPopupinner = styled.div`
  background-color: white;
  width: 99%;
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
