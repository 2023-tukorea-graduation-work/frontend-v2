import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { indexChange } from "../../../../slice/common/leftBarSlice";
import {
  FaUserCheck,
  FaRegCommentDots,
  FaBorderAll,
  FaFileAlt,
  FaBullhorn,
  FaChalkboardTeacher,
  FaRegCalendarAlt,
  FaEdit,
} from "react-icons/fa";

const ProgressLeftBar = () => {
  const dispatch = useAppDispatch();
  const selectIndex = useAppSelector((state) => state.leftBar.indexNumber);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 1300);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const barArray = [
    "전체게시판",
    "출석",
    "질문",
    "자료",
    "공지",
    "일정",
    "온라인강의",
    "과제/시험",
  ];
  const iconArray = [
    <FaBorderAll size="20" />,
    <FaUserCheck size="20" />,
    <FaRegCommentDots size="20" />,
    <FaFileAlt size="20" />,
    <FaBullhorn size="20" />,
    <FaRegCalendarAlt size="20" />,
    <FaChalkboardTeacher size="20" />,
    <FaEdit />,
  ];

  const menuArray = isSmallScreen ? iconArray : barArray;

  return (
    <Box>
      {menuArray.map((val, idx) => {
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

const Nav = styled.div``;
const Meunlist = styled.div``;
export default ProgressLeftBar;
