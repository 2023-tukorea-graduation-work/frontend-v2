import React from "react";
import styled from "@emotion/styled";

const UserProfileProgram = () => {
  return (
    <Preview>
      <Title>프로그램 이름</Title>
      <MentoInfo>멘토이름 | 멘토학교 | 멘토학과</MentoInfo>
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
const Title = styled.div``;
const MentoInfo = styled.div``;
export default UserProfileProgram;
