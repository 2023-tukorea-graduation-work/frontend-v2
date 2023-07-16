import React from "react";
import styled from "@emotion/styled";
const PlanWithActivitie = () => {
  return (
    <>
      <BigBox>
        <LeftBox>
          <p style={{ marginTop: "3rem" }}>1차시</p>
          <p>2023.03.01</p>
        </LeftBox>
        <RightBox>
          <Plan>
            <Title>&nbsp; Plan</Title>
          </Plan>
          <Details>
            <Title>&nbsp; Details</Title>
          </Details>
          <Notes>
            <Title>&nbsp; Notes</Title>
          </Notes>
          <QnAWithNext>
            <QnA>
              <Title>&nbsp; Q&A</Title>
            </QnA>
            <Next>
              <Title style={{ width: "90%", float: "right" }}>
                &nbsp; Next
              </Title>
            </Next>
          </QnAWithNext>
        </RightBox>
      </BigBox>
    </>
  );
};
const BigBox = styled.div`
  width: 95rem;
  height: 55rem;
  margin: 0 auto;
  border: 0.13rem solid #d9d9d9;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-radius: 3px;
`;
const LeftBox = styled.div`
  width: 20rem;
  height: 55rem;
  margin: 0 auto;
  border-right: 0.13rem solid #d9d9d9;
  float: left;
  text-align: center;
  font-size: 1.1rem;
  line-height: 3rem;
`;
const RightBox = styled.div`
  width: 74.87rem;
  height: 55rem;
  margin: 0 auto;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Plan = styled.div`
  margin-top: 1rem;
  width: 72rem;
  height: 7rem;
`;
const Details = styled.div`
  width: 72rem;
  height: 23rem;
`;
const Notes = styled.div`
  width: 72rem;
  height: 10rem;
`;
const QnAWithNext = styled.div`
  width: 72rem;
  height: 20rem;
  display: flex;
`;
const QnA = styled.div`
  width:50%;
  height 20rem;
`;
const Next = styled.div`
  width:50%;
  height 20rem;
`;
const Title = styled.div`
  font-size: 1rem;
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  background-color: rgba(131, 194, 197, 0.5);
  display: flex;
  align-items: center;
  font-family: NotoSansBold;
`;
export default PlanWithActivitie;
// width: 95rem;
// height: 55rem;
