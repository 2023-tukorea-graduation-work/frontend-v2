import React from "react";
import styled from "@emotion/styled";
import { useAppDispatch } from "../../../store/hooks";
import { changeUserGB } from "../../../slice/user/loginSlice";

const UserType = (props: any) => {
  const dispatch = useAppDispatch();
  return (
    <BasicForm>
      <HellowStyle>환형합니다. 멘토/멘티를 선택해주세요</HellowStyle>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "50%",
          justifyContent: "center",
        }}
      >
        <Test
          onClick={() => {
            dispatch(changeUserGB("MENTO"));
            props.isMento();
            props.increaseStep();
          }}
        >
          <ImageStyle>
            <img
              src="/img/mento.png"
              alt="logo"
              style={{ height: "24vh", objectFit: "contain" }}
            />
          </ImageStyle>

          <Testbox2>멘토</Testbox2>
        </Test>
        <Test
          onClick={() => {
            dispatch(changeUserGB("MENTEE"));
            props.increaseStep();
          }}
          style={{ marginLeft: "5rem" }}
        >
          <ImageStyle>
            <img
              src="/img/mentee.png"
              alt="logo"
              style={{ height: "24vh", objectFit: "contain" }}
            />
          </ImageStyle>

          <Testbox>멘티</Testbox>
        </Test>
      </div>
    </BasicForm>
  );
};

const ImageStyle = styled.div`
  height: calc();
  width: 100%;
  object-fit: contain;
`;
const BasicForm = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: start;
`;
const HellowStyle = styled.div`
  margin-bottom: 7%;
  font-family: "NotoSansMedium";
  font-size: 1rem;
  color: #000;
  font-weight: normal;
`;
const Test = styled.div`
  width: 35%;
  height: 80%;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;
  border-top-right-radius: 4rem;
  cursor: pointer;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
`;
const Testbox = styled.div`
  width: 100%;
  height: 30%;
  background-color: #ffb07a;
  color: #ffffff;
  line-height: 10vh;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
`;
const Testbox2 = styled.div`
  width: 100%;
  height: 30%;
  background-color: #83c2c5;
  color: #ffffff;
  line-height: 10vh;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
`;

export default UserType;
