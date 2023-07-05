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
            width: "40rem",
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
            <p style={{ fontSize: "0.8rem" }}>01</p>
            <p style={{ fontSize: "1.1rem" }}>학생이름</p>
            <p style={{ fontSize: "1rem" }}>학교</p>
          </ReviewName>
          <ReviewComment>
            "가나다라마바사아자차타카파하기니디리미비시이지"
          </ReviewComment>
        </ReviewOutSide>
        <ReviewOutSide>
          <ReviewProfile></ReviewProfile>
          <ReviewName>
            <p style={{ fontSize: "0.8rem" }}>01</p>
            <p style={{ fontSize: "1.1rem" }}>학생이름</p>
            <p style={{ fontSize: "1rem" }}>학교</p>
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
  font-size: 1.1rem;
`;
const Title = styled.div`
  width: 30rem;
  height: 40rem;
`;
const ReviewBox = styled.div`
  height: 33rem;
  width: 50rem;
  padding: 1rem;
  background-color: white;
  margin-top: 2.5rem;
  border-radius: 5px;
  box-shadow: 0 1px 15px 2px rgba(0, 0, 0, 0.1);
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
  border: 0.3rem solid #ff8e40;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
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
  font-size: 1rem;
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
  border: 1px solid white;
  height: 3.5rem;
  width: 11rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;
export default Topic;
