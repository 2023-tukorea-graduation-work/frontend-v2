import React from "react";
import styled from "@emotion/styled";
import { FaBicycle, FaGraduationCap, FaWarehouse } from "react-icons/fa";
import {
  ImBooks,
  ImNewspaper,
  ImProfile,
  ImUserTie,
  ImUsers,
} from "react-icons/im";

const Main = () => {
  return (
    <>
      <MainBox>
        <div>Logo</div>
        <IconList>
          <IconBox>
            <ImBooks size="3rem" color="2E365E" />
            <p>학습</p>
          </IconBox>
          <Line />
          <IconBox>
            <FaBicycle size="3rem" color="2E365E" />
            <p>취미</p>
          </IconBox>
          <Line />
          <IconBox>
            <FaGraduationCap size="3rem" color="2E365E" />
            <p>전공</p>
          </IconBox>
          <Line />
          <IconBox>
            <ImUserTie size="3rem" color="2E365E" />
            <p>진로</p>
          </IconBox>
          <Line />
          <IconBox>
            <ImProfile size="3rem" color="2E365E" />
            <p>자소서</p>
          </IconBox>
          <Line />
          <IconBox>
            <ImUsers size="3rem" color="2E365E" />
            <p>대학진학</p>
          </IconBox>
          <Line />
          <IconBox>
            <FaWarehouse size="3rem" color="2E365E" />
            <p>창업</p>
          </IconBox>
          <Line />
          <IconBox>
            <ImNewspaper size="3rem" color="2E365E" />
            <p>자격증</p>
          </IconBox>
        </IconList>
      </MainBox>
    </>
  );
};
const MainBox = styled.div`
  height: 100%;
  witdh: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IconList = styled.div`
  width: 77.875rem;
  height: 10.813rem;
  transform: translate(0, 14rem);
  border-radius: 15px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #f0f0f0;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2.5rem;
  font-size: 1rem;
  font-family: "NotoSansMedium";
`;
const Line = styled.div`
  width: 0.06rem;
  height: 4rem;
  background-color: #aaaaaa;
  border-radius: 10rem;
`;
export default Main;
