import React, { useState } from "react";
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
import { useAppSelector } from "../../store/hooks";

const Main = () => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
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
                        backgroundColor:
                          user_gb === "MENTEE"
                            ? "rgba(255, 142, 65, 0.15)"
                            : "rgba(7, 133, 140, 0.15)",
                        color: "white",
                        // "& :focus": {
                        //   bgcolor: "red",
                        // },
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
                    backgroundColor:
                      user_gb === "MENTEE"
                        ? "rgba(255, 142, 65, 0.15)"
                        : "rgba(7, 133, 140, 0.15)",
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
              backgroundColor:
                user_gb === "MENTEE"
                  ? "rgba(255, 142, 65, 0.15)"
                  : "rgba(7, 133, 140, 0.15)",
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
          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <ImBooks
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>학습</p>
            </div>
            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>
                국어 | 수학 | 영어 | 탐구
                <br />
                제2국어 | 교과 | 과목
              </p>
              <p>[학습]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <FaBicycle
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>취미</p>
            </div>
            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>
                미술 | 음악 | 체육 <br />
                바둑 | 체스
              </p>
              <p>[취미]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <FaGraduationCap
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>전공</p>
            </div>

            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>
                마케팅 | 회계 | 컴퓨터언어
                <br />
                데이터분석 | 반도체
              </p>
              <p>[전공]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <ImUserTie
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>진로</p>
            </div>

            <div className="hoverAfter">
              <p></p>
              <p>[진로]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <ImProfile
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>자소서</p>
            </div>

            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>
                고교 , 대학 <br />
                진학 자소서 작성 및 첨삭
              </p>
              <p>[자소서]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <ImUsers
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>대학진학</p>
            </div>

            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>대학 진학 관련 면접 및 논술</p>
              <p>[대학진학]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <FaWarehouse
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>창업</p>
            </div>

            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>온라인 마켓 유통채널 입점</p>
              <p>[창업]</p>
            </div>
          </IconBox>

          <IconBox user_gb={user_gb}>
            <div className="hoverBefore">
              <ImNewspaper
                size="5rem"
                color={user_gb === "MENTEE" ? "#ff8e41" : "#07858c"}
              />
              <p>자격증</p>
            </div>

            <div className="hoverAfter">
              <p style={{ fontSize: "1rem" }}>컴활,정처기 | 토익,오픽</p>
              <p>[자격증]</p>
            </div>
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
const IconBox = styled.div<{ user_gb: string }>`
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
  color: ${(props) => (props.user_gb === "MENTEE" ? "#ff8e41" : "#07858c")};
  line-height: 2rem;
  font-size: 1.2rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.2);
  .hoverAfter {
    background-color: ${(props) =>
      props.user_gb === "MENTEE" ? "#ff8e41" : "#07858c"};
    color: white;
    display: none;
  }
  .hoverBefore {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover .hoverAfter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &:hover .hoverBefore {
    display: none;
  }
  &:hover {
    background-color: ${(props) =>
      props.user_gb === "MENTEE" ? "#ff8e41" : "#07858c"};
  }
`;
export default Main;
