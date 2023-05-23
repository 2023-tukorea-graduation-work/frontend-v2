import React from "react";
import styled from "@emotion/styled";
import { FaCircle, FaDoorOpen } from "react-icons/fa";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdMic, MdScreenShare } from "react-icons/md";

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid #d6d6d6",
        lineHeight: "0.1em",
        margin: "8px 0 10px",
      }}
    ></div>
  );
};

const OnlineLive = () => {
  return (
    <OnlineLiveForm>
      <Onlineshare>
        <Shareinfo>
          <Shareinfotitle>
            <FaCircle size="15"></FaCircle>{" "}
            <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}> REC</p>
            <p
              style={{
                marginLeft: "1rem",
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              [1차시] 멘토링 주제
            </p>
          </Shareinfotitle>
          <Shareinfodate>
            <p>날짜: 2023.05.12</p>
          </Shareinfodate>
        </Shareinfo>
        <Sharecamera></Sharecamera>
        <Sharecamerelse>
          <Elselist></Elselist>
          <Elselist></Elselist>
          <Elselist></Elselist>
          <Elselist></Elselist>
        </Sharecamerelse>
      </Onlineshare>
      <Onlinestudent>
        <Onlinetitle>
          <FaDoorOpen size="25" style={{ color: "#777777" }}></FaDoorOpen>
          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            회의가 종료되면 자동으로 녹화본 저장
          </p>
          <p style={{ fontSize: "0.8rem" }}>
            줌 같은경우, 녹화파일을 mp4로 변환하여 사용자지정 경로에 저장됨
          </p>
        </Onlinetitle>
        <Menteecamera>
          <Menteeimage></Menteeimage>
          <Menteeicon>
            <MdScreenShare size="25"></MdScreenShare>
            <MdMic size="25"></MdMic>
            <GoDeviceCameraVideo size="25"></GoDeviceCameraVideo>
          </Menteeicon>
        </Menteecamera>
        <HorizonLine />
        <Participantnumber>
          <p>Participant</p>
          <p>4</p>
        </Participantnumber>
        <MentorName>
          <Participantname>
            <MdScreenShare style={{ marginRight: "0.5rem" }}></MdScreenShare>
            <p>멘토이름</p>
          </Participantname>
          <Participanticon>
            <MdMic style={{ marginRight: "0.5rem" }}></MdMic>
            <GoDeviceCameraVideo></GoDeviceCameraVideo>
          </Participanticon>
        </MentorName>
        <MenteeName>
          <Participantname>
            <p>멘토이름</p>
          </Participantname>
          <Participanticon>
            <MdMic style={{ marginRight: "0.5rem" }}></MdMic>
            <GoDeviceCameraVideo></GoDeviceCameraVideo>
          </Participanticon>
        </MenteeName>
      </Onlinestudent>
    </OnlineLiveForm>
  );
};
const OnlineLiveForm = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 83vh;
`;
const Onlineshare = styled.div`
  width: 70%;
  height: 83vh;
`;

const Shareinfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
  background-color: #f5f5f5;
  border-radius: 15px;
  margin-bottom: 0.5rem;
`;
const Shareinfotitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;
  margin-left: 1rem;
`;
const Shareinfodate = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.7rem;
  margin-right: 1rem;
  font-size: 0.8rem;
`;
const Sharecamera = styled.div`
  width: 100%;
  height: 49vh;
  border: 1px solid #777777;
  border-radius: 15px;
  margin-bottom: 0.5rem;
`;
const Sharecamerelse = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 25vh;
  background-color: #f5f5f5;
  border-radius: 15px;
`;
const Elselist = styled.div`
  width: 20%;
  height: 18vh;
  border-radius: 10px;
  background-color: white;
`;
const Onlinestudent = styled.div`
  display: flex;
  flex-direction: column;
  width: 27%;
  height: 83vh;
  margin-left: 0.5rem;
  background-color: #f5f5f5;
  border-radius: 15px;
`;
const Onlinetitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: 1rem;
`;
const Menteecamera = styled.div`
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
`;
const Menteeimage = styled.div`
  width: 86%;
  height: 25vh;
  margin-left: 1.5rem;
  border: 1px solid #777777;
  border-radius: 15px;
  margin-bottom: 1rem;
`;
const Menteeicon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
`;
const Participantnumber = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  color: #777777;
`;
const MentorName = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
  justify-content: space-between;
  color: #777777;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;
const Participanticon = styled.div`
  display: flex;
  flex-direction: row;
`;
const Participantname = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenteeName = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 2.3rem;
  justify-content: space-between;
  color: #777777;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;
export default OnlineLive;
