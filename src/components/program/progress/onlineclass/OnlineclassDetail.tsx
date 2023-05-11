import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  FaChalkboardTeacher,
  FaPlus,
  FaCircle,
  FaCaretSquareRight,
  FaRegWindowClose,
  FaUserCircle,
} from "react-icons/fa";
import { TextField, Checkbox, Input } from "@mui/material";

const OnlineclassFileUpload = () => {
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

const OnlinelivePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <OnlinelivePopupbox>
          <OnlinelivePopupinner>
            <OnlinelivePopupFrom>
              <OnlinelivePopupStudent>
                <FaChalkboardTeacher
                  size="20"
                  color="#777777"
                ></FaChalkboardTeacher>
                <p>화상통화방 생성하기</p>
              </OnlinelivePopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={togglePopup}
              ></FaRegWindowClose>
            </OnlinelivePopupFrom>
            <HorizonLine></HorizonLine>
            <Input
              placeholder="통화방이름"
              color="secondary"
              sx={{ width: "100%", height: "12%", border: "none" }}
            ></Input>
            <Input
              placeholder="참여인원수"
              color="secondary"
              sx={{
                width: "100%",
                height: "12%",
                border: "none",
                marginTop: "0.5rem",
              }}
            ></Input>
            <Input
              placeholder="시작예정시간"
              color="secondary"
              sx={{
                width: "100%",
                height: "12%",
                border: "none",
                marginTop: "0.5rem",
              }}
            ></Input>
            <Input
              placeholder="비밀번호"
              color="secondary"
              sx={{
                width: "100%",
                height: "12%",
                border: "none",
                marginTop: "0.5rem",
              }}
            ></Input>
            <Onlinelock>
              <Checkbox style={{ width: "1rem" }} color="secondary" />
              <p
                style={{
                  fontSize: "0.8rem",
                  lineHeight: "4rem",
                  marginLeft: "0.5rem",
                }}
              >
                잠금
              </p>
            </Onlinelock>
            <HorizonLine></HorizonLine>
            <p
              style={{
                color: "#07858C",
                cursor: "pointer",
                marginLeft: "37%",
                marginTop: "1.5rem",
              }}
            >
              화상통화방 생성하기
            </p>
          </OnlinelivePopupinner>
        </OnlinelivePopupbox>
      )}
    </div>
  );
};

const OnlineclassPopup = () => {
  const [classisOpen, classsetIsOpen] = useState(true);

  const classtogglePopup = () => {
    classsetIsOpen(!classisOpen);
  };
  return (
    <div>
      {classisOpen && (
        <OnlineclassPopupbox>
          <OnlineclassPopupinner>
            <OnlineclassPopupFrom>
              <OnlineclassPopupStudent>
                <FaCaretSquareRight
                  size="20"
                  color="#777777"
                ></FaCaretSquareRight>
                <p>녹화강의 올리기</p>
              </OnlineclassPopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={classtogglePopup}
              ></FaRegWindowClose>
            </OnlineclassPopupFrom>
            <HorizonLine></HorizonLine>
            <Input
              placeholder="강의제목입력"
              color="secondary"
              sx={{ width: "100%", height: "14%", border: "none" }}
            ></Input>
            <Input
              placeholder="강의내용입력"
              color="secondary"
              sx={{
                width: "100%",
                height: "45%",
                border: "none",
                marginBottom: "0.5rem",
              }}
            ></Input>
            <OnlineclassFileUpload></OnlineclassFileUpload>
            <HorizonLine></HorizonLine>
            <p
              style={{
                color: "#07858C",
                cursor: "pointer",
                marginLeft: "45%",
                marginTop: "1rem",
              }}
            >
              자료올리기
            </p>
          </OnlineclassPopupinner>
        </OnlineclassPopupbox>
      )}
    </div>
  );
};

