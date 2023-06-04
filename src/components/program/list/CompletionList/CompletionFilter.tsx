import React, { useState } from "react";
import styled from "@emotion/styled";
import "./ProgramList.css";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  interestSelect,
  placeSelect,
  teachTypeSelect,
} from "../../../../slice/program/programListSlice";

const CompletionFilter = () => {
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const filterAll = useAppSelector((state) => state.programList.filterAll);
  const dispatch = useAppDispatch();
  const place = [
    ["온라인", "online"],
    ["오프라인", "offline"],
    ["온라인 & 오프라인 병행", "onlineWithOffline"],
  ];
  const teachType = [
    ["전체", "typeAll"],
    ["과외", "tutoring"],
    ["멘토 & 멘티", "mentoWithMentee"],
  ];
  const interest = [
    ["전체", "interestAll"],
    ["학습", "learning"],
    ["취미", "hobby"],
    ["전공", "major"],
    ["진로", "career"],
    ["자소서", "introduction"],
    ["대학진학", "advanceUniversity"],
    ["창업", "startups"],
    ["자격증", "certificate"],
  ];
  return (
    <>
      <Tagbox>
        <TagFrom>
          <p
            style={{ fontSize: "2rem", marginTop: "6rem", marginLeft: "8rem" }}
          >
            보고싶은 프로그램완료 글만
          </p>
          <p
            style={{
              fontSize: "2rem",
              marginLeft: "8rem",
              marginTop: "0.8rem",
            }}
          >
            골라보기
          </p>
        </TagFrom>
        <PlaceForm>
          <Title>수업방식</Title>
          <Placebox>
            {place.map((value: string[], index: number) => {
              return (
                <div
                  key={index}
                  className={`${value[1]} ${
                    filterAll.place === value[1]
                      ? userGb === "MENTO"
                        ? "active2"
                        : "active"
                      : ""
                  }`}
                  onClick={() => dispatch(placeSelect(`${value[1]}`))}
                >
                  {`${value[0]}`}
                </div>
              );
            })}
          </Placebox>
        </PlaceForm>
        <KindForm>
          <Title>종류</Title>
          <Kindbox>
            {teachType.map((value: string[], index: number) => {
              return (
                <div
                  key={index}
                  className={`${value[1]} ${
                    filterAll.teach === value[1]
                      ? userGb === "MENTO"
                        ? "active2"
                        : "active"
                      : ""
                  }`}
                  onClick={() => dispatch(teachTypeSelect(`${value[1]}`))}
                >
                  {`${value[0]}`}
                </div>
              );
            })}
          </Kindbox>
        </KindForm>
        <FieldForm>
          <Title>관심분야</Title>
          <Fieldbox>
            {interest.map((value: string[], index: number) => {
              return (
                <div
                  key={index}
                  className={`${value[1]} ${
                    filterAll.interest === value[1]
                      ? userGb === "MENTO"
                        ? "active2"
                        : "active"
                      : ""
                  }`}
                  onClick={() => dispatch(interestSelect(`${value[1]}`))}
                >
                  {`${value[0]}`}
                </div>
              );
            })}
          </Fieldbox>
        </FieldForm>
      </Tagbox>
    </>
  );
};
const TagFrom = styled.div`
  width: 35%;
  margin-right: 2rem;
`;
const Tagbox = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const PlaceForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 60%;
  margin-top: 6rem;
  margin-right: 1.8rem;
`;
const Placebox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  font-size: 0.9rem;
  font-weight: bold;
`;
const KindForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  height: 60%;
  margin-top: 6rem;
`;
const Kindbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: bold;
`;
const FieldForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 60%;
  margin-top: 6rem;
  margin-left: 0.2rem;
`;
const Fieldbox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9rem;
  font-weight: bold;
`;
const Title = styled.p`
  margin-bottom: 2rem;
  font-size: 1.3rem;
  font-weight: bold;
`;
export default CompletionFilter;
