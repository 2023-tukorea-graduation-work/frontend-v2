import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ReturnLogin = () => {
  const navigate = useNavigate();
  return (
    <OrangeBox>
      <WhiteBox>
        로그인후 이용 가능합니다.
        <Button
          variant="contained"
          color="primary"
          sx={{ height: "2.5rem", width: "12rem", marginTop: "2rem" }}
          onClick={() => {
            navigate("/");
          }}
        >
          로그인 하러가기
        </Button>
      </WhiteBox>
    </OrangeBox>
  );
};
const OrangeBox = styled.div`
  height: 87vh;
  width: 100%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #ffe5d4;
  border-top-right-radius: 4rem;
`;
const WhiteBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96%;
  width: 97%;
  box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-top-right-radius: 4rem;
  flex-direction: column;
`;
xw
export default ReturnLogin;