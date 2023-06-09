import React from "react";
import styled from "@emotion/styled";
import Radio from "@mui/material/Radio";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { classSatisfaction, relationshipSatisfaction } from "../../docs/Docs";
interface ButtonProps {
  increaseStep: () => void;
}
const Lecture = (props: ButtonProps) => {
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
    <TableCss>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <table>
          <thead>
            <tr>
              <TableQuestionHeader user_gb={user_gb}>
                평가내용
              </TableQuestionHeader>
              <TableAnswerHeader user_gb={user_gb}>그렇다</TableAnswerHeader>
              <TableAnswerHeader user_gb={user_gb}>보통이다</TableAnswerHeader>
              <TableAnswerHeader user_gb={user_gb}>
                그렇지 않다
              </TableAnswerHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <TableQuestion
                style={{ fontFamily: "NotoSansMedium", fontSize: "1.15rem" }}
                colSpan={4}
              >
                수업만족도
              </TableQuestion>
            </tr>
            {classSatisfaction.map((value: string, index: number) => (
              <tr key={index}>
                <TableQuestion>{`${index + 1}. ${value}`}</TableQuestion>
                <Controller
                  name={value}
                  control={control}
                  rules={{ required: "필수선택입니다." }}
                  render={({ field: { value, ...field } }) => (
                    <>
                      <TableAnswer>
                        <Radio
                          {...field}
                          value="그렇다"
                          checked={value === "그렇다"}
                          color={user_gb === "MENTEE" ? "primary" : "secondary"}
                        />
                      </TableAnswer>
                      <TableAnswer>
                        <Radio
                          {...field}
                          value="보통이다"
                          checked={value === "보통이다"}
                          color={user_gb === "MENTEE" ? "primary" : "secondary"}
                        />
                      </TableAnswer>
                      <TableAnswer>
                        <Radio
                          {...field}
                          value="그렇지않다"
                          checked={value === "그렇지않다"}
                          color={user_gb === "MENTEE" ? "primary" : "secondary"}
                        />
                      </TableAnswer>
                    </>
                  )}
                />
              </tr>
            ))}
            <tr>
              <TableQuestion
                style={{ fontFamily: "NotoSansMedium", fontSize: "1.15rem" }}
                colSpan={4}
              >
                관계 만족도
              </TableQuestion>
            </tr>
            {relationshipSatisfaction.map((value: string, index: number) => (
              <tr key={index}>
                <TableQuestion>{`${index + 1}. ${value}`}</TableQuestion>
                <Controller
                  name={value[0] + value[8]}
                  control={control}
                  rules={{ required: "출생년도는 필수선택입니다." }}
                  render={({ field: { value, ...field } }) => (
                    <>
                      <TableAnswer>
                        <Radio
                          {...field}
                          value="그렇다"
                          checked={value === "그렇다"}
                          color={user_gb === "MENTEE" ? "primary" : "secondary"}
                        />
                      </TableAnswer>
                      <TableAnswer>
                        <Radio
                          {...field}
                          value="보통이다"
                          checked={value === "보통이다"}
                          color={user_gb === "MENTEE" ? "primary" : "secondary"}
                        />
                      </TableAnswer>
                      <TableAnswer>
                        <Radio
                          {...field}
                          value="그렇지않다"
                          checked={value === "그렇지않다"}
                          color={user_gb === "MENTEE" ? "primary" : "secondary"}
                        />
                      </TableAnswer>
                    </>
                  )}
                />
              </tr>
            ))}
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
    </TableCss>
  );
};
const TableQuestionHeader = styled.th<{ user_gb: string }>`
  height: 2rem;
  width: 73%;
  border: 1px solid #b7b7b7;
  text-align: center;
  vertical-align: middle;
  background-color: ${(props) =>
    props.user_gb === "MENTEE" ? "#FFB07A" : "#91d7da"};
`;
const TableAnswerHeader = styled.th<{ user_gb: string }>`
  height: 2rem;
  width: 9%;
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
  padding-left: 1rem;
`;
const TableAnswer = styled.td`
  height: 2rem;
  width: 9%;
  border: 1px solid #b7b7b7;
  text-align: center;
  vertical-align: middle;
`;
const TableCss = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  margin-left: 5rem;
  font-family: "NotoSansRegular";
`;
export default Lecture;
