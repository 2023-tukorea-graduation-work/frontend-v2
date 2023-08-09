import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import MaterialPopup from "./materialPopup/MaterialSubmitPopup";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import materialForm from "../../../../slice/program/programProgressMaterial";
import {
  // downloadMaterialAsync,
  loadMaterialAsync,
} from "../../../../slice/program/programProgressMaterial";
import MaterialDetailPopup from "./materialPopup/MaterialConentPopup";

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
  fetch(value.filepath
    , {method: 'GET'})
      .then(res => {
        return res.blob();
      })
      .then(blob => {
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'file1.pdf';
        document.body.appendChild(a); 
        a.click();  
        window.URL.revokeObjectURL(url);
        a.remove(); 
      })
      .catch(err => {
        console.error('err: ', err);
      })
}

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
    dispatch(loadMaterialAsync());
    console.log(materialList);
  }, []);
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
          {user_gb === "MENTO" && (
            <div>
              <p
                style={{ color: "#07858C", cursor: "pointer" }}
                onClick={togglePopup}
              >
                자료올리기 <FaPlus color="#07858C"></FaPlus>
              </p>
              {isOpen && <MaterialPopup />}
            </div>
          )}
        </Materialtext>
        <div>11111111111111111</div>
        {materialList &&
          materialList.map((value, index) => {
            return (
              <>
                <Materiallistbox>
                  <MaterialTotal>
                    <Materiallist>
                      <p>{value.title}</p>
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
                  <p style={{ marginLeft: "1.5%" }}>{value.detail}</p>
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
                    <button
                      onClick={() => {
                        if (value.materialId)
                          handleFileDownload(value);
                      }}
                    >
                      다운로드
                    </button>
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

export default MaterialDetail;
