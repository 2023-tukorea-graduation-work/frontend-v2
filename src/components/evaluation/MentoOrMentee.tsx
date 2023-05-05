import React from "react";
import styled from "@emotion/styled";
import Radio from "@mui/material/Radio";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { systemSatisfaction } from "../../docs/Docs";
import ClearIcon from "@mui/icons-material/Clear";
interface ButtonProps {
  increaseStep: () => void;
}
const MentoOrMentee = (props: ButtonProps) => {
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
      <PopUpBox>
        <Title>
          <div style={{ marginLeft: "2rem" }}>
            시스템 만족도 조사 기간 : 2023.12.01 ~ 2023.12.31
          </div>

          <ClearIcon sx={{ marginRight: "2rem" }} />
        </Title>
        <Line></Line>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <table>
            <thead>
              <tr>
                <TableQuestionHeader user_gb={user_gb}>
                  평가내용
                </TableQuestionHeader>
                <TableAnswerHeader user_gb={user_gb}>그렇다</TableAnswerHeader>
                <TableAnswerHeader user_gb={user_gb}>
                  보통이다
                </TableAnswerHeader>
                <TableAnswerHeader user_gb={user_gb}>
                  그렇지 않다
                </TableAnswerHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableQuestion colSpan={4}>시스템 평가</TableQuestion>
              </tr>
              {systemSatisfaction.map((value: string, index: number) => (
                <tr key={index}>
                  <TableQuestion>{`${index + 1}. ${value}`}</TableQuestion>
                  <Controller
                    name={value}
                    control={control}
                    rules={{ required: "출생년도는 필수선택입니다." }}
                    render={({ field: { value, ...field } }) => (
                      <>
                        <TableAnswer>
                          <Radio
                            {...field}
                            value="그렇다"
                            checked={value === "그렇다"}
                            color={
                              user_gb === "MENTEE" ? "primary" : "secondary"
                            }
                          />
                        </TableAnswer>
                        <TableAnswer>
                          <Radio
                            {...field}
                            value="보통이다"
                            checked={value === "보통이다"}
                            color={
                              user_gb === "MENTEE" ? "primary" : "secondary"
                            }
                          />
                        </TableAnswer>
                        <TableAnswer>
                          <Radio
                            {...field}
                            value="그렇지않다"
                            checked={value === "그렇지않다"}
                            color={
                              user_gb === "MENTEE" ? "primary" : "secondary"
                            }
                          />
                        </TableAnswer>
                      </>
                    )}
                  />
                </tr>
              ))}
              <tr>
                <TableQuestion colSpan={4}>기타 의견</TableQuestion>
              </tr>
              <tr>
                <TableQuestion colSpan={4}>
                  <TextField
                    {...register("내용")}
                    multiline
                    rows={5}
                    sx={{
                      width: "100%",

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
                </TableQuestion>
              </tr>
            </tbody>
          </table>
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
        </form>
      </PopUpBox>
    </>
  );
};
const TableQuestionHeader = styled.th<{ user_gb: string }>`
  height: 2rem;
  width: 73%;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#91d7da"};
`;
const TableAnswerHeader = styled.th<{ user_gb: string }>`
  height: 2rem;
  width: 9%;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#91d7da"};
`;
const TableQuestion = styled.td`
  height: 2rem;
  width: 73%;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: left;
  vertical-align: middle;
`;
const TableAnswer = styled.td`
  height: 2rem;
  width: 9%;
  border: 1px solid black;
  border-collapse: collapse;
  text-align: center;
  vertical-align: middle;
`;
const PopUpBox = styled.div`
  width: 45rem;
  height: 70%;
  border: 1px solid red;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Line = styled.hr`
  width: 99.9%;
  border-top: 1px solid red;
`;
export default MentoOrMentee;
