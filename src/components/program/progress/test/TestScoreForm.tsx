import React, { useState } from "react";
import styled from "@emotion/styled";

import { Input } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  subtogglePopup(): void;
}

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
      }}
    ></div>
  );
};

const TestScoreForm = ({ subtogglePopup }: Props) => {
  const [scoretext, scoresetText] = useState("2");
  const [scoreediting, scoresetEditing] = useState(false);

  const handleClick = () => {
    scoresetEditing(true);
  };

  const scorehandleInputChange = (event: any) => {
    scoresetText(event.target.value);
  };

  const scorehandleInputBlur = () => {
    scoresetEditing(false);
  };

  const [sdetailtext, sdetailsetText] = useState("2");
  const [sdetailediting, sdetailEditing] = useState(false);

  const sdetailhandleInputChange = (event: any) => {
    sdetailsetText(event.target.value);
  };

  const sdetailhandleInputBlur = () => {
    sdetailEditing(false);
  };

  return (
    <TSForm>
      <TSbox>
        <TSprofile>
          <FaUserCircle size="32"></FaUserCircle>
          <TSinfo>
            <p style={{ fontWeight: "bold" }}>박서영</p>
            <p
              style={{
                fontSize: "0.6rem",
                color: "#777777",
                marginTop: "0.3rem",
              }}
            >
              제출시간:2023.03.03 10:30
            </p>
          </TSinfo>
        </TSprofile>
        <HorizonLine></HorizonLine>
        <TSdetail>
          <p>과제 상세 내용</p>
          <p style={{ marginTop: "0.3rem", marginBottom: "2.5rem" }}>
            내용내요애요용~~
          </p>
          <p style={{ color: "#777777", fontSize: "0.7rem" }}>파일이름.pdf</p>
        </TSdetail>
        <HorizonLine></HorizonLine>
        <TSscore>
          <p>평가 점수</p>
          <Input
            placeholder="점수입력"
            color="secondary"
            sx={{
              width: "20%",
              height: "15%",
              border: "none",
              marginTop: "0.5rem",
            }}
          ></Input>
          <p style={{ marginTop: "1rem" }}>평가내용</p>
          <Input
            placeholder="평가내용을 입력해주세요"
            color="secondary"
            sx={{
              width: "94%",
              height: "40%",
              border: "none",
              marginTop: "0.5rem",
            }}
          ></Input>
        </TSscore>
        <a
          href="#"
          style={{
            color: "#07858C",
            fontWeight: "bold",
            fontSize: "0.8rem",
            marginLeft: "30rem",
            marginTop: "0.7rem",
            textDecoration: "none",
          }}
          onClick={() => {
            toast.success("과제평가 완료");
            subtogglePopup();
          }}
        >
          평가완료하기
        </a>
      </TSbox>

      <TScompletebox>
        <TScprofile>
          <FaUserCircle size="32"></FaUserCircle>
          <TScinfo>
            <p style={{ fontWeight: "bold" }}>박서영</p>
            <p
              style={{
                fontSize: "0.6rem",
                color: "#777777",
                marginTop: "0.3rem",
              }}
            >
              제출시간:2023.03.03 10:30
            </p>
          </TScinfo>
        </TScprofile>
        <HorizonLine></HorizonLine>
        <TScdetail>
          <p>과제 상세 내용</p>
          <p style={{ marginTop: "0.3rem", marginBottom: "2.5rem" }}>
            내용내요애요용~~
          </p>
          <p style={{ color: "#777777", fontSize: "0.7rem" }}>파일이름.pdf</p>
        </TScdetail>
        <HorizonLine></HorizonLine>
        <TScscore>
          <p>평가 점수</p>
          {scoreediting ? (
            <Input
              placeholder="수정점수입력"
              color="secondary"
              sx={{
                width: "20%",
                height: "15%",
                border: "none",
                marginTop: "0.5rem",
              }}
              onChange={scorehandleInputChange}
              onBlur={scorehandleInputBlur}
            />
          ) : (
            <p
              style={{
                fontSize: "1.1rem",
                color: "#07858C",
                fontWeight: "bold",
                marginTop: "0.5rem",
              }}
            >
              100
            </p>
          )}
          <p style={{ marginTop: "1rem" }}>평가내용</p>
          {scoreediting ? (
            <Input
              placeholder="평가내용입력"
              color="secondary"
              sx={{
                width: "94%",
                height: "40%",
                border: "none",
                marginTop: "0.5rem",
              }}
              onChange={sdetailhandleInputChange}
              onBlur={sdetailhandleInputBlur}
            />
          ) : (
            <p style={{ marginTop: "0.6rem", fontSize: "0.7rem" }}>
              상세 평가 내용
            </p>
          )}
        </TScscore>

        <a
          href="#"
          style={{
            color: "#07858C",
            fontWeight: "bold",
            fontSize: "0.8rem",
            marginLeft: "30rem",
            marginTop: "1rem",
            textDecoration: "none",
          }}
          onClick={handleClick}
        >
          평가수정하기
        </a>
      </TScompletebox>
    </TSForm>
  );
};
const TSForm = styled.div`
  width: 93%;
  height: 40vh;
  margin-left: 3rem;
  margin-top: 1.5rem;
  display: flex;
  flex-direction: row;
`;
const TSbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  height: 100%;
  border-radius: 15px;
  background-color: #f5f5f5;
`;
const TSprofile = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.7rem;
  height: 12%;
`;
const TSinfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
`;
const TSdetail = styled.div`
  height: 25%;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 0.8rem;
`;
const TSscore = styled.div`
  height: 40%;
  margin-left: 2rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;
const TScompletebox = styled.div`
  width: 47%;
  height: 100%;
  margin-left: 7rem;
  border-radius: 15px;
  background-color: #f5f5f5;
`;
const TScprofile = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.7rem;
  height: 12%;
`;
const TScinfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-top: 0.3rem;
`;
const TScdetail = styled.div`
  height: 25%;
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 0.8rem;
`;
const TScscore = styled.div`
  height: 40%;
  margin-left: 2rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

export default TestScoreForm;
