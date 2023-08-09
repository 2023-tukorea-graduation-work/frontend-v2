import styled from "@emotion/styled";
import React from "react";
import { FaRegCommentDots, FaFileAlt, FaBullhorn } from "react-icons/fa";

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

const Qna = () => {
  return (
    <QnaForm>
      <Qnatitle>
        <FaRegCommentDots size="22"></FaRegCommentDots>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>질문</p>
      </Qnatitle>
      <Qnalist>
        <Qnalistbox>
          <p>1.질문제목</p>
          <p style={{ marginLeft: "0.8rem", marginTop: "0.6rem" }}>질문내용</p>
          <p
            style={{
              marginLeft: "0.8rem",
              color: "#07858c",
              marginTop: "1rem",
              fontWeight: "bold",
            }}
          ></p>
        </Qnalistbox>
      </Qnalist>
      <HorizonLine></HorizonLine>

      <Materialtitle>
        <FaFileAlt></FaFileAlt>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>자료</p>
      </Materialtitle>
      <Materiallist>
        <Materiallistobx>
          <p>1.자료제목</p>
          <p style={{ marginLeft: "0.8rem", marginTop: "0.6rem" }}>자료내용</p>
          <p
            style={{ marginTop: "1rem", fontWeight: "bold", color: "#07858c" }}
          ></p>
        </Materiallistobx>
      </Materiallist>
      <HorizonLine></HorizonLine>
      <Noticetitle>
        <FaBullhorn></FaBullhorn>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>공지</p>
      </Noticetitle>
      <Noticelist>
        <Noticelistbox>
          <p>1.공지제목</p>
          <p style={{ marginLeft: "0.8rem", marginTop: "0.6rem" }}>공지내용</p>
          <p
            style={{ marginTop: "1rem", fontWeight: "bold", color: "#07858c" }}
          ></p>
        </Noticelistbox>
      </Noticelist>
    </QnaForm>
  );
};
const QnaForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const Qnatitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Qnalist = styled.div`
  width: 100%;
  height: 10vh;
  margin-left: 1rem;
`;
const Qnalistbox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Materialtitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;
const Materiallist = styled.div`
  width: 100%;
  margin-left: 1rem;
  height: 10vh;
`;
const Materiallistobx = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
const Noticetitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;
const Noticelist = styled.div`
  width: 100%;
  height: 10vh;
  margin-left: 1rem;
`;
const Noticelistbox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;
export default Qna;
