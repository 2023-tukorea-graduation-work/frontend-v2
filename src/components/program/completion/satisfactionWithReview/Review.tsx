import React from "react";
import styled from "@emotion/styled";
const Review = () => {
  return (
    <>
      <Title>수업 만족도</Title>
      <ReviewBox>
        <ReviewOutSide>
          <ReviewProfile></ReviewProfile>
          <ReviewName>
            <p style={{ fontSize: "1.5rem" }}>멘토 이름</p>
            <p style={{ fontSize: "1.25rem" }}>멘토</p>
          </ReviewName>
          <ReviewComment>
            "가나다라마바사아자차타카파하기니디리미비시이지"
          </ReviewComment>
        </ReviewOutSide>
        <ReviewOutSide>
          <ReviewProfile></ReviewProfile>
          <ReviewName>
            <p style={{ fontSize: "1.5rem" }}>멘티 이름</p>
            <p style={{ fontSize: "1.25rem" }}>멘티</p>
          </ReviewName>
          <ReviewComment>
            "가나다라마바사아자차타카파하기니디리미비시이지"
          </ReviewComment>
        </ReviewOutSide>
      </ReviewBox>
    </>
  );
};
const Title = styled.div`
  font-size: 1.25rem;
  width: 90rem;
  height: 3rem;
  border-radius: 5px;
  background-color: rgba(131, 194, 197, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: NotoSansBold;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;
const ReviewBox = styled.div`
  height: 35rem;
  width: 90rem;
  padding: 1rem;
  background-color: white;
  margin-top: 2.5rem;
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
export default Review;
