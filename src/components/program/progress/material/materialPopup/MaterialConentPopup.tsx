import React, { useState } from "react";
import styled from "@emotion/styled";
import { useAppSelector } from "../../../../../store/hooks";
import { FaUserCircle, FaRegWindowClose } from "react-icons/fa";

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
export default MaterialDetailPopup;
