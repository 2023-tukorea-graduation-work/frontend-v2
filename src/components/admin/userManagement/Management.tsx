import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  Input,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    accept: true;
    deny: true;
  }
}
const Management = () => {
  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const [btnSelect, setBtnSelect] = useState("TheWhole");
  const onChangeBtn = (event: React.MouseEvent<HTMLElement>, value: string) => {
    if (value == null) {
      return;
    }
    setBtnSelect(value);
  };
  return (
    <GrayBox>
      <Tite>USER Management</Tite>
      <ToggleButtonGroup
        sx={{ width: "100%" }}
        exclusive
        onChange={onChangeBtn}
        value={btnSelect}
      >
        <Custom value="TheWhole">
          <img alt="icon" src="img/whole.png" />
          <CustomWrite>
            <div>100</div>
            <p>전체/The Whole</p>
          </CustomWrite>
        </Custom>
        <Custom value="New">
          <img alt="icon" src="img/new.png" />
          <CustomWrite>
            <div>50</div>
            <p>신규등록/New</p>
          </CustomWrite>
        </Custom>
        <Custom value="Deny">
          <img alt="icon" src="img/deny.png" />
          <CustomWrite>
            <div>10</div>
            <div>거절/Deny</div>
          </CustomWrite>
        </Custom>
      </ToggleButtonGroup>
      <SearchBox>
        <FormControl>
          <Controller
            defaultValue=""
            control={control}
            name="capacity"
            rules={{ required: "인원은 필수선택입니다." }}
            render={({ field }) => (
              <Select
                disableUnderline
                {...field}
                sx={{
                  height: "30px",
                  width: "150%",
                  border: "solid 1px #d6d6d6",
                  boxShadow: "0",
                  paddingLeft: "20%",
                  fontSize: "0.8rem",
                  backgroundColor: "white",
                }}
                displayEmpty
                variant="standard"
              >
                <MenuItem
                  disabled
                  value=""
                  sx={{
                    display: "none",
                  }}
                >
                  <em>종류</em>
                </MenuItem>
                <MenuItem sx={{ fontSize: "0.8rem" }} value={1}>
                  날짜
                </MenuItem>
                <MenuItem sx={{ fontSize: "0.8rem" }} value={2}>
                  이름
                </MenuItem>
                <MenuItem sx={{ fontSize: "0.8rem" }} value={3}>
                  아이디
                </MenuItem>
                <MenuItem sx={{ fontSize: "0.8rem" }} value={4}>
                  년도
                </MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <Input
          sx={{
            height: "30px",
            width: "15rem",
            border: "solid 1px #d6d6d6",
            boxShadow: "0",
            fontSize: "0.8rem",
            backgroundColor: "white",
            marginLeft: "1.8rem",
            marginRight: "0.2rem",
          }}
          placeholder="검색 내용"
          disableUnderline={true}
        />
        <SearchIcon
          sx={{
            backgroundColor: "white",
            height: "28px",
            width: "1.5rem",
            borderRadius: "3px",
            border: "solid 1px #d6d6d6",
          }}
        />
      </SearchBox>
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
        <ACCEPTDENY>
          <DenyWithAcceptButton variant="contained" color="accept">
            ACCEPT
          </DenyWithAcceptButton>
          <DenyWithAcceptButton variant="contained" color="deny">
            DENY
          </DenyWithAcceptButton>
        </ACCEPTDENY>
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
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const Custom = styled(ToggleButton)`
  font-family: "NotoSansMedium";
  display: flex;
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
const CustomWrite = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.2rem;
  width: 9rem;
  justify-content: start;
  align-items: start;
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
const SearchBox = styled.div`
  height: 2.4rem;
  width: 26rem;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
const DenyWithAcceptButton = styled(Button)`
  width: 3rem;
  height: 2rem;
  font-family: "NotoSansBold";
  color: black !important;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;
export default Management;
