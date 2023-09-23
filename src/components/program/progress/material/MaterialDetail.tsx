import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaRegWindowClose, FaPlus } from "react-icons/fa";
import { TextField, Input, Button } from "@mui/material";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "../../../../store/hooks";

import materialForm from "../../../../slice/program/programProgressMaterial";
import {
  // downloadMaterialAsync,
  loadMaterialAsync,
  uploadMaterialAsync,
} from "../../../../slice/program/programProgressMaterial";
import { useParams } from "react-router-dom";

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

const handleFileDownload = (value: any) => {
  console.log(value);
  fetch(value.filepath, { method: "GET" })
    .then((res) => {
      return res.blob();
    })
    .then((blob) => {
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = "file1.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
    })
    .catch((err) => {
      console.error("err: ", err);
    });
};

const MaterialPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { programId } = useParams();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");


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
                <p>정민창</p>
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
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="자료제목입력"
              color="secondary"
              sx={{ width: "100%", height: "14%", border: "none" }}
            ></Input>
            <Input
              onChange={(e) => {
                setDetail(e.target.value);
              }}
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
              onClick={async () => {
                const test = {
                  programId: Number(programId),
                  title: title,
                  detail: detail,
                };
                const formData = new FormData();
                formData.append(
                  "data",
                  new Blob([JSON.stringify(test)], { type: "application/json" })
                );
                if (selectedFile !== null) {
                  formData.append("file", selectedFile);
                }
                try {
                  await dispatch(uploadMaterialAsync(formData));
                  await dispatch(loadMaterialAsync(Number(programId)));
                  togglePopup();
                } catch (error) {
                  console.log(error);
                }
              }}
            >
              자료올리기
            </p>
          </MPopupinner>
        </MPopupbox>
        // onClick={async () => {
        //   console.log(value);

        //   try {
        //     await dispatch(
        //       uploadNoticetAsync({
        //         programId: Number(programId),
        //         title: title,
        //         content: value,
        //       })
        //     );

        //     await dispatch(loadNoticeListAsync(Number(programId)));

        //     toast.success("게시글작성 성공");
        //     subtogglePopup();
        //   } catch (error) {
        //     console.error("에러 발생:", error);
        //   }
        // }}
      )}
    </div>
  );
};

const MaterialDetailPopup = () => {
  const [sisOpen, ssetIsOpen] = useState(true);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
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
                <p>정민창</p>
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

            {user_gb === "MENTEE" && (
              <div>
                <HorizonLine></HorizonLine>
                <a href="#" style={{ color: "#FF8E41" }}>
                  자료다운받기
                </a>
              </div>
            )}
          </MdetailPopupinner>
        </MdetailPopupbox>
      )}
    </div>
  );
};

const MaterialDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const { programId } = useParams();
  const materialList = useAppSelector(
    (state) => state.programMaterial.MaterialList
  );
  const dispatch = useAppDispatch();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtogglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  useEffect(() => {
    dispatch(loadMaterialAsync(Number(programId)));
    console.log(materialList);
  }, []);
  useEffect(() => {}, [materialList]);
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
          {user_gb === "MENTO" && (
            <div style={{ width: "100%", textAlign: "right" }}>
              <p
                style={{
                  color: "#07858C",
                  cursor: "pointer",
                }}
                onClick={togglePopup}
              >
                자료올리기 <FaPlus color="#07858C"></FaPlus>
              </p>
              {isOpen && <MaterialPopup />}
            </div>
          )}
        </Materialtext>

        {materialList &&
          materialList.map((value, index) => {
            return (
              <>
                <Materiallistbox>
                  <MaterialTotal>
                    <Materiallist>
                      <p>{value.title}</p>
                    </Materiallist>
                    <MaterialStudent></MaterialStudent>
                  </MaterialTotal>
                  <HorizonLine />
                  <p style={{ marginLeft: "1.5%" }}>{value.detail}</p>
                  <div>
                    {/* <a
                      href="#"
                      style={{
                        marginLeft: "93%",
                        color: "#07858C",
                      }}
                      onClick={subtogglePopup}
                    >
                      자세히보기
                    </a> */}
                    {sisOpen && <MaterialDetailPopup />}
                  </div>

                  <div style={{ marginTop: "0.5rem" }}>
                    <ButtonBox>
                      <ButtonStyle
                        style={{ width: "10rem", height: "1.5rem" }}
                        variant="contained"
                        color="primary"
                        onClick={() => {
                          if (value.materialId) handleFileDownload(value);
                        }}
                      >
                        자료 다운로드
                      </ButtonStyle>
                    </ButtonBox>
                  </div>
                </Materiallistbox>
              </>
            );
          })}
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
const ButtonBox = styled.div`
  width: 100%;
`;
const ButtonStyle = styled(Button)`
  float: right;
  margin-right: 1rem;
`;
export default MaterialDetail;
