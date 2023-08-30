import React, { useState } from "react";
import Modal from "react-modal";
import styled from "@emotion/styled";
import ClearIcon from "@mui/icons-material/Clear";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { alertModalChange } from "../../../slice/common/headerSlice";

const AlertModal = () => {
  const date = new Date();
  const dispatch = useAppDispatch();
  const alertModalState = useAppSelector((state) => state.header.alertModal);
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
    dispatch(alertModalChange({ value: false }));
  };
  return (
    <Modal
      isOpen={alertModalState}
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
          알림
        </div>

        <ClearIcon
          onClick={modalOff}
          sx={{ marginRight: "1.5rem", cursor: "pointer" }}
        />
      </ModalodalHeader>
      <ModalDate>
        <p>
          {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
        </p>
      </ModalDate>
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
export default AlertModal;
