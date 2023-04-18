import React, { useState } from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Select from "react-select";
import { FaBook, FaRunning, FaStackOverflow } from "react-icons/fa";
import {
  HobbyOptions,
  MajorOptions,
  StateOption,
  StudyOptions,
  stateOptions,
} from "../../../docs/Docs";

interface ButtonProps {
  increaseStep: () => void;
}
interface CategoryValue {
  value: readonly StateOption[] | undefined;
  label: string;
}

const Category = (props: ButtonProps) => {
  const [firstCategory, setFirstCategory] = useState([]);
  const firstCategoryChange = (change: any) => {
    setFirstCategory(change);
    console.log(firstCategory);
  };
  return (
    <BasicForm>
      <p style={{ marginTop: "5rem", marginLeft: "3rem", fontSize: "1rem" }}>
        카테고리 선택하기
      </p>
      <div style={{ marginTop: "1rem", marginLeft: "3rem" }}>
        <Select
          isMulti
          name="colors"
          options={stateOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(change) => firstCategoryChange(change)}
        />
      </div>

      <p style={{ marginTop: "3rem", marginLeft: "3rem", fontSize: "1rem" }}>
        선택한 대표 카테고리들의 관심사를 선택해주세요
      </p>
      {firstCategory.map((value: CategoryValue, index: number) => {
        return (
          <div style={{ marginTop: "1rem", marginLeft: "3rem" }} key={index}>
            <p
              style={{
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
                marginTop: "2rem",
              }}
            >
              <FaBook style={{ marginRight: "0.3rem", color: "#399DA3" }} />
              {value.label}
            </p>
            <Select
              isMulti
              name="colors"
              options={value.value}
              className="basic-multi-select"
              classNamePrefix="select"
            />
          </div>
        );
      })}

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
