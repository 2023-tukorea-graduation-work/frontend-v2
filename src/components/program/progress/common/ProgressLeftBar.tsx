import React from "react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { indexChange } from "../../../../slice/common/leftBarSlice";
import {
  FaRegCheckCircle,
  FaUserCircle,
  FaRegWindowClose,
} from "react-icons/fa";

const LeftBar = () => {
  const dispatch = useAppDispatch();
  const selectIndex = useAppSelector((state) => state.leftBar.indexNumber);
  const barArray = [
    "전체게시판",
    "출석",
    "질문",
    "자료",
    "공지",
    "일정",
    "온라인강의",
  ];
  return (
    <Box>
      {barArray.map((val, idx) => {
        if (idx == selectIndex) {
          return (
            <SelectedTab
              key={idx}
              onClick={() => dispatch(indexChange({ value: idx }))}
            >
              {val}
            </SelectedTab>
          );
        }
        return (
          <Tab key={idx} onClick={() => dispatch(indexChange({ value: idx }))}>
            {val}
          </Tab>
        );
      })}
    </Box>
  );
};
const Box = styled.div`
  height: 83vh;
  width: 17%;
  border-radius: 25px;
  background-color: #f5f5f5;
  text-align: left;
  font-family: "NotoSansRegular";
  font-size: 1rem;
`;
const Tab = styled.div`
  height: 7%;
  margin-left: 20%;
  padding-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-top: 6%;
  cursor: pointer;
`;
const SelectedTab = styled.div`
  height: 7%;
  background-color: white;
  margin-left: 20%;
  padding-left: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  margin-top: 6%;
  font-family: "NotoSansBold";
  cursor: pointer;
`;

export default LeftBar;