const OnlineclassDetail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [classisOpen, classsetIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const classtogglePopup = () => {
    classsetIsOpen(!classisOpen);
  };
  return (
    <OnlineclassForm>
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        프로그램주제
      </p>
      <Onlineclassbox>
        <Onlinelivetext>
          <FaChalkboardTeacher size="20"></FaChalkboardTeacher>
          <p
            style={{
              marginLeft: "0.5rem",
              marginRight: "82%",
              lineHeight: "1.2rem",
            }}
          >
            실시간 강의
          </p>
          <div>
            <p
              style={{
                color: "#07858C",
                lineHeight: "1.2rem",
                cursor: "pointer",
              }}
              onClick={togglePopup}
            >
              화상통화방 생성하기
            </p>
            {isOpen && <OnlinelivePopup />}
          </div>
          <FaPlus color="#07858C"></FaPlus>
        </Onlinelivetext>
        <Onlinelivelistbox>
          <Onlinelivelist>
            <FaCircle></FaCircle>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                lineHeight: "1rem",
                marginRight: "3rem",
                marginLeft: "0.2rem",
              }}
            >
              REC
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              [1차시] 수학1 멘토링 강의
            </p>
            <Onlinelivelisttext>
              <p>시작예정시간: 2023.03.13 16:00</p>
              <p>참여인원 : 4</p>
              <p>비밀번호 : x</p>
            </Onlinelivelisttext>
          </Onlinelivelist>
        </Onlinelivelistbox>
        <Onlinelivelistbox>
          <Onlinelivelist>
            <FaCircle></FaCircle>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                lineHeight: "1rem",
                marginRight: "3rem",
                marginLeft: "0.2rem",
              }}
            >
              REC
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              [1차시] 수학1 멘토링 강의
            </p>
            <Onlinelivelisttext>
              <p>시작예정시간: 2023.03.13 16:00</p>
              <p>참여인원 : 4</p>
              <p>비밀번호 : x</p>
            </Onlinelivelisttext>
          </Onlinelivelist>
        </Onlinelivelistbox>
        <Onlinelivelistbox>
          <Onlinelivelist>
            <FaCircle></FaCircle>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                lineHeight: "1rem",
                marginRight: "3rem",
                marginLeft: "0.2rem",
              }}
            >
              REC
            </p>
            <p
              style={{
                fontSize: "0.9rem",
                fontWeight: "bold",
              }}
            >
              [1차시] 수학1 멘토링 강의
            </p>
            <Onlinelivelisttext>
              <p>시작예정시간: 2023.03.13 16:00</p>
              <p>참여인원 : 4</p>
              <p>비밀번호 : x</p>
            </Onlinelivelisttext>
          </Onlinelivelist>
        </Onlinelivelistbox>
        <Onlineclasstext>
          <FaCaretSquareRight size="20"></FaCaretSquareRight>
          <p
            style={{
              marginRight: "82%",
              lineHeight: "1.2rem",
            }}
          >
            온라인 강의목록
          </p>
          <div>
            <p
              style={{
                color: "#07858C",
                lineHeight: "1.2rem",
                cursor: "pointer",
              }}
              onClick={classtogglePopup}
            >
              녹화 강의 올리기
            </p>
            {classisOpen && <OnlineclassPopup />}
          </div>
          <FaPlus color="#07858C"></FaPlus>
        </Onlineclasstext>
        <Onlineclasslist>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
          <Onlineclasslistbox>
            <p style={{ marginBottom: "5.5rem" }}>영상 썸네일</p>
            <HorizonLine />
            <Listboxtext>
              <p
                style={{
                  fontSize: "0.7rem",
                  marginRight: "1rem",
                  marginTop: "0.3rem",
                }}
              >
                23.03.13
              </p>
              <p style={{ fontSize: "0.9rem" }}>1차시_멘토링주제</p>
            </Listboxtext>
          </Onlineclasslistbox>
        </Onlineclasslist>
      </Onlineclassbox>
    </OnlineclassForm>
  );
};
const OnlineclassForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Onlineclassbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.7rem;
`;
const Onlinelivetext = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2%;
  font-size: 0.9rem;
`;
const Onlinelivelistbox = styled.div`
  display: flex;
  flex-direction: colum;
  width: 100%;
  height: 6vh;
  background-color: #f5f5f5;
  border-radius: 15px;
  margin-bottom: 1%;
  box-shadow: 1px 1px 3px 1px #dadce0 inset;
`;
const Onlinelivelist = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 1.5rem;
  margin-top: 1.4rem;
`;
const Onlinelivelisttext = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.7rem;
  margin-left: 38.5%;
  width: 40%;
  line-height: 1.5rem;
  justify-content: space-between;
`;
const Onlineclasstext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2%;
  margin-top: 1.7rem;
  font-size: 0.9rem;
`;
const Onlineclasslist = styled.div`
  display: inline-flex;
  flex-direction: colum;
  flex-wrap: wrap;
  width: 100%;
  height: 40vh;
  background-color: #f5f5f5;
  border-radius: 15px;
`;
const Onlineclasslistbox = styled.div`
  width: 19%;
  height: 39%;
  margin-top: 1.3rem;
  margin-left: 4rem;
  box-shadow: 1px 1px 3px 1px #dadce0;
  border: 1px solid #d6d6d6;
  background-color: white;
  border-radius: 10px;
`;
const Listboxtext = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2.5rem;
  margin-top: 0.8rem;
`;
const OnlinelivePopupbox = styled.div`
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
const OnlinelivePopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 1rem;
`;
const OnlinelivePopupinner = styled.div`
  background-color: white;
  width: 25%;
  height: 44%;
  padding: 1rem;
  border-radius: 20px;
`;
const OnlinelivePopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 38%;
  margin-right: 59%;
  color: #777777;
`;
const Onlinelock = styled.div`
  display: flex;
  flex-direction: row;
`;
const OnlineclassPopupbox = styled.div`
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
const OnlineclassPopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 1rem;
`;
const OnlineclassPopupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 35%;
  padding: 1rem;
  border-radius: 20px;
`;
const OnlineclassPopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15%;
  margin-right: 82%;
  color: #777777;
`;
export default OnlineclassDetail;
