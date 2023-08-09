import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaPlus } from "react-icons/fa";
import { loadNoticeListAsync } from "../../../../slice/program/programProgressNoticeSlice";
import { useAppDispatch } from "../../../../store/hooks";
import { useAppSelector } from "../../../../store/hooks";
import NoticeSubmitPopup from "./NoticePopup/ NoticeSubmitPopup";
import NoticePopup from "./NoticePopup/NoticeContentPopup";
<<<<<<< HEAD
import { useParams } from "react-router-dom";

=======
import NoticeSubmitPopup from "./NoticePopup/ NoticeSubmitPopup";
import NoticePopup from "./NoticePopup/NoticeContentPopup";

>>>>>>> ba12192346d80cd784abf039757a6f90ac284b0d
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

const NoticeDetail = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [sisOpen, ssetIsOpen] = useState(false);
  const { params } = useParams();
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const subtooglePopup = () => {
    ssetIsOpen(!sisOpen);
  };
  useEffect(() => {
    dispatch(loadNoticeListAsync(Number(params)));
  }, [isOpen]);
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
          <Noticetextinfo>
            <p style={{ fontSize: "0.9rem" }}>날짜 :</p>
            <p>2022.02.31</p>
            <p>진행차시 : 1차시 / 9차시</p>
            <p>프로그램기간 : 2022.02.01 ~ 2022.09.21</p>
          </Noticetextinfo>
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
        <Noticelistbox>
          <NoticeTotal>
            <Noticelist>
              <p>공지제목</p>
            </Noticelist>
            <NoticeStudent>
              <p>박서영</p>
              <p>
                <FaUserCircle></FaUserCircle>
              </p>
              <p>2023.03.15</p>
            </NoticeStudent>
          </NoticeTotal>
          <HorizonLine />
          <p style={{ marginLeft: "1.5%" }}>공지내용</p>
          {user_gb === "MENTO" && (
            <div>
              <div>
                <a
                  href="#"
                  style={{
                    marginLeft: "93%",
                    color: "#07858C",
                  }}
                  onClick={togglePopup}
                >
                  자세히보기
                </a>
                {isOpen && <NoticePopup />}
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
            </div>
          )}
          {user_gb === "MENTEE" && (
            <div>
              <a
                href="#"
                style={{
                  marginLeft: "93%",
                  color: "#FF8E41",
                }}
                onClick={togglePopup}
              >
                자세히보기
              </a>
              {isOpen && <NoticePopup />}
            </div>
          )}
        </Noticelistbox>
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

export default NoticeDetail;
