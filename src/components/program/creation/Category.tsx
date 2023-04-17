import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Select from "react-select";
import { FaBook, FaRunning, FaStackOverflow } from "react-icons/fa";
import {
  HobbyOptions,
  MajorOptions,
  StudyOptions,
  stateOptions,
} from "../../../docs/Docs";

interface ButtonProps {
  increaseStep: () => void;
}

const Category = (props: ButtonProps) => {
  return (
    <BasicForm>
      <p style={{ marginTop: "5rem", marginLeft: "3rem", fontSize: "1rem" }}>
        카테고리 선택하기
      </p>
      <div style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <Select
          defaultValue={[stateOptions[2], stateOptions[3]]}
          isMulti
          name="colors"
          options={stateOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <p style={{ marginTop: "3rem", marginLeft: "3rem", fontSize: "1rem" }}>
        선택한 대표 카테고리들의 관심사를 선택해주세요
      </p>
      <div style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            marginBottom: "0.5rem",
            marginTop: "2rem",
          }}
        >
          <FaBook style={{ marginRight: "0.3rem", color: "#399DA3" }} />
          학습
        </p>
        <Select
          defaultValue={[StudyOptions[2], StudyOptions[3]]}
          isMulti
          name="colors"
          options={StudyOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <div style={{ marginLeft: "3rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <FaRunning style={{ marginRight: "0.3rem", color: "#399DA3" }} />
          취미
        </p>
        <Select
          defaultValue={[HobbyOptions[2], HobbyOptions[3]]}
          isMulti
          name="colors"
          options={HobbyOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <div style={{ marginLeft: "3rem" }}>
        <p
          style={{
            fontSize: "0.8rem",
            marginBottom: "0.5rem",
            marginTop: "1rem",
          }}
        >
          <FaStackOverflow
            style={{ marginRight: "0.3rem", color: "#399DA3" }}
          />
          전공
        </p>
        <Select
          defaultValue={[MajorOptions[2], MajorOptions[3]]}
          isMulti
          name="colors"
          options={MajorOptions}
          className="basic-multi-select"
          classNamePrefix="select"
        />
      </div>

      <Button
        variant="contained"
        color="secondary"
        style={{ fontSize: "1rem", left: "45%", marginTop: "8.3rem" }}
        sx={{ height: "2.2rem", width: "11rem" }}
        onClick={props.increaseStep}
      >
        상세정보 입력하기
      </Button>
    </BasicForm>
  );
};

const BasicForm = styled.div`
  width: 96%;
  align-items: center;
  text-align: start;
`;

export default Category;
