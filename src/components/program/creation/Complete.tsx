import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Complete = () => {
  return (
    <MessageStyle>
      프로젝트 생성이 완료되었습니다.
      <Button
        variant="contained"
        color="secondary"
        sx={{ height: "2.2rem", width: "11rem", marginTop: "1.2rem" }}
        onClick={() => {}}
      >
        작성한 글 보러가기
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
  font-size: 1rem;
  margin-top: 4rem;
`;
export default Complete;