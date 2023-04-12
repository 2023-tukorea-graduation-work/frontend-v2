import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  const navigate = useNavigate();
  return (
    <MessageStyle>
      회원가입 완료되었습니다.
      <Button
        variant="contained"
        color="primary"
        sx={{ height: "2.2rem", width: "11rem", marginTop: "1.2rem" }}
        onClick={() => {
          navigate("/");
        }}
      >
        로그인 하러가기
      </Button>
    </MessageStyle>
  );
};

const MessageStyle = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-family: NotoSansMedium;
  margin-top:4rem;
  font-size: 1rem;
`;

export default Complete;