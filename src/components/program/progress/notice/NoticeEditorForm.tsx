import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../../store/hooks";
import {
  loadNoticeListAsync,
  uploadNoticetAsync,
} from "../../../../slice/program/programProgressNoticeSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { event } from "jquery";
import { useParams } from "react-router-dom";
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

const NoticeEditorForm = ({ subtogglePopup }: Props) => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();
  const { programId } = useParams();
  return (
    <MyBlock>
      <TestEdinfo>
        <p style={{ width: "12rem" }}>공지제목을 입력하세요</p>
        <TestEdinfosub></TestEdinfosub>
      </TestEdinfo>
      <input
        placeholder="제목"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
        style={{ height: "4vh", width: "100%", marginTop: "2rem" }}
      ></input>
      <p style={{ marginTop: "2rem" }}>공지내용을 입력하세요</p>
      {/* <p style={{ marginLeft: "1.5%" }}>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </p> */}
      <textarea
        placeholder="공지내용"
        style={{
          width: "100%",
          height: "20vh",
          marginBottom: "2rem",
          marginTop: "1rem",
        }}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></textarea>
      <Button
        variant="contained"
        color="secondary"
        sx={{ height: "2.2rem", width: "9rem", marginLeft: "40%" }}
        onClick={async () => {
          console.log(value);

          try {
            await dispatch(
              uploadNoticetAsync({
                programId: Number(programId),
                title: title,
                content: value,
              })
            );

            await dispatch(loadNoticeListAsync(Number(programId)));

            toast.success("게시글작성 성공");
            subtogglePopup();
          } catch (error) {
            console.error("에러 발생:", error);
          }
        }}
      >
        공지올리기
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
  margin-left: 80%;
`;
export default NoticeEditorForm;
