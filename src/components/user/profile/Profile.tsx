import React from "react";
import styled from "@emotion/styled";
import ToggleButton from "@mui/material/ToggleButton";
import "./MyPage.css";
import MyProjectPreview from "./MyProjectPreview";
import { Button } from "@mui/material";
import { lineHeight } from "@mui/system";

const Profile = () => {
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
          <ToggleButton
            sx={{ width: "8.313rem" }}
            color="primary"
            value="ProgressBefore"
            selected={true}
          >
            진행예정
          </ToggleButton>
          <ToggleButton
            sx={{ width: "11.813rem", marginLeft: "2%" }}
            color="primary"
            value="Progressing"
          >
            진행중 프로젝트
          </ToggleButton>
          <ToggleButton
            sx={{ width: "10.375rem", marginLeft: "2%" }}
            color="primary"
            value="ProgressEnd"
          >
            완료 프로젝트
          </ToggleButton>
        </ToggleButtonGroup>
        <MyProjectList>
          <MyProjectPreview></MyProjectPreview>
          <MyProjectPreview></MyProjectPreview>
          <MyProjectPreview></MyProjectPreview>
          <MyProjectPreview></MyProjectPreview>
          <MyProjectPreview></MyProjectPreview>
          <MyProjectPreview></MyProjectPreview>
          <MyProjectPreview></MyProjectPreview>
        </MyProjectList>
      </MyProject>

      <YourProfile>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10%",
            marginBottom: "10%",
            marginRight: "30%",
          }}
        >
          <ImageStyle>
            <img
              src="/images/Man.jpg"
              alt="logo"
              style={{ width: "3rem", height: "3rem", objectFit: "fill" }}
            />
          </ImageStyle>
          &nbsp;&nbsp;&nbsp;YOUR PROFILE
        </div>
        <div style={{ marginRight: "60%", lineHeight: "2rem" }}>
          <p>NAME</p>
          <p>AGE</p>
          <p>EMAIL</p>
          <p>ADDRESS</p>
        </div>
        <div style={{ marginLeft: "60%", color: "#777777" }}>LOGOUT</div>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            height: "2.5rem",
            width: "80%",
            marginTop: "2rem",
            boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
        >
          프로젝트 생성하기+
        </Button>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            height: "2.5rem",
            width: "80%",
            marginTop: "1rem",
            boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
          }}
        >
          개인정부 수정하기
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
  background-color: rgba(255, 199, 160, 0.3);
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

export default Profile;