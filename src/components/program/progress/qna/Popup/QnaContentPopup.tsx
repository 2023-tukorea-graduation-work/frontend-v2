import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaUserCircle, FaRegWindowClose } from "react-icons/fa";
const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 20px",
      }}
    ></div>
  );
};

const Popup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <Popupbox>
          <Popupinner>
            <PopupFrom>
              <PopupStudent>
                <FaUserCircle size="20" color="#777777"></FaUserCircle>
                <p>박서영</p>
                <p style={{ fontSize: "0.6rem" }}>2023.03.15</p>
              </PopupStudent>
              <FaRegWindowClose
                cursor="pointer"
                size="20"
                color="#777777"
                onClick={togglePopup}
              ></FaRegWindowClose>
            </PopupFrom>
            <HorizonLine></HorizonLine>
            <p>질문제목</p>
            <p
              style={{
                marginTop: "0.5rem",
                marginLeft: "1rem",
                marginBottom: "6rem",
              }}
            >
              질문내용
            </p>
            <HorizonLine></HorizonLine>
            <p>질문답변</p>
          </Popupinner>
        </Popupbox>
      )}
    </div>
  );
};
const Popupbox = styled.div`
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
const PopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 0.8rem;
`;
const Popupinner = styled.div`
  background-color: white;
  width: 50%;
  height: 60%;
  padding: 1rem;
  border-radius: 20px;
`;
const PopupStudent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 13%;
  margin-right: 84%;
  color: #777777;
`;
export default Popup;
