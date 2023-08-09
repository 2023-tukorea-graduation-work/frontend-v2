import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { useAppDispatch } from "../../../../../store/hooks";
import { FaRegWindowClose, FaUserCircle } from "react-icons/fa";
import { Input } from "@mui/material";
import { uploadMaterialAsync } from "../../../../../slice/program/programProgressMaterial";

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 10px",
      }}
    ></div>
  );
};

interface Props {
  selectedFile: File | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const FileUpload = (props: Props) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    props.setSelectedFile(file || null);
  };

  const handleFileSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.selectedFile) {
      console.log("Selected file:", props.selectedFile);
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

const MaterialPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <MPopupbox>
          <MPopupinner>
            <MPopupFrom>
              <MPopupStudent>
                <FaUserCircle size="20" color="#777777"></FaUserCircle>
                <p>박서영</p>
              </MPopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={togglePopup}
              ></FaRegWindowClose>
            </MPopupFrom>
            <HorizonLine></HorizonLine>
            <Input
              placeholder="자료제목입력"
              color="secondary"
              sx={{ width: "100%", height: "14%", border: "none" }}
            ></Input>
            <Input
              placeholder="자료내용입력"
              color="secondary"
              sx={{
                width: "100%",
                height: "45%",
                border: "none",
                marginBottom: "0.5rem",
              }}
            ></Input>
            <FileUpload
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            ></FileUpload>
            <HorizonLine></HorizonLine>
            <p
              style={{
                color: "#07858C",
                cursor: "pointer",
                marginTop: "1rem",
                marginLeft: "47%",
              }}
              onClick={() => {
                const test = {
                  programId: 1,
                  title: "프로그램 자료 제목1",
                  detail: "프로그램 자료 상세내용1",
                };
                const formData = new FormData();
                formData.append(
                  "data",
                  new Blob([JSON.stringify(test)], { type: "application/json" })
                );
                if (selectedFile !== null) {
                  formData.append("file", selectedFile);
                }
                dispatch(uploadMaterialAsync(formData));
                togglePopup();
              }}
            >
              자료올리기
            </p>
          </MPopupinner>
        </MPopupbox>
      )}
    </div>
  );
};
const MPopupbox = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MPopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
const MPopupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 35%;
  padding: 1rem;
  border-radius: 20px;
`;
const MPopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 7%;
  margin-right: 90%;
  color: #777777;
`;
export default MaterialPopup;
