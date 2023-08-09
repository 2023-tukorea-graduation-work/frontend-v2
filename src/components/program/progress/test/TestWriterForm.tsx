import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";

import {
  FaPlus,
  FaTrashAlt,
  FaRegSave,
  FaRegFileAlt,
  FaRegQuestionCircle,
} from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "../../../../store/hooks";
import { uploadExamAsync } from "../../../../slice/program/programProgressExamSlice";
import { ko } from "date-fns/esm/locale";
// import { test, test } from "node:test";
import { List } from "immutable";

import {
  Multiple,
  Subjects,
  MutlipleOption,
} from "../../../../slice/program/programProgressExamSlice";
import { Subject } from "@mui/icons-material";
import { useParams } from "react-router-dom";

interface Props {
  subtogglePopup(): void;
}

const SavemethodPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && (
        <SavemethodPopupbox>
          <SavemethodPopupinner>
            <SavemethodPopupFrom>
              <a
                href="https://ifh.cc/v-64M6vs"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://ifh.cc/g/64M6vs.jpg"
                  style={{
                    width: "90%",
                    marginLeft: "4rem",
                    marginTop: "2rem",
                  }}
                />
              </a>
            </SavemethodPopupFrom>
          </SavemethodPopupinner>
        </SavemethodPopupbox>
      )}
    </div>
  );
};

