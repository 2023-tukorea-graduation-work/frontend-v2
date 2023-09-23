import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ToggleButton from "@mui/material/ToggleButton";
import "./Profile.css";
import { Button } from "@mui/material";
import { lineHeight } from "@mui/system";
import UserProfileProgram from "./UserProfileProgram";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useNavigate } from "react-router-dom";
import {
  loadProfileProgramListAsync,
  profileProgramList,
} from "../../../slice/user/profileSlice";
import { logOut } from "../../../slice/user/loginSlice";
const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const userId = useAppSelector((state) => state.login.object.USER_NO);
  const { profile } = useAppSelector((state) => state);
  const [btnSelect, setBtnSelect] = useState("ProgressBefore");
  const [test, setTest] = useState("");
  const onChangeBtn = (event: any) => {
    setBtnSelect(event.target.value);
  };
  useEffect(() => {
    dispatch(loadProfileProgramListAsync(userId));
  }, []);
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  useEffect(() => {
    console.log(btnSelect);
  }, [btnSelect]);
  return (
    <WhiteBox>
      <LeftNav></LeftNav>
      <MyProject>
        <div
          style={{
            fontFamily: "NotoSansBold",
            fontSize: "150%",
            marginTop: "4%",
            marginLeft: "2%",
            marginBottom: "2%",
          }}
        >
          M&nbsp;&nbsp;Y&nbsp;&nbsp;&nbsp;&nbsp;P&nbsp;&nbsp;R&nbsp;&nbsp;O&nbsp;&nbsp;J&nbsp;&nbsp;E&nbsp;&nbsp;C&nbsp;&nbsp;T
        </div>
        <ToggleButtonGroup>
          <Custom
            user_gb={user_gb}
            sx={{ width: "8.313rem", fontFamily: "NotoSansRegular" }}
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            onClick={(event: any) => onChangeBtn(event)}
            selected={"ProgressBefore" === btnSelect ? true : false}
            value="ProgressBefore"
          >
            진행예정
          </Custom>
          <Custom
            user_gb={user_gb}
            sx={{
              width: "11.813rem",
              marginLeft: "2%",
              fontFamily: "NotoSansRegular",
            }}
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            onClick={(event: any) => onChangeBtn(event)}
            selected={"Progressing" === btnSelect ? true : false}
            value="Progressing"
          >
            진행중 프로젝트
          </Custom>
          <Custom
            user_gb={user_gb}
            sx={{
              width: "10.375rem",
              marginLeft: "2%",
              fontFamily: "NotoSansRegular",
            }}
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            onClick={(event: any) => onChangeBtn(event)}
            selected={"ProgressEnd" === btnSelect ? true : false}
            value="ProgressEnd"
          >
            완료 프로젝트
          </Custom>
        </ToggleButtonGroup>
        <MyProjectList>
          {btnSelect === "ProgressBefore" ? (
            <>
              {profile.programRecruitList?.map(
                (value: profileProgramList, index: number) => (
                  <UserProfileProgram
                    props={value}
                    key={index}
                  ></UserProfileProgram>
                )
              )}
            </>
          ) : (
            <></>
          )}
          {btnSelect === "Progressing" ? (
            <>
              {profile.programOpenList?.map(
                (value: profileProgramList, index: number) => (
                  <UserProfileProgram
                    props={value}
                    key={index}
                  ></UserProfileProgram>
                )
              )}
            </>
          ) : (
            <></>
          )}
          {btnSelect === "ProgressEnd" ? (
            <>
              {profile.programCloseList?.map(
                (value: profileProgramList, index: number) => (
                  <UserProfileProgram
                    props={value}
                    key={index}
                  ></UserProfileProgram>
                )
              )}
            </>
          ) : (
            <></>
          )}
          {/* {((Array.isArray(profile.programList) &&
            profile.programList.length === 0) ||
            profile.programList === null) && (
            <>
              <div>프로젝트 리스트가 없습니다</div>
              <div>프로젝트 리스트가 없습니다</div>
              <div>프로젝트 리스트가 없습니다</div>
              <div>프로젝트 리스트가 없습니다</div>
            </>
          )} */}
        </MyProjectList>
      </MyProject>

      <YourProfile>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10%",
            marginBottom: "10%",
            marginRight: "30%",
          }}
        >
          <img
            referrerPolicy="no-referrer"
            src={profile.imgUrl ? profile.imgUrl : ""}
            alt="logo"
            style={{ width: "6rem", height: "8rem", objectFit: "fill" }}
          />
        </div>
        <div style={{ marginRight: "20%", lineHeight: "2rem" }}>
          <p style={{ fontSize: "0.8rem" }}>안녕하세요 {`${profile.name}`}님</p>          
          <p style={{ fontSize: "0.8rem" }}>이메일: {`${profile.email}`}</p>
        </div>
        {user_gb === "MENTEE" ? (
          <></>
        ) : (
          <>
            <Button
              variant="contained"
              color={user_gb === "MENTEE" ? "primary" : "secondary"}
              sx={{
                height: "2.5rem",
                width: "80%",
                marginTop: "2rem",
                boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
              onClick={() => {
                navigate("/programCreation");
              }}
            >
              멘토링 프로그램 생성하기+
            </Button>
          </>
        )}

        <Button
          variant="contained"
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
          sx={{
            height: "2.5rem",
            width: "80%",
            marginTop: "1rem",
            boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
        >
          개인정보 수정하기
        </Button>
      </YourProfile>
    </WhiteBox>
  );
};

const WhiteBox = styled.div`
  display: flex;
  height: 87vh;
  width: 100%;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  border-top-right-radius: 4rem;
`;
const LeftNav = styled.div`
  height: 100%;
  width: 10%;
`;
const MyProject = styled.div`
  height: 100%;
  background-color: rgba(7, 133, 140, 0.1);
  width: 65%;
  overflow: auto;
  overflow-x: hidden;
`;
const ToggleButtonGroup = styled.div`
  display: flex;
  width: 100%;
  margin-left: 2%;
  height: 4.5%;
  font-size: 100%;
`;
const MyProjectList = styled.div`
  margin-left: 2%;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;
const YourProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 25%;
  align-items: center;
  font-family: NotoSansRegular;
`;
const ImageStyle = styled.div`
  height: 3rem;
  width: 3rem;
  border: 3px solid #d9d9d9;
  border-radius: 50%;
  object-fit: fill;
`;
const Custom = styled(ToggleButton)<{ user_gb: string }>`
  &.MuiToggleButton-root {
    background-color: #ebebeb !important;
    border-radius: 10px !important;
    color: #777777 !important;
    border: 0 !important;
    font-size: 1rem !important;
    height: 2.438rem !important;
  }
  &.Mui-selected {
    background-color: #fff !important;
    color: ${(props) => (props.user_gb === "MENTEE" ? "#ff6900" : "#07858C")};
  }
`;
export default Profile;
