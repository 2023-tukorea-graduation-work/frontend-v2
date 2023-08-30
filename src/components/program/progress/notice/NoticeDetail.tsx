import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaRegWindowClose, FaPlus } from "react-icons/fa";
import NoticeEditorForm from "./NoticeEditorForm";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadNoticeListAsync } from "../../../../slice/program/programProgressNoticeSlice";
import { useAppDispatch } from "../../../../store/hooks";
import { useAppSelector } from "../../../../store/hooks";
import { useParams } from "react-router-dom";
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

const NoticeSubmitPopup = () => {
  const [sisOpen, ssetIsOpen] = useState(true);
  const subtogglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  return (
    <div>
      {sisOpen && (
        <NSubmitPopupbox>
          <NSubmitPopupinner>
            <FaRegWindowClose
              size="15"
              style={{ marginLeft: "99%" }}
              cursor="pointer"
              onClick={subtogglePopup}
            ></FaRegWindowClose>
            <NoticeEditorForm
              subtogglePopup={subtogglePopup}
            ></NoticeEditorForm>
          </NSubmitPopupinner>
        </NSubmitPopupbox>
      )}
    </div>
  );
};

const NoticePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <NPopupbox>
          <NPopupinner>
            <NPopupFrom>
              <NPopupStudent>
                <FaUserCircle size="20" color="#777777"></FaUserCircle>
                <p>박서영</p>
                <p style={{ fontSize: "0.6rem" }}>2023.03.15</p>
              </NPopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={togglePopup}
              ></FaRegWindowClose>
            </NPopupFrom>
            <HorizonLine></HorizonLine>
            <p style={{ marginTop: "1rem" }}>공지123제목</p>
            <p
              style={{
                marginTop: "1rem",
                marginLeft: "1rem",
                marginBottom: "6rem",
              }}
            >
              공지내용
            </p>
          </NPopupinner>
        </NPopupbox>
      )}
    </div>
  );
};

const NoticeDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const dispatch = useAppDispatch();
  const noticeList = useAppSelector((state) => state.programNotice.list);
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const { programId } = useParams();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtooglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  useEffect(() => {
    console.log(programId);
    dispatch(loadNoticeListAsync(Number(programId)));
  }, [isOpen]);
  useEffect(() => {
    console.log(programId);
    dispatch(loadNoticeListAsync(Number(programId)));
  }, [sisOpen]);
  useEffect(() => {}, [noticeList]);
  return (
    <NoticeForm>
      <p
        style={{
          marginTop: "2rem",
          fontSize: "1.1rem",
          fontWeight: "bold",
        }}
      >
        공지
      </p>
      <Noticebox>
        <Noticetext>
          <Noticetextinfo></Noticetextinfo>
          {user_gb === "MENTO" && (
            <div>
              <p
                style={{
                  color: "#07858C",
                  cursor: "pointer",
                }}
                onClick={subtooglePopup}
              >
                공지올리기 <FaPlus color="#07858C"></FaPlus>
              </p>
              {sisOpen && <NoticeSubmitPopup />}
            </div>
          )}
        </Noticetext>
        {noticeList.map((value, index) => (
          <Noticelistbox key={index}>
            <NoticeTotal>
              <Noticelist>
                <p>{value.title}</p>
              </Noticelist>
              <NoticeStudent>
                <p>홍길동</p>
                <p>
                  <FaUserCircle></FaUserCircle>
                </p>
                <p>2023.08.30</p>
              </NoticeStudent>
            </NoticeTotal>
            <HorizonLine />
            <p style={{ marginLeft: "1.5%" }}>{value.content}</p>
            {user_gb === "MENTO" && (
              <div>
                <div>{isOpen && <NoticePopup />}</div>
                <div style={{ marginTop: "0.5rem" }}></div>
              </div>
            )}
            {user_gb === "MENTEE" && <div>{isOpen && <NoticePopup />}</div>}
          </Noticelistbox>
        ))}
      </Noticebox>
    </NoticeForm>
  );
};
const NoticeForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Noticetext = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2%;
  font-size: 0.9rem;
`;
const Noticebox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.7rem;
`;
const Noticelistbox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 14vh;
  background-color: #f5f5f5;
  border-radius: 20px;
  margin-bottom: 2%;
  font-size: 0.8rem;
`;
const Noticelist = styled.div`
  margin-left: 1.5%;
  margin-top: 1.5%;
  width: 15%;
`;
const NoticeStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 11%;
  margin-left: 71%;
  margin-top: 2%;
`;
const NoticeTotal = styled.div`
  display: flex;
  flex-direction: row;
`;
const Noticetextinfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
`;
const NPopupbox = styled.div`
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
const NPopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
const NPopupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 50%;
  padding: 1rem;
  border-radius: 20px;
`;
const NPopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 13%;
  margin-right: 84%;
  color: #777777;
`;
const NSubmitPopupbox = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  width: 74%;
  height: 75%;
  margin-top: 4%;
  margin-left: 21%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NSubmitPopupinner = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
`;
export default NoticeDetail;
