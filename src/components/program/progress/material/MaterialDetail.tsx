import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaRegWindowClose, FaPlus } from "react-icons/fa";
import { TextField, Input } from "@mui/material";
import { toast } from "react-toastify";

const FileUpload = () => {
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
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 10px",
      }}
    ></div>
  );
};

const MaterialPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

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
            <FileUpload></FileUpload>
            <HorizonLine></HorizonLine>
            <p
              style={{
                color: "#07858C",
                cursor: "pointer",
                marginTop: "1rem",
                marginLeft: "47%",
              }}
              onClick={() => {
                toast.success("자료올리기 성공");
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

const MaterialDetailPopup = () => {
  const [sisOpen, ssetIsOpen] = useState(true);
  const subtogglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  return (
    <div>
      {sisOpen && (
        <MdetailPopupbox>
          <MdetailPopupinner>
            <MdetailPopupFrom>
              <MdetailPopupStudent>
                <FaUserCircle size="20" color="#777777"></FaUserCircle>
                <p>박서영</p>
                <p style={{ fontSize: "0.6rem" }}>2023.03.15</p>
              </MdetailPopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={subtogglePopup}
              ></FaRegWindowClose>
            </MdetailPopupFrom>
            <HorizonLine></HorizonLine>
            <p style={{ marginTop: "1rem" }}>자료제목</p>
            <p
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                marginBottom: "6rem",
              }}
            >
              자료내용
            </p>
          </MdetailPopupinner>
        </MdetailPopupbox>
      )}
    </div>
  );
};

const MaterialDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtogglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  return (
    <MaterialForm>
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        자료
      </p>
      <Materialbox>
        <Materialtext>
          <Materialtextinfo>
            <p style={{ fontSize: "0.9rem" }}>날짜 :</p>
            <p>2022.02.31</p>
            <p>진행차시 : 1차시 / 9차시</p>
            <p>프로그램기간 : 2022.02.01 ~ 2022.09.21</p>
          </Materialtextinfo>
          <div>
            <p
              style={{ color: "#07858C", cursor: "pointer" }}
              onClick={togglePopup}
            >
              자료올리기 <FaPlus color="#07858C"></FaPlus>
            </p>
            {isOpen && <MaterialPopup />}
          </div>
        </Materialtext>
        <Materiallistbox>
          <MaterialTotal>
            <Materiallist>
              <p>자료제목</p>
            </Materiallist>
            <MaterialStudent>
              <p>박서영</p>
              <p>
                <FaUserCircle></FaUserCircle>
              </p>
              <p>2023.03.15</p>
            </MaterialStudent>
          </MaterialTotal>
          <HorizonLine />
          <p style={{ marginLeft: "1.5%" }}>자료내용</p>
          <div>
            <a
              href="#"
              style={{
                marginLeft: "93%",
                color: "#07858C",
              }}
              onClick={subtogglePopup}
            >
              자세히보기
            </a>
            {sisOpen && <MaterialDetailPopup />}
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <a
              href="#"
              style={{
                color: "#07858C",
                marginLeft: "93%",
              }}
            >
              수정하기
            </a>
          </div>
        </Materiallistbox>
      </Materialbox>
    </MaterialForm>
  );
};

const MaterialForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Materialtext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2%;
  font-size: 0.9rem;
`;
const Materialbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.7rem;
`;
const Materiallistbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 2%;
  font-size: 0.8rem;
`;
const Materiallist = styled.div`
  margin-left: 1.5%;
  margin-top: 1.5%;
  width: 15%;
`;
const MaterialStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 11%;
  margin-left: 71%;
  margin-top: 2%;
`;
const MaterialTotal = styled.div`
  display: flex;
  flex-direction: row;
`;
const Materialtextinfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;

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
const MdetailPopupbox = styled.div`
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
const MdetailPopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
const MdetailPopupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 40%;
  padding: 1rem;
  border-radius: 20px;
`;
const MdetailPopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 13%;
  margin-right: 85%;
  color: #777777;
`;
export default MaterialDetail;
