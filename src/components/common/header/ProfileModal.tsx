import React, { useState } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { profileModalChange } from "../../../slice/common/headerSlice";
import { useNavigate } from "react-router-dom";
const ProfileModal = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profileModalState = useAppSelector(
    (state) => state.header.profileModal
  );
  const customStyles = {
    overlay: {
      background: "rgba(125, 125, 125, 0.2)",
      backdropFilter: "blur(4px)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "25px",
      boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.15)",
      width: "23.813rem",
      height: "47.563rem",
      backgroundColor: "#f5f5f5",
      padding: "0",
    },
  };
  const modalOff = () => {
    dispatch(profileModalChange({ value: false }));
  };
  return (
    <Modal
      isOpen={profileModalState}
      style={customStyles}
      ariaHideApp={false}
      onRequestClose={modalOff}
      shouldCloseOnOverlayClick={true}
    >
      <ModalodalHeader>
        <div
          style={{
            marginLeft: "1.5rem",
            fontSize: "1.2rem",
            fontFamily: "NotoSansRegular",
          }}
        >
          프로필
        </div>

        <ClearIcon
          onClick={modalOff}
          sx={{ marginRight: "1.5rem", cursor: "pointer" }}
        />
      </ModalodalHeader>
      <ModalDate>
        <p>프로필</p>
      </ModalDate>
      <button
        onClick={() => {
          navigate("/profile");
          modalOff();
        }}
      >
        프로필보기
      </button>
      <button
        onClick={() => {
          navigate("/");
          modalOff();
        }}
      >
        로그아웃
      </button>
    </Modal>
  );
};
const ModalodalHeader = styled.div`
  display: flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
`;
const ModalDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
  height: 2rem;
  font-family: Inter;
  font-size: 0.5rem;
  color: #676767;
`;

export default ProfileModal;
