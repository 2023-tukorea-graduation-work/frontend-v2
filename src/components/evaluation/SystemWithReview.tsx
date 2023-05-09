import React from "react";
import styled from "@emotion/styled";
import { useForm, Controller } from "react-hook-form";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
interface ButtonProps {
  increaseStep: () => void;
}
const SystemWithReview = (props: ButtonProps) => {
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const onSubmit = (data: any) => {
    console.log(data);
    props.increaseStep();
  };
  const onError = (error: any) => {
    console.log(error);
  };
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  return (
    <>
      03.시스템 평가및 후기
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <table>
          <thead>
            <tr>
              <TableQuestionHeader user_gb={user_gb}>
                평가내용
              </TableQuestionHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableQuestion colSpan={4}>멘토링 소감및 후기</TableQuestion>
            </tr>
            <tr>
              <td colSpan={1}>
                <TextField
                  {...register("한줄평")}
                  multiline
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">한줄평</InputAdornment>
                    ),
                  }}
                  rows={1}
                  sx={{
                    borderRight: "1px solid #b7b7b7",
                    borderLeft: "1px solid #b7b7b7",
                    width: "99.8%",
                    height: "100%",
                    boxShadow: "0",
                    fontSize: "0.8rem",
                    padding: "0",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // default
                      },
                      "&.Mui-focused fieldset": {
                        border: "0px",
                      },
                      "&:hover fieldset": {
                        border: "0px",
                      },
                    },
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={1}>
                <TextField
                  {...register("내용")}
                  multiline
                  rows={5}
                  sx={{
                    border: "1px solid #b7b7b7",
                    width: "99.8%",
                    height: "100%",
                    boxShadow: "0",
                    fontSize: "0.8rem",
                    padding: "0",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white", // default
                      },
                      "&.Mui-focused fieldset": {
                        border: "0px",
                      },
                      "&:hover fieldset": {
                        border: "0px",
                      },
                    },
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <Button
            type="submit"
            variant="contained"
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            disabled={isSubmitting}
            sx={{
              height: "2.4rem",
              width: "11rem",
              fontSize: "1rem",
              fontFamily: "NotoSansRegular",
              boxShadow: "0",
              marginTop: "2rem",
              marginBottom: "2rem",
            }}
          >
            다음
          </Button>
        </div>
      </form>
    </>
  );
};
const TableQuestionHeader = styled.th<{ user_gb: string }>`
  height: 2rem;
  width: 50rem;
  border: 1px solid #b7b7b7;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#91d7da"};
`;

const TableQuestion = styled.td`
  height: 2rem;
  width: 73%;
  border: 1px solid #b7b7b7;
  text-align: left;
  vertical-align: middle;
`;

export default SystemWithReview;
