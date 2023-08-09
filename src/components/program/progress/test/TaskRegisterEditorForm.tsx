import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaUser } from "react-icons/fa";
import { Button, Input } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useAppSelector } from "../../../../store/hooks";

interface Props {
  subtogglePopup(): void;
}

const TaskRegisterFileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
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
        <input type="file" onChange={handleFileChange} />
      </form>
    </div>
  );
};

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

const TaskRegisterEditorForm = ({ subtogglePopup }: Props) => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
        <TaskRegisterEdinfosub>
          <FaUser></FaUser>
          <p>박서영</p>
          <p>2023.03.15</p>
        </TaskRegisterEdinfosub>
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
        <div>
          <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <p style={{ marginBottom: "1rem" }}>과제제목과 내용 입력</p>
            <Input sx={{ width: "100%", height: "24vh" }}></Input>
            {/* <ReactQuill value={editorHtml} onChange={handleEditorChange} /> */}
          </div>

          <Button
            variant="contained"
            color="secondary"
            sx={{ height: "2.2rem", width: "9rem", marginLeft: "40%" }}
            onClick={() => {
              toast.success("과제등록 완료");
              subtogglePopup();
            }}
          >
            과제등록하기
          </Button>
        </div>
      )}
      {user_gb === "MENTEE" && (
        <div>
          <div style={{ marginTop: "2rem", marginBottom: "1rem" }}>
            <p style={{ marginBottom: "1rem" }}>과제 내용 입력</p>
            <Input
              sx={{ width: "100%", height: "24vh", marginBottom: "1rem" }}
            ></Input>
            <TaskRegisterFileUpload></TaskRegisterFileUpload>
            {/* <ReactQuill value={editorHtml} onChange={handleEditorChange} /> */}
          </div>

          <Button
            variant="contained"
            color="primary"
            sx={{
              height: "2.2rem",
              width: "9rem",
              marginLeft: "40%",
              marginTop: "1rem",
            }}
            onClick={() => {
              toast.success("과제등록 완료");
              subtogglePopup();
            }}
          >
            과제제출하기
          </Button>
        </div>
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
