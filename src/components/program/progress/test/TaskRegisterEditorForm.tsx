import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { FaUser } from "react-icons/fa";

import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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

const TaskRegisterEditorForm = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (
    editorState: React.SetStateAction<EditorState>
  ) => {
    setEditorState(editorState);
  };
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };

  return (
    <MyBlock>
      <TaskRegisterEdinfo>
        <p>[1차시] 과제 제목</p>
        <TaskRegisterEdinfosub>
          <FaUser></FaUser>
          <p>박서영</p>
          <p>2023.03.15</p>
        </TaskRegisterEdinfosub>
      </TaskRegisterEdinfo>
      <HorizonLine></HorizonLine>
      <p>과제제출기간</p>
      <TaskRegistersubmit>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Start Date"
        />
        <p style={{ marginRight: "0.5rem", lineHeight: "1.5rem" }}>~</p>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          placeholderText="End Date"
        />
      </TaskRegistersubmit>
      <HorizonLine></HorizonLine>
      <p>과제작성칸</p>
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
      >
        과제등록하기
      </Button>
    </MyBlock>
  );
};
const MyBlock = styled.div`
  .wrapper-class {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 4rem;
    margin-top: 1rem;
  }
  .editor {
    height: 100% !important;
    border: 1px solid #777777 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
`;
const TaskRegisterEdinfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  font-size: 0.8rem;
`;
const TaskRegisterEdinfosub = styled.div`
  display: flex;
  flex-direction: row;
  width: 10%;
  justify-content: space-between;
  margin-left: 83%;
`;
const TaskRegistersubmit = styled.div`
  display: flex;
  flex-direction: row;
  width: 27%;
  margin-top: 1rem;
`;

export default TaskRegisterEditorForm;
