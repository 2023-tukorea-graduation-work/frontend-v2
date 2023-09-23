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
import { useForm, Controller } from "react-hook-form";
import categorySendData from "../../../utils/categorySendData";
import { useAppDispatch } from "../../../store/hooks";
import { addCategories } from "../../../slice/program/programCreationSlice";
interface ButtonProps {
  increaseStep: () => void;
}
interface CategoryValue {
  value: readonly StateOption[] | undefined;
  label: string;
}
interface FianlData {
  parent: string;
  child: string;
}

const Category = (props: ButtonProps) => {
  const [firstCategory, setFirstCategory] = useState([]);
  const dispatch = useAppDispatch();
  const firstCategoryChange = (change: any) => {
    if (
      firstCategory.some((val: CategoryValue) => val.label === change.label)
    ) {
      console.log(1);
    }
    setFirstCategory(change);
  };
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => {
    const finalData: Array<FianlData> = [];
    for (const [key, value] of Object.entries(data)) {
      if (key === "category") continue;
      const test = key;
      if (Array.isArray(value)) {
        value.map((value) => {
          finalData.push({ parent: `${test}`, child: `${value.label}` });
        });
      }
    }
    dispatch(addCategories(finalData));
    console.log(finalData);
    props.increaseStep();
  };
  const onError = (error: any) => {
    console.log(error);
  };
  return (
    <BasicForm>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <p style={{ marginTop: "5rem", marginLeft: "3rem", fontSize: "1rem" }}>
          멘토링 대분류를 선택해주세요. 
        </p>

        <div style={{ marginTop: "1rem", marginLeft: "3rem" }}>
          <Controller
            control={control}
            name="category"
            rules={{
              required: "반드시 선택해주세요",
            }}
            render={({ field: { onChange, value, ...field } }) => (
              <Select
                {...field}
                options={stateOptions}
                isMulti
                value={value}
                onChange={(newValue, actionMeta) => {
                  if (
                    value?.length > 0 &&
                    value !== undefined &&
                    actionMeta.action === "select-option"
                  ) {
                    if (
                      value?.some(
                        (val: CategoryValue) =>
                          val.label === actionMeta.option.label
                      )
                    ) {
                      const result = value.filter(
                        (val: CategoryValue) =>
                          val.label !== actionMeta.option.label
                      );
                      onChange(result);
                      firstCategoryChange(result);
                    } else {
                      onChange(newValue);
                      firstCategoryChange(newValue);
                    }
                  } else {
                    onChange(newValue);
                    firstCategoryChange(newValue);
                  }
                }}
              />
            )}
          />
        </div>
        <p
          style={{
            marginTop: ".5rem",
            marginLeft: "3rem",
            fontSize: "1rem",
            color: "red",
          }}
        >
          {errors.category?.message?.toString()}
        </p>
        <p style={{ marginTop: "3rem", marginLeft: "3rem", fontSize: "1rem" }}>
          멘토링 소분류를 선택해주세요.
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
              <Controller
                control={control}
                name={value.label}
                rules={{
                  required: "항목을 선택해주세요",
                }}
                render={({ field: { onChange, ...field } }) => (
                  <Select
                    {...field}
                    isMulti
                    name={value.label}
                    options={value.value}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={(change) => onChange(change)}
                  />
                )}
              />
            </div>
          );
        })}

        <Button
          variant="contained"
          color="secondary"
          style={{ fontSize: "1rem", left: "45%", marginTop: "8.3rem" }}
          sx={{ height: "2.2rem", width: "11rem" }}
          // onClick={props.increaseStep}
          type="submit"
          disabled={isSubmitting}
        >
          상세정보 입력하기
        </Button>
      </form>
    </BasicForm>
  );
};

const BasicForm = styled.div`
  width: 96%;
  align-items: center;
  text-align: start;
`;

export default Category;
