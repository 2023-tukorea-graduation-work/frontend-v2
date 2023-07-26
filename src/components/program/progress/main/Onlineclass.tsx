import styled from "@emotion/styled";
import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useAppSelector } from "../../../../store/hooks";

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

const Onlineclass = (props: any) => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  return (
    <OnlineclassForm>
      <Onlineclasstitle>
        <FaChalkboardTeacher size="22"></FaChalkboardTeacher>
        <p style={{ lineHeight: "1.5rem", marginLeft: "0.5rem" }}>온라인강의</p>
      </Onlineclasstitle>
      {user_gb === "MENTO" && (
        <div>
          <Onlinelivemainbox>
            <Onlinelivemaindetial>
              <p style={{ fontWeight: "bold" }}>[1차시]수학1 멘토링 강의</p>
              <p style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
                시작예정시간:2023.05.12 16:00
              </p>
              <p style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                참여인원:4
              </p>
              <p style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                비밀번호:123
              </p>
            </Onlinelivemaindetial>
          </Onlinelivemainbox>

          <Onlineclassmainbox>
            <Onlineclassmaindetail>
              <p style={{ fontWeight: "bold" }}>1차시_멘토링주제</p>
              <p
                style={{
                  marginTop: "1.5rem",
                  marginLeft: "9rem",
                  color: "#07858c",
                  fontWeight: "bold",
                }}
              >
                강의보러가기
              </p>
              <p style={{ marginLeft: "0.5rem", marginTop: "0.7rem" }}>
                2023.05.12
              </p>
            </Onlineclassmaindetail>
          </Onlineclassmainbox>
        </div>
      )}
      {user_gb === "MENTEE" && (
        <div>
          <OnlinelivemainMenteebox>
            <Onlinelivemaindetial>
              <p style={{ fontWeight: "bold" }}>[1차시]수학1 멘토링 강의</p>
              <p style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>
                시작예정시간:2023.05.12 16:00
              </p>
              <p style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                참여인원:4
              </p>
              <p style={{ marginLeft: "0.5rem", marginTop: "0.5rem" }}>
                비밀번호:123
              </p>
            </Onlinelivemaindetial>
          </OnlinelivemainMenteebox>

          <OnlineclassmainMenteebox>
            <Onlineclassmaindetail>
              <p style={{ fontWeight: "bold" }}>1차시_멘토링주제</p>
              <p
                style={{
                  marginTop: "1.5rem",
                  marginLeft: "9rem",
                  color: "#FF8E41",
                  fontWeight: "bold",
                }}
              >
                강의보러가기
              </p>
              <p style={{ marginLeft: "0.5rem", marginTop: "0.7rem" }}>
                2023.05.12
              </p>
            </Onlineclassmaindetail>
          </OnlineclassmainMenteebox>
        </div>
      )}
    </OnlineclassForm>
  );
};
const OnlineclassForm = styled.div`
  display: flex;
  flex-direction: column;
`;
const Onlineclasstitle = styled.div`
  display: flex;
  flex-direction: row;
  height: 3vh;
  font-size: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
`;

const Onlineclassmainbox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #07858c;
  width: 88%;
  height: 10vh;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  background-color: white;
  border-radius: 15px;
`;
const OnlineclassmainMenteebox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ff8e41;
  width: 88%;
  height: 10vh;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  background-color: white;
  border-radius: 15px;
`;
const Onlinelivemainbox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #07858c;
  width: 88%;
  height: 10vh;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  background-color: white;
  border-radius: 15px;
`;
const OnlinelivemainMenteebox = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ff8e41;
  width: 88%;
  height: 10vh;
  margin-top: 0.5rem;
  margin-left: 1.5rem;
  background-color: white;
  border-radius: 15px;
`;
const Onlinelivemaindetial = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
const Onlineclassmaindetail = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;
export default Onlineclass;
