import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";

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
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>
  ) => {
    setEditorState(editorState);
  };

  return (
    <MyBlock>
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
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar-class"
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        localization={{
          locale: "ko",
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
      <Button
        variant="contained"
        color="secondary"
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
