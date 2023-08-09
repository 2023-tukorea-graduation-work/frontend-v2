import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import QnaIcon from "./QnaIcon";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { loadQuestionListAsync } from "../../../../slice/program/programProgressQuestion";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";

import SubmitPopup from "./Popup/QnasubmitPopup";
import Popup from "./Popup/QnaContentPopup";

import { useParams } from "react-router-dom";

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 20px",
      }}
    ></div>
  );
};

const QnaDetail = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const { programId } = useParams();
  const questionlsit = useAppSelector(
    (state) => state.programQuestion.QuestionList
  );
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtooglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  useEffect(() => {
    dispatch(loadQuestionListAsync(Number(programId)));
  }, [isOpen]);
  useEffect(() => {}, [questionlsit]);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <QnaForm>
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        질문
      </p>
      <Qnabox>
        <Qnatext>
          <Qnatextinfo>
            <p style={{ fontSize: "0.9rem" }}>날짜 :</p>
            <p>2022.02.31</p>
            <p>진행차시 : 1차시 / 9차시</p>
            <p>프로그램기간 : 2022.02.01 ~ 2022.09.21</p>
          </Qnatextinfo>
          <Qnaiconbox>
            {user_gb === "MENTEE" && (
              <p style={{ display: "flex" }}>
                <p style={{ lineHeight: "1.5rem" }}>내 질문만 보기</p>
                <QnaIcon></QnaIcon>
              </p>
            )}
            {user_gb === "MENTEE" && (
              <p style={{ display: "flex", marginLeft: "1rem" }}>
                <p
                  onClick={subtooglePopup}
                  style={{
                    lineHeight: "1.5rem",
                    color: "#FF8E41",
                    cursor: "pointer",
                  }}
                >
                  질문하기 <FaPlus color="#FF8E41"></FaPlus>
                </p>
                {sisOpen && <SubmitPopup />}
              </p>
            )}
            {user_gb === "MENTO" && (
              <p style={{ display: "flex" }}>
                <p style={{ lineHeight: "1.5rem" }}>답변안한 질문만 보기</p>
              </p>
            )}
          </Qnaiconbox>
        </Qnatext>
        {questionlsit.map((value, index) => {
          return (
            <>
              <Qnalistbox>
                <QnaTotal>
                  <Qnalist>
                    <p>{value.question}</p>
                  </Qnalist>
                  <QnaStudent>
                    <p>박서영</p>
                    <p>
                      <FaUserCircle></FaUserCircle>
                    </p>
                    <p>2023.03.15</p>
                  </QnaStudent>
                </QnaTotal>
                <HorizonLine />
                <div
                  dangerouslySetInnerHTML={{ __html: `${value.answer}` }}
                ></div>
                {value.answerCreatedAt}
                {value.answerUpdatedAt}
                {/* {user_gb === "MENTO" && (
              <div>
                <a
                  href="#"
                  onClick={togglePopup}
                  style={{ marginLeft: "93%", color: "#07858C" }}
                >
                  자세히보기
                </a>
                {isOpen && <Popup />}
              </div>
            )}
            {user_gb === "MENTEE" && (
              <div>
                <a
                  href="#"
                  onClick={togglePopup}
                  style={{ marginLeft: "93%", color: "#FF8E41" }}
                >
                  자세히보기
                </a>
                {isOpen && <Popup />}
              </div>
            )} */}
              </Qnalistbox>
            </>
          );
        })}
      </Qnabox>
    </QnaForm>
  );
};

const QnaForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Qnatext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2%;
  font-size: 0.9rem;
`;
const Qnabox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.7rem;
`;
const Qnalistbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 2%;
  font-size: 0.8rem;
`;
const Qnalist = styled.div`
  margin-left: 1.5%;
  margin-top: 1.5%;
  width: 15%;
`;
const QnaStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 11%;
  margin-left: 71%;
  margin-top: 2%;
`;
const QnaTotal = styled.div`
  display: flex;
  flex-direction: row;
`;

const Qnatextinfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;
const Qnaiconbox = styled.div`
  display: flex;
  flex-direction: row;
`;
export default QnaDetail;
