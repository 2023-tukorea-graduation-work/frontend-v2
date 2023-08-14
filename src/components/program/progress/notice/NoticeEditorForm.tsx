import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../../../store/hooks";
import { uploadNoticetAsync } from "../../../../slice/program/programProgressNoticeSlice";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { event } from "jquery";
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
  const [value, setValue] = useState("");
  const dispatch = useAppDispatch();

  return (
    <MyBlock>
      <TestEdinfo>
        <p>공지제목을 입력하세요</p>
        <TestEdinfosub>
          <FaUser></FaUser>
          <p>박서영</p>
          <p>2023.03.15</p>
        </TestEdinfosub>
      </TestEdinfo>
      <input
        style={{ height: "4vh", width: "100%", marginTop: "2rem" }}
      ></input>
      <p style={{ marginTop: "2rem" }}>공지내용을 입력하세요</p>
      {/* <p style={{ marginLeft: "1.5%" }}>
        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </p> */}
      <input
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
      ></input>
      <Button
        variant="contained"
        color="secondary"
        sx={{ height: "2.2rem", width: "9rem", marginLeft: "40%" }}
        onClick={() => {
          console.log(setValue);
          // dispatch(
          //   uploadNoticetAsync({
          //     programId: 1,
          //     title: "test0717",
          //     content: "test0717",
          //   })
          // );
          // toast.success("게시글작성 성공");
          // subtogglePopup();
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