const TestWriterForm = ({ subtogglePopup }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const programId = useParams();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleStartDateChange = (date: Date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    setEndDate(date);
  };

  const [isExamRegistered, setIsExamRegistered] = useState(false);

  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "examQuestionRegisterRequest",
  });

  // MyComponentState.ts
  interface MyTestType {
    testType: Array<any>;
  }

  const [myTestType, setMyTestType] = useState<MyTestType>({
    testType: [],
  });

  // interface MyQuestionOptions {
  //   options: Array<any>;
  // }

  // const [myQuestionOpions, setMyQuestionOptions] = useState<MyQuestionOptions>({
  //   options: [],
  // })

  // Define a function to handle state updates
  const handleButtonClick = (index: any, type: any) => {

    const updatedTestType = { ...myTestType };
    if (type == "MULTIPLE_CHOICE_QUESTION") {
      updatedTestType.testType[index] = {
        questionType: type,
        question: "",
        score: 0,
        options: [],
        subjectAnswer: null,
      };
    } else {
      updatedTestType.testType[index] = {
        questionType: type,
        question: "",
        score: 0,
        options: [],
        subjectAnswer: "",
      };
    }
    setMyTestType(updatedTestType);
  };

  const handleWriterClick = () => {
    append({});

    const updatedTestType = { ...myTestType };
    updatedTestType.testType[updatedTestType.testType.length] = {
      questionType: "MULTIPLE_CHOICE_QUESTION",
      question: "",
      score: 0,
      options: [],
      subjectAnswer: null,
    };
    setMyTestType(updatedTestType);

    console.log(updatedTestType);

  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const onError = (data: any) => {
    console.log(data);
  };

  const alphaList = ["A", "B", "C", "D"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const updatedTestType = { ...myTestType };
    const updatedQuestion = { ...updatedTestType.testType[index] }; // Create a copy of the question object
    updatedQuestion[e.target.name] = e.target.value;

    updatedTestType.testType[index] = updatedQuestion; // Update the question in the array
    setMyTestType(updatedTestType);

    console.log(myTestType);
  };

  const handleQuestionOptionChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    alpha_index: number
  ) => {
    const updatedTestType = { ...myTestType };
    const updatedQuestion = { ...updatedTestType.testType[index] }; // Create a copy of the question object

    updatedQuestion.options[alpha_index] = {
      [e.target.name]: e.target.value,
    };

    setMyTestType(updatedTestType);

    console.log(myTestType);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <button type="submit" value="테스트"></button>

      <TestWriterform>
        <TestWriterbox>
          <Testdatebox>
            <Controller
              control={control}
              name="examStartTime"
              rules={{ required: "날짜는 필수선택입니다." }}
              render={({ field }) => (
                <StyledDatePicker
                  {...field}
                  dateFormat="yyyy년 MM월 dd일"
                  disabledKeyboardNavigation
                  placeholderText="날짜를 선택하세요"
                  autoComplete="off"
                  selected={field.value}
                  onChange={(date: any) => field.onChange(date)}
                  locale={ko}
                />
              )}
            />
            <p
              style={{
                marginRight: "0.5rem",
                marginLeft: "0.5rem",
                lineHeight: "2.5rem",
              }}
            >
              ~
            </p>
            <Controller
              control={control}
              name="examFinishTime"
              rules={{ required: "날짜는 필수선택입니다." }}
              render={({ field }) => (
                <StyledDatePicker
                  {...field}
                  dateFormat="yyyy년 MM월 dd일"
                  disabledKeyboardNavigation
                  placeholderText="날짜를 선택하세요"
                  autoComplete="off"
                  selected={field.value}
                  onChange={(date: any) => field.onChange(date)}
                  locale={ko}
                />
              )}
            />
          </Testdatebox>
          <TestTitle>
            <Input
              {...register("examTitle")}
              placeholder="테스트제목을 입력하세요"
              color="secondary"
              style={{ width: "100%", height: "100%" }}
            ></Input>
          </TestTitle>
          {/* 아이콘시작 */}
          <TWTitle>
            <TestMethod>
              <FaRegQuestionCircle
                size="25"
                style={{
                  color: "#777777",
                  marginBottom: "0.3rem",
                  marginLeft: "0.5rem",
                  cursor: "pointer",
                }}
                onClick={togglePopup}
              ></FaRegQuestionCircle>
              {isOpen && <SavemethodPopup />}
              <p>사용방법</p>
            </TestMethod>
            <TestSave>
              <FaRegSave
                size="25"
                style={{
                  color: "#777777",
                  marginBottom: "0.3rem",
                  marginLeft: "0.6rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toast.success("임시저장완료");
                  subtogglePopup();
                  setIsExamRegistered(false);
                }}
              ></FaRegSave>
              <p>임시저장</p>
            </TestSave>

            <TestSaveComplete>
              <FaRegFileAlt
                size="25"
                style={{
                  color: "#777777",
                  marginBottom: "0.3rem",
                  marginLeft: "0.6rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  toast.success("시험출제완료");
                  subtogglePopup();
                  setIsExamRegistered(true);
                  // uploadExamAsync({
                  //   programId: Number(programId),
                  //   examTitle:
                  // })
                }}
              ></FaRegFileAlt>
              <p>저장(등록)</p>
            </TestSaveComplete>


          <TestDelete>
            <FaTrashAlt
              size="25"
              style={{
                color: "#777777",
                marginBottom: "0.3rem",
                marginLeft: "0.6rem",
                cursor: "pointer",
              }}
            ></FaTrashAlt>
            <p>전체삭제</p>
          </TestDelete>
        </TWTitle>
        {/* 아이콘 끝  */}
      </TestWriterbox>
      {fields.map((field, index) => (
        <TestWriterlist>
          <TWselectbox>
            <p style={{ fontSize: "1.2rem" }}>1번문항</p>

            <TWselect>
              <TestSelect>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ width: "5rem", height: "3vh" }}
                  onClick={() => handleButtonClick(index, "객관식")}
                >
                  객관식
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ width: "5rem", height: "3vh", marginLeft: "0.5rem" }}
                  onClick={() => handleButtonClick(index, "주관식")}
                >
                  주관식
                </Button>
              </TestSelect>
              {/* <FormControl fullWidth>
              <InputLabel color="secondary" id="demo-simple-select-label">
                유형선택
              </InputLabel>
              <Select
                color="secondary"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Number}
                label="객관식"
                onChange={handleChange}
              >
                <MenuItem value={10}>객관식</MenuItem>
                <MenuItem value={20}>주관식</MenuItem>
              </Select>
            </FormControl> */}
            </TWselect>

            <TWselectscore>
              <p

            <TestDelete>
              <FaTrashAlt
                size="25"

                style={{
                  color: "#777777",
                  marginBottom: "0.3rem",
                  marginLeft: "0.6rem",
                  cursor: "pointer",
                }}
              ></FaTrashAlt>
              <p>전체삭제</p>
            </TestDelete>
          </TWTitle>
          {/* 아이콘 끝  */}
        </TestWriterbox>
        {fields.map((field, index) => (
          <TestWriterlist>
            <TWselectbox>
              <p style={{ fontSize: "1.2rem" }}>1번문항</p>

              <TWselect>
                <TestSelect>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ width: "5rem", height: "3vh" }}
                    onClick={() =>
                      handleButtonClick(index, "MULTIPLE_CHOICE_QUESTION")
                    }
                  >
                    객관식
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{ width: "5rem", height: "3vh", marginLeft: "0.5rem" }}
                    onClick={() => handleButtonClick(index, "SUBJECT_QUESTION")}
                  >
                    주관식
                  </Button>
                </TestSelect>
              </TWselect>
              <TWselectscore>
                <p
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "0.8rem",
                    marginRight: "0.3rem",
                  }}
                >
                  배점
                </p>
                <Input
                  name="score"
                  placeholder="점수입력"
                  color="secondary"
                  style={{ width: "9rem", height: "4vh" }}
                  onChange={(e) => handleChange(e, index)}
                ></Input>
              </TWselectscore>
            </TWselectbox>

            {myTestType.testType[index].questionType ===
              "MULTIPLE_CHOICE_QUESTION" && (
              <TestWrite>
                <Testtext>
                  <Input
                    name="question"
                    placeholder="문제를 입력하세요"
                    color="secondary"
                    style={{
                      width: "100%",
                      height: "10vh",
                      marginBottom: "0.5rem",
                    }}
                    onChange={(e) => handleChange(e, index)}
                  ></Input>
                </Testtext>
                {alphaList.map((alpha, alpha_index) => (
                  <TestNumber key={alpha_index}>
                    <p style={{ marginRight: "0.6rem", marginTop: "1rem" }}>
                      {alpha}
                    </p>
                    <Input
                      name="choices"
                      placeholder="선택답안을 입력하세요"
                      color="secondary"
                      style={{
                        width: "100%",
                        height: "5vh",
                        marginBottom: "0.3rem",
                      }}
                      onChange={(e) =>
                        handleQuestionOptionChange(e, index, alpha_index)
                      }
                    ></Input>
                  </TestNumber>
                ))}
              </TestWrite>
            )}

            {myTestType.testType[index].questionType === "SUBJECT_QUESTION" && (
              <TestWrite>
                <Testtext>
                  <Input
                    name="question"
                    placeholder="문제를 입력하세요"
                    color="secondary"
                    style={{
                      width: "100%",
                      height: "10vh",
                      marginBottom: "0.5rem",
                    }}
                    onChange={(e) => handleChange(e, index)}
                  ></Input>
                </Testtext>
                <TestNumber>
                  <Input
                    name="subjectAnswer"
                    placeholder="답안을 입력하세요"
                    color="secondary"
                    style={{
                      width: "100%",
                      height: "5vh",
                      marginBottom: "0.3rem",
                    }}
                    onChange={(e) => handleChange(e, index)}
                  ></Input>
                </TestNumber>
              </TestWrite>
            )}
          </TestWriterlist>
        ))}

        <TestWriterplus>
          <FaPlus
            size="20"
            color="#80b7d1"
            style={{ cursor: "pointer" }}
            onClick={() => handleWriterClick()}
          ></FaPlus>
        </TestWriterplus>
      </TestWriterform>
    </form>
  );
};
const TestWriterform = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
const TestWriterbox = styled.div`
  width: 99.7%;
  height: 8vh;
  margin-top: 1rem;
  border-radius: 10px;
  border: 3px solid #80b7d1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Testdatebox = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 1.5rem;
  margin-top: 1rem;
  z-index: 2;
`;
const TestTitle = styled.div`
  width: 40%;
  height: 4.5vh;
  margin-top: 1rem;
`;
const TestWriterlist = styled.div`
    width;100%;
    height:45vh;
    margin-top:1rem;
    border-radius: 10px;
  border: 3px solid #80b7d1;
  display:flex;
  flex-direction:row;
  z-index:1;

`;
const TestWriterplus = styled.div`
  margin-left: 49%;
  margin-top: 1rem;
`;
const TWTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: space-around;
  margin-top: 0.9rem;
`;
const TWselectbox = styled.div`
  width: 15%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 2rem;
`;
const TWselect = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 0.9rem;
  margin-bottom: 0.5rem;
`;
const TestWrite = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 4rem;
`;
const TestMethod = styled.div`
  display: flex;
  flex-direction: column;
`;
const TestSave = styled.div`
  display: flex;
  flex-direction: column;
`;
const TestSaveComplete = styled.div`
  display: flex;
  flex-direction: column;
`;
const TestDelete = styled.div`
  display: flex;
  flex-direction: column;
`;
const Testtext = styled.div``;
const TestNumber = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;
const TWselectscore = styled.div`
  display: flex;
  flex-direction: row;
`;
const StyledDatePicker = styled(DatePicker)`
  width: 10rem;
  height: 4vh;
  border: 1px solid #d6d6d6;
  border-radius: 5px;
`;
const SavemethodPopupbox = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 90%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const SavemethodPopupFrom = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.5rem;
  font-size: 1rem;
`;
const SavemethodPopupinner = styled.div`
  background-color: white;
  width: 60%;
  height: 80%;
  padding: 1rem;
  border-radius: 20px;
`;
const TestSelect = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;
export default TestWriterForm;
