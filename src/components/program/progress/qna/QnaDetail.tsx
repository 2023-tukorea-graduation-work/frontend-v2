import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaRegWindowClose, FaPlus } from "react-icons/fa";
import TestEditorForm from "../qna/TestEditorForm";
import QnaIcon from "./QnaIcon";
import { useAppSelector } from "../../../../store/hooks";

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
const SubmitPopup = () => {
  const [sisOpen, ssetIsOpen] = useState(true);
  const subtogglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  return (
    <div>
      {sisOpen && (
        <SubmitPopupbox>
          <SubmitPopupinner>
            <FaRegWindowClose
              size="15"
              style={{ marginLeft: "99%" }}
              cursor="pointer"
              onClick={subtogglePopup}
            ></FaRegWindowClose>
            <TestEditorForm subtogglePopup={subtogglePopup}></TestEditorForm>
          </SubmitPopupinner>
        </SubmitPopupbox>
      )}
    </div>
  );
};

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <Popupbox>
          <Popupinner>
            <PopupFrom>
              <PopupStudent>
                <FaUserCircle size="20" color="#777777"></FaUserCircle>
                <p>박서영</p>
                <p style={{ fontSize: "0.6rem" }}>2023.03.15</p>
              </PopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={togglePopup}
              ></FaRegWindowClose>
            </PopupFrom>
            <HorizonLine></HorizonLine>
            <p>질문제목</p>
            <p
              style={{
                marginTop: "0.5rem",
                marginLeft: "1rem",
                marginBottom: "6rem",
              }}
            >
              질문내용
            </p>
            <HorizonLine></HorizonLine>
            <p>질문답변</p>
          </Popupinner>
        </Popupbox>
      )}
    </div>
  );
};

const QnaDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtooglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
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
        <Qnalistbox>
          <QnaTotal>
            <Qnalist>
              <p>질문제목</p>
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
          <p style={{ marginLeft: "1.5%" }}>질문에 대한 답변</p>
          {user_gb === "MENTO" && (
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
          )}
        </Qnalistbox>
        <Qnalistbox>
          <QnaTotal>
            <Qnalist>
              <p>질문제목</p>
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
          <p style={{ marginLeft: "1.5%" }}>질문에 대한 답변</p>
          {user_gb === "MENTO" && (
            <a>
              <a
                href="#"
                onClick={subtooglePopup}
                style={{ marginLeft: "93%", color: "#07858C" }}
              >
                답변작성하기{" "}
              </a>
              {sisOpen && <SubmitPopup />}
            </a>
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
          )}
        </Qnalistbox>
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
const Popupbox = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
const Popupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 60%;
  padding: 1rem;
  border-radius: 20px;
`;
const PopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 13%;
  margin-right: 84%;
  color: #777777;
`;
const SubmitPopupbox = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  width: 74%;
  height: 75%;
  margin-top: 4%;
  margin-left: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SubmitPopupinner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
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
