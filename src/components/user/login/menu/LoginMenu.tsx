import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const LoginMenu = () => {
  const navigate = useNavigate();
  return (
    <OptionStyled>
      비밀번호찾기 &nbsp; &nbsp;| &nbsp; &nbsp;아이디찾기 &nbsp;&nbsp;|&nbsp;
      &nbsp;{" "}
      <div
        style={{ display: "inline", cursor: "pointer" }}
        onClick={() => {
          navigate("/userCreation");
        }}
      >
        회원가입
      </div>
    </OptionStyled>
  );
};
const OptionStyled = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 1rem;
  text-align: center;
  font-family: NotoSansRegular;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #777;
  font-size: 0.7rem;
`;

export default LoginMenu;
