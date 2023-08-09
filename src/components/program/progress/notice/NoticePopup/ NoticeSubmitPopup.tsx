import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaRegWindowClose } from "react-icons/fa";
import NoticeEditorForm from "../NoticeEditorForm";

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
export default NoticeSubmitPopup;
