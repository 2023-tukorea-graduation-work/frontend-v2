import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FaUser } from "react-icons/fa";

import { Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useAppSelector } from "../../../../store/hooks";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAppDispatch } from "../../../../store/hooks";
import { useParams } from "react-router";
import { uploadTaskAsync } from "../../../../slice/program/programProgressTask";
import { dateFormat } from "../../../../utils/dateFormat";

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

const TaskRegisterFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<Array<File>>([]);

  const handleFileChange = (event: any) => {
    if (event.target.files) {
      const updatedFiles = event.target.files;
      setSelectedFile([...selectedFile, ...updatedFiles]);
    }
  };

  const handleFileSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div>
      <form onSubmit={handleFileSubmit}>
        <input type="file" onChange={handleFileChange} multiple />
      </form>
    </div>
  );
};

const TaskRegisterEditorForm = ({ subtogglePopup }: Props) => {
  const [selectedFile, setSelectedFile] = useState<Array<File>>([]);
  const handleFileChange = (event: any) => {
    if (event.target.files) {
      const updatedFiles = event.target.files;
      setSelectedFile([...selectedFile, ...updatedFiles]);
    }
  };
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();
  const { programId } = useParams();
  const handleStartDateChange = (date: any) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: any) => {
    setEndDate(date);
  };
  const [editorHtml, setEditorHtml] = useState<string>("");

  const handleEditorChange = (value: string) => {
    setEditorHtml(value);
  };
  return (
    <MyBlock>
      <TaskRegisterEdinfo>
        <p>[1차시] 과제 제목</p>
        <TaskRegisterEdinfosub></TaskRegisterEdinfosub>
      </TaskRegisterEdinfo>
      <HorizonLine></HorizonLine>
      {user_gb === "MENTO" && (
        <div>
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
        </div>
      )}

      {user_gb === "MENTO" && (
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <p style={{ marginBottom: "1rem" }}>과제제목입력</p>
          <input
            style={{ width: "100%", height: "4vh" }}
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            과제내용입력
          </p>
          <input
            style={{ width: "100%", height: "10vh" }}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></input>
          <input type="file" onChange={handleFileChange} multiple />
        </div>
      )}
      {user_gb === "MENTEE" && (
        <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            과제제출파일과 내용을 입력해주세요
          </p>
          <input
            style={{ width: "100%", height: "10vh" }}
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          ></input>
          <TaskRegisterFileUpload></TaskRegisterFileUpload>
        </div>
      )}
      {user_gb === "MENTO" && (
        <Button
          variant="contained"
          color="secondary"
          sx={{ height: "2.2rem", width: "9rem", marginLeft: "40%" }}
          onClick={() => {
            const formData = new FormData();
            console.log(selectedFile);
            const data = {
              startTaskDate: dateFormat(startDate),
              endTaskDate: dateFormat(endDate),
              programId: Number(programId),
              title: title,
              content: content,
            };
            formData.append(
              "data",
              new Blob([JSON.stringify(data)], { type: "application/json" })
            );
            for (let i = 0; i < selectedFile.length; i++) {
              formData.append(`files`, selectedFile[i]);
            }
            if (startDate && endDate) {
              dispatch(uploadTaskAsync(formData));
              // toast.success("과제등록 완료");
              // subtogglePopup();
            } else {
              toast.warn("양식을 채워주세요");
            }
          }}
        >
          과제등록하기
        </Button>
      )}
      {user_gb === "MENTEE" && (
        <Button
          variant="contained"
          color="primary"
          sx={{ height: "2.2rem", width: "9rem", marginLeft: "40%" }}
          onClick={() => {
            const formData = new FormData();
            const data = {
              programId: Number(programId),
              title: title,
              content: content,
            };
            formData.append(
              "data",
              new Blob([JSON.stringify(data)], { type: "application/json" })
            );
          }}
        >
          과제제출하기
        </Button>
      )}
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
