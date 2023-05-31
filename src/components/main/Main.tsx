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
import { FormControl, Input, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Main = () => {
  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  return (
    <>
      <MainBox>
        <Title>HLLO STUTINO</Title>
        <SubTitle>
          나와 가까운 곳에서 진행하는 멘토링을 찾아 수업을 받아보세요!
        </SubTitle>
        <SearchArea>
          <FormControl>
            <Controller
              defaultValue=""
              control={control}
              name="capacity"
              rules={{ required: "옵션은 필수선택입니다." }}
              render={({ field }) => (
                <Select
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        bgcolor: "rgba(7, 133, 140, 0.10)",
                        color: "white",
                        "& :focus": {
                          bgcolor: "red",
                        },
                      },
                    },
                  }}
                  disableUnderline
                  {...field}
                  sx={{
                    height: "3rem",
                    width: "12rem",
                    boxShadow: "0",
                    paddingLeft: "20%",
                    border: "solid 1px rgba(7, 133, 140, 0.05)",
                    fontSize: "1.2rem",
                    backgroundColor: "rgba(7, 133, 140, 0.15)",
                    color: "white",
                    borderRadius: "50px",
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
                    <em>지역</em>
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
              height: "3rem",
              width: "40rem",
              border: "solid 1px rgba(7, 133, 140, 0.05)",
              boxShadow: "0",
              paddingLeft: "2%",
              paddingRight: "2%",
              fontSize: "1.2rem",
              backgroundColor: "rgba(7, 133, 140, 0.15)",
              marginLeft: "0.5rem",
              marginRight: "0.2rem",
              color: "white",
              borderRadius: "50px",
            }}
            placeholder="SEARCH"
            disableUnderline={true}
          />
        </SearchArea>

        <IconList>
          <IconBox>
            <ImBooks size="5rem" color="#07858c" />
            <p>학습</p>
          </IconBox>

          <IconBox>
            <FaBicycle size="5rem" color="#07858c" />
            <p>취미</p>
          </IconBox>

          <IconBox>
            <FaGraduationCap size="5rem" color="#07858c" />
            <p>전공</p>
          </IconBox>

          <IconBox>
            <ImUserTie size="5rem" color="#07858c" />
            <p>진로</p>
          </IconBox>

          <IconBox>
            <ImProfile size="5rem" color="#07858c" />
            <p>자소서</p>
          </IconBox>

          <IconBox>
            <ImUsers size="5rem" color="#07858c" />
            <p>대학진학</p>
          </IconBox>

          <IconBox>
            <FaWarehouse size="5rem" color="#07858c" />
            <p>창업</p>
          </IconBox>

          <IconBox>
            <ImNewspaper size="5rem" color="#07858c" />
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
const Title = styled.p`
  margin-top: 5rem;
  font-family: "NotoSansMedium";
  color: white;
  font-size: 2.5rem;
  line-height: 4rem;
`;
const SubTitle = styled.p`
  font-family: "NotoSansLight";
  color: white;
`;
const SearchArea = styled.div`
  margin-top: 3rem;
  margin-bottom: 7rem;
`;
const IconList = styled.div`
  width: 80rem;
  height: 30rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 12rem;
  height: 11rem;
  background-color: #f3f3f3;
  margin-left: 7rem;
  margin-top: 1rem;
  border-radius: 0px 30px 0px 0px;
  justify-content: center;
  align-items: center;
  color: #07858c;
  line-height: 2rem;
  font-size: 1.5rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
`;

export default Main;
