import React, { useState } from "react";
import styled from "@emotion/styled";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
const Management = () => {
  const [btnSelect, setBtnSelect] = useState("TheWhole");
  const onChangeBtn = (event: any) => {
    setBtnSelect(event.target.value);
  };
  return (
    <GrayBox>
      <Tite>USER Management</Tite>
      <ToggleButtonGroup>
        <Custom
          sx={{ fontFamily: "NotoSansRegular" }}
          onClick={(event: any) => onChangeBtn(event)}
          selected={"TheWhole" === btnSelect ? true : false}
          value="TheWhole"
        >
          숫자
        </Custom>
        <Custom
          sx={{
            fontFamily: "NotoSansRegular",
          }}
          onClick={(event: any) => onChangeBtn(event)}
          selected={"New" === btnSelect ? true : false}
          value="New"
        >
          진행중 프로젝트
        </Custom>
        <Custom
          sx={{
            fontFamily: "NotoSansRegular",
          }}
          onClick={(event: any) => onChangeBtn(event)}
          selected={"Deny" === btnSelect ? true : false}
          value="Deny"
        >
          완료 프로젝트
        </Custom>
      </ToggleButtonGroup>
      <ListTitle>
        <DATE>DATE</DATE>
        <ID>ID</ID>
        <NAME>NAME</NAME>
        <YEARBIRTH>YEAR BIRTH</YEARBIRTH>
        <SCHOOL>SCHOOL</SCHOOL>
        <STYLE>STYLE</STYLE>
        <CERTIFICATE>CERTIFICATE</CERTIFICATE>
        <ACCEPTDENY>ACCEPT/DENY</ACCEPTDENY>
      </ListTitle>
      <List>
        <DATE>2023.03.03</DATE>
        <ID>IDIDIDIDIDIDIDID</ID>
        <NAME>홍길동</NAME>
        <YEARBIRTH>3000</YEARBIRTH>
        <SCHOOL>한국공학대학교/IT경영학과</SCHOOL>
        <STYLE>온라인&오프라인 병행</STYLE>
        <CERTIFICATE>재학증명서_홍길동.PDF</CERTIFICATE>
        <ACCEPTDENY>ACCEPT/DENYACCEPT</ACCEPTDENY>
      </List>
    </GrayBox>
  );
};
const GrayBox = styled.div`
  height: 100%;
  width: 90rem;
  float: right;
  background-color: rgba(7, 133, 140, 0.1);
  border-top-right-radius: 4rem;
  padding-left: 2rem;
`;
const Tite = styled.p`
  font-family: NotoSansBold;
  font-size: 1.5rem;
`;
const Custom = styled(ToggleButton)`
  &.MuiToggleButton-root {
    width: 16.063rem;
    height: 6.25rem;
    border: 0 !important;
    border-radius: 0;
    border-top-right-radius: 2rem !important;
    font-size: 1rem !important;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.07) !important;
    margin-right: 4rem;
    background-color: #fff !important;
  }
  &.Mui-selected {
    border: solid 3px #0070a3 !important;
  }
`;
const ListTitle = styled.div`
  width: 88rem;
  height: 2.875rem;
  border-radius: 5px;
  background-color: rgba(131, 194, 197, 0.5);
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  font-family: "NotoSansBold";
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
`;
const List = styled.div`
  margin-top: 1rem;
  width: 88rem;
  height: 2.875rem;
  border-radius: 5px;
  background-color: #f9f9f9;
  display: flex;
  align-items: center;
  text-align: center;
  font-family: NotoSansMedium;
  font-size: 1rem;
`;
const ID = styled.p`
  width: 10rem;
`;
const DATE = styled.p`
  width: 10rem;
`;
const NAME = styled.p`
  width: 6rem;
`;
const YEARBIRTH = styled.p`
  width: 6rem;
`;
const SCHOOL = styled.p`
  width: 17rem;
`;

const STYLE = styled.p`
  width: 10rem;
`;
const CERTIFICATE = styled.p`
  width: 17rem;
`;
const ACCEPTDENY = styled.p`
  width: 10rem;
`;
export default Management;
