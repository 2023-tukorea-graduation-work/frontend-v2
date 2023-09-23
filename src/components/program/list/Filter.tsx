import React, { useState } from "react";
import styled from "@emotion/styled";
import "./ProgramList.css";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  interestSelect,
  placeSelect,
} from "../../../slice/program/programListSlice";

const Filter = () => {
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const filterAll = useAppSelector((state) => state.programList.filterAll);
  const dispatch = useAppDispatch();

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
            멘토링 모집
          </p>
        </TagFrom>
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
  width: 80%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`
export default Filter;
