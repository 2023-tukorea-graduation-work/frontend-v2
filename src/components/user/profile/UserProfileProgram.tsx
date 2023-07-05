import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
const UserProfileProgram = () => {
  const navigate = useNavigate();
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <Preview>
      <Top>
        <Title>프로그램 이름</Title>
        <MentoInfo>멘토이름 | 멘토학교 | 멘토학과</MentoInfo>
        <Link
          onClick={() => {
            navigate("/projectProgress");
          }}
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
        >
          프로젝트관리하기
        </Link>
        <Link
          onClick={() => {
            navigate("/programCompletion");
          }}
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
        >
          결과보기
        </Link>
      </Top>
      <Bottom>
        <BottomP>주제</BottomP>
        <BottomP>장소</BottomP>
        <BottomP>모집인원</BottomP>
        <BottomP>모집기간</BottomP>
        <BottomP>프로젝트기간</BottomP>
        <Link
          onClick={() => {
            navigate("/evaluation");
          }}
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
        >
          후기작성하기{`->`}
        </Link>
      </Bottom>
    </Preview>
  );
};

const Preview = styled.div`
  width: 30%;
  height: 13.5rem;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07);
  margin: 1.75rem 1.75rem 1.875rem 0;
  background-color: white;
  border-top-right-radius: 4rem;
  @media (max-width: 2000px) {
  }
  @media (max-width: 1580px) {
    width: 45%;
  }
  @media (max-width: 1300px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  height: 4.6rem;
  width: 100%;
  border-top-right-radius: 4rem;
  box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.05);
`;
const Title = styled.p`
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 1.5rem;
  font-size: 1.1rem;
  font-family: "NotoSansRegular";
`;
const MentoInfo = styled.p`
  font-size: 0.5rem;
  color: #777;
  margin-left: 1rem;
  font-family: "NotoSansLight";
  line-height: 1rem;
`;
const Link = styled.p`
  font-size: 0.5rem;
  color: #07858c;
  font-family: "NotoSansRegular";
  float: right;
  margin-right: 1rem;
  cursor: pointer;
`;
const Bottom = styled.div`
  width: 100%;
`;
const BottomP = styled.p`
  margin-left: 1rem;
  line-height: 1.5rem;
  font-size: 0.8rem;
  font-family: "NotoSansRegular";
`;

export default UserProfileProgram;
