import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useAppSelector } from "../../../../store/hooks";
const Topic = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <Entire>
      <Title>
        <p>01</p>
        <p
          style={{
            fontFamily: "NotoSansBold",
            fontSize: "2.5rem",
            lineHeight: "4rem",
          }}
        >
          PROGRAM(주제)
        </p>
        <p
          style={{
            fontFamily: "NotoSansBold",
            fontSize: "2.5rem",
            lineHeight: "4rem",
          }}
        >
          주제설명~
        </p>
        <Mentor>
          <p>활동기간</p>
          <p>멘토이름</p>
          <p>멘토학교, 학과</p>
        </Mentor>
        <Category>카테고리</Category>
      </Title>
      <ReviewBox>
        <ReviewOutSide>
          <ReviewProfile></ReviewProfile>
          <ReviewName>
            <p style={{ fontSize: "1rem" }}>01</p>
            <p style={{ fontSize: "1.5rem" }}>학생이름</p>
            <p style={{ fontSize: "1.25rem" }}>학교</p>
          </ReviewName>
          <ReviewComment>
            "가나다라마바사아자차타카파하기니디리미비시이지"
          </ReviewComment>
        </ReviewOutSide>
        <ReviewOutSide>
          <ReviewProfile></ReviewProfile>
          <ReviewName>
            <p style={{ fontSize: "1rem" }}>01</p>
            <p style={{ fontSize: "1.5rem" }}>학생이름</p>
            <p style={{ fontSize: "1.25rem" }}>학교</p>
          </ReviewName>
          <ReviewComment>
            "가나다라마바사아자차타카파하기니디리미비시이지"
          </ReviewComment>
        </ReviewOutSide>
      </ReviewBox>
    </Entire>
  );
};
const Mentor = styled.div`
  margin-top: 10rem;
`;
const Title = styled.div`
  width: 30rem;
  height: 40rem;
`;
const ReviewBox = styled.div`
  height: 35rem;
  width: 50rem;
  padding: 1rem;
  background-color: white;
  margin-top: 2.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 20px 2px rgba(0, 0, 0, 0.2);
`;
const ReviewOutSide = styled.div`
  height: 7rem;
  width: 50rem;
  display: flex;
  background-color: white;
`;
const ReviewProfile = styled.div`
  margin: 0 auto;
  margin-top: 0.8rem;
  border: 0.4rem solid #ff8e40;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  background-color: white;
`;
const ReviewName = styled.div`
  width: 7.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  line-height: 2rem;
`;
const ReviewComment = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Entire = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 8rem;
  font-family: NotoSansRegular;
  font-size: 1.5rem;
  line-height: 3rem;
`;

const Category = styled.div`
  border-radius: 5px;
  background-color: #07858c;
  height: 4rem;
  width: 12rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
`;
export default Topic;
