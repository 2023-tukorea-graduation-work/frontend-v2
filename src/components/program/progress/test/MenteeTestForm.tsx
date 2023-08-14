import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Question {
  id: number;
  text: string;
}

const MenteeTestForm: React.FC = () => {
  const navigate = useNavigate();
  const questions: Question[] = [
    { id: 1, text: "첫 번째 문제: ..." },
    { id: 2, text: "두 번째 문제: ..." },
    { id: 3, text: "세 번째 문제: ..." },
    // 추가예시문제
  ];
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  //   const handleNextPage = () => {
  //     if (currentPage < questions.length - 1) {
  //       setCurrentPage(currentPage + 1);
  //       console.log("Next page clicked. Current page:", currentPage);
  //     } else {
  //       setShowPopup(true);
  //       console.log("Show popup!");
  //     }
  //   };
  const handleNextPage = () => {
    if (!showPopup && currentPage < questions.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleSubmit = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <MenteeTestFormbox>
      <MenteeTestName>
        <p>수학/1차시험</p>
      </MenteeTestName>
      <MenteeTestNumber>
        <p
          style={{
            fontSize: "1.3rem",
            marginTop: "2rem",
            marginBottom: "0.8rem",
            marginLeft: "3rem",
          }}
        >
          {questions[currentPage].text}
        </p>

        <p
          style={{
            fontSize: "1.5rem",
            marginLeft: "3rem",
          }}
        >
          문제내용~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~dkssuddafaaefdkssudgktpdy
          wjdld agkkdfjk;addksdugktpdy sodlfmadms rlatkstn ssjsms rlatkatnsdm
          dksl sksms raltfdnf ahffk slrk sodlfmadmf dkfEoaus
        </p>
        <p
          style={{ marginLeft: "3rem", fontSize: "0.8rem", marginTop: "1rem" }}
        >
          배점:20
        </p>
      </MenteeTestNumber>
      <MenteeTestAnswerAB>
        <AnswerA>
          <Button variant="outlined" style={{ width: "100%", height: "100%" }}>
            <p style={{ color: "black" }}>a.정답</p>
          </Button>
        </AnswerA>
        <AnswerB>
          <Button variant="outlined" style={{ width: "100%", height: "100%" }}>
            <p style={{ color: "black" }}>b.정답</p>
          </Button>
        </AnswerB>
      </MenteeTestAnswerAB>
      <MenteeTestAnswerCD>
        <AnswerC>
          <Button variant="outlined" style={{ width: "100%", height: "100%" }}>
            <p style={{ color: "black" }}>c.정답</p>
          </Button>
        </AnswerC>
        <AnswerD>
          <Button variant="outlined" style={{ width: "100%", height: "100%" }}>
            <p style={{ color: "black" }}>d.정답</p>
          </Button>
        </AnswerD>
      </MenteeTestAnswerCD>

      <MenteeTestNext>
        <Button
          variant="contained"
          color="primary"
          sx={{
            float: "right",
            height: "5vh",
            width: "9%",
            marginRight: "7.5%",
          }}
          onClick={() => {
            if (showPopup) {
              handleClosePopup();
            } else if (currentPage === questions.length - 1) {
              handleSubmit();
            } else {
              handleNextPage();
            }
          }}
          disabled={
            showPopup || (currentPage === questions.length - 1 && showPopup)
          }
        >
          {showPopup
            ? "닫기"
            : currentPage === questions.length - 1
            ? "제출하기"
            : "다음 페이지"}
        </Button>
        {showPopup && (
          <MenteeTestPopupbox>
            <MenteeTestPopupinner>
              <h2>시험 문제를 모두 푸셨습니다!</h2>
              <p>축하합니다!</p>
              <button
                onClick={() => {
                  navigate("/projectProgress");
                }}
              >
                닫기
              </button>
            </MenteeTestPopupinner>
          </MenteeTestPopupbox>
        )}
        {/*  
        //   onClick={() => {
        //     if (currentPage === questions.length - 1) {
        //       setShowPopup(true);
        //     } else {
        //       handleNextPage();
        //     }
        //   }}
        //   disabled={showPopup || currentPage === questions.length - 1}
        // >
        //   {showPopup
        //     ? "문제 풀기"
        //     : currentPage === questions.length - 1
        //     ? "제출하기"
        //     : "다음 페이지"}
        // </Button>
        // {showPopup && (
        //   <MenteeTestPopupbox>
        //     <MenteeTestPopupinner>
        //       <h2>시험 문제를 모두 푸셨습니다!</h2>
        //       <p>축하합니다!</p>
        //       <button onClick={handleClosePopup}>닫기</button>
        //     </MenteeTestPopupinner>
        //   </MenteeTestPopupbox>
        // )}
          */}
      </MenteeTestNext>
    </MenteeTestFormbox>
  );
};
const MenteeTestFormbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
const MenteeTestName = styled.div`
  margin-top: 2rem;
  margin-left: 1rem;
`;
const MenteeTestNumber = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 85%;
  height: 30vh;
  margin-left: 7.5%;
  margin-top: 1rem;
  border: 1.5px solid #d9d9d9;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 3rem;
`;
const MenteeTestAnswerAB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2rem;
`;
const AnswerA = styled.div`
  width: 35%;
  height: 5.5vh;
  background-color: white;
  box-shadow: 0 1px 3px #fae4d4, 0 1px 2px #fae4d4;
`;
const AnswerB = styled.div`
  width: 35%;
  height: 5.5vh;
  background-color: white;
  box-shadow: 0 1px 3px #fae4d4, 0 1px 2px #fae4d4;
`;
const MenteeTestAnswerCD = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const AnswerC = styled.div`
  width: 35%;
  height: 5.5vh;
  background-color: white;
  box-shadow: 0 1px 3px #fae4d4, 0 1px 2px #fae4d4;
`;
const AnswerD = styled.div`
  width: 35%;
  height: 5.5vh;
  background-color: white;
  box-shadow: 0 1px 3px #fae4d4, 0 1px 2px #fae4d4;
`;
const MenteeTestNext = styled.div`
  margin-top: 3rem;
`;
const MenteeTestPopupbox = styled.div`
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
  z-index: 9999;
`;
const MenteeTestPopupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 35%;
  padding: 1rem;
  border-radius: 20px;
`;
export default MenteeTestForm;
