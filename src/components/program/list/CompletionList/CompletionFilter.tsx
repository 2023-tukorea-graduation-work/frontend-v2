import React, { useState } from "react";
import styled from "@emotion/styled";
import "./ProgramList.css";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  interestSelect,
  placeSelect,
} from "../../../../slice/program/programListSlice";

const CompletionFilter = () => {
  const userGb = useAppSelector((state) => state.login.object.user_gb);
  const filterAll = useAppSelector((state) => state.programList.filterAll);
  const dispatch = useAppDispatch();

  return (
    <>
      <Tagbox>
        <TagFrom>
          <p
            style={{ fontSize: "2rem", marginTop: "6rem", marginLeft: "8rem" }}
          >
            멘토링 미리보기
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
`;
export default CompletionFilter;
