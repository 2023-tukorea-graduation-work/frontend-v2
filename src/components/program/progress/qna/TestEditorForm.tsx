import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../../store/hooks";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface Props {
  subtogglePopup(): void;
}

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #aaa",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    ></div>
  );
};

const TestEditorForm = ({ subtogglePopup }: Props) => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [editorHtml, setEditorHtml] = useState<string>("");

  const handleEditorChange = (value: string) => {
    setEditorHtml(value);
  };

  return (
    <MyBlock>
      {user_gb === "MENTO" && (
        <p>
          <TestEdinfo>
            <p>질문제목</p>
            <TestEdinfosub>
              <FaUser></FaUser>
              <p>박서영</p>
              <p>2023.03.15</p>
            </TestEdinfosub>
          </TestEdinfo>
          <HorizonLine></HorizonLine>
          <p style={{ marginLeft: "1.5%" }}>질문내용</p>
        </p>
      )}
      {user_gb === "MENTEE" && (
        <p>
          <TestEdinfo>
            <TestEdinfosub>
              <FaUser></FaUser>
              <p>박서영</p>
              <p>2023.03.15</p>
            </TestEdinfosub>
          </TestEdinfo>
          <HorizonLine></HorizonLine>
        </p>
      )}
      <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
        <p style={{ marginBottom: "1rem" }}>질문제목과 내용 입력</p>
        <ReactQuill value={editorHtml} onChange={handleEditorChange} />
      </div>
      <Button
        variant="contained"
        color={user_gb === "MENTEE" ? "primary" : "secondary"}
        sx={{ height: "2.2rem", width: "9rem", marginLeft: "40%" }}
        onClick={() => {
          toast.success("답변제출 성공");
          subtogglePopup();
        }}
      >
        답변제출하기
      </Button>
    </MyBlock>
  );
};
const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
    margin-top: 6rem;
  }
  .editor {
    height: 100% !important;
    border: 1px solid #777777 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;
const TestEdinfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
`;
const TestEdinfosub = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: space-between;
  margin-left: 86%;
`;
export default TestEditorForm;
