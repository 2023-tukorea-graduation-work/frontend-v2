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
import { useFieldArray, useForm } from "react-hook-form";

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
              <a href="https://ifh.cc/v-64M6vs" target="_blank">
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

  const [Number, setNumber] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setNumber(event.target.value as string);
  };

  const {
    control,
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "programWeeks",
  });

  return (
    <TestWriterform>
      <TestWriterbox>
        <Testdatebox>
          <StyledDatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="yyyy-MM-dd HH:mm"
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
          <StyledDatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            dateFormat="yyyy-MM-dd HH:mm"
          />
        </Testdatebox>
        <TestTitle>
          <Input
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
                >
                  객관식
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  sx={{ width: "5rem", height: "3vh", marginLeft: "0.5rem" }}
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
                style={{
                  fontSize: "0.9rem",
                  marginTop: "0.8rem",
                  marginRight: "0.3rem",
                }}
              >
                배점
              </p>
              <Input
                placeholder="점수입력"
                color="secondary"
                style={{ width: "9rem", height: "4vh" }}
              ></Input>
            </TWselectscore>
          </TWselectbox>

          <TestWrite>
            <Testtext>
              <Input
                placeholder="문제를 입력하세요"
                color="secondary"
                style={{
                  width: "100%",
                  height: "10vh",
                  marginBottom: "0.5rem",
                }}
              ></Input>
            </Testtext>
            <TestNumber1>
              <p style={{ marginRight: "0.6rem", marginTop: "1rem" }}>A</p>
              <Input
                placeholder="선택답안을 입력하세요"
                color="secondary"
                style={{
                  width: "100%",
                  height: "5vh",
                  marginBottom: "0.3rem",
                }}
              ></Input>
            </TestNumber1>
            <TestNumber2>
              <p style={{ marginRight: "0.6rem", marginTop: "1rem" }}>B</p>
              <Input
                placeholder="선택답안을 입력하세요"
                color="secondary"
                style={{
                  width: "100%",
                  height: "5vh",
                  marginBottom: "0.3rem",
                }}
              ></Input>
            </TestNumber2>
            <TestNumber3>
              <p style={{ marginRight: "0.6rem", marginTop: "1rem" }}>C</p>
              <Input
                placeholder="선택답안을 입력하세요"
                color="secondary"
                style={{
                  width: "100%",
                  height: "5vh",
                  marginBottom: "0.3rem",
                }}
              ></Input>
            </TestNumber3>
            <TestNumber4>
              <p style={{ marginRight: "0.6rem", marginTop: "1rem" }}>D</p>
              <Input
                placeholder="선택답안을 입력하세요"
                color="secondary"
                style={{
                  width: "100%",
                  height: "5vh",
                }}
              ></Input>
            </TestNumber4>
          </TestWrite>
        </TestWriterlist>
      ))}
      <TestWriterplus>
        <FaPlus
          size="20"
          color="#80b7d1"
          style={{ cursor: "pointer" }}
          onClick={() => append({ detail: "" })}
        ></FaPlus>
      </TestWriterplus>
    </TestWriterform>
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
const TestNumber1 = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;
const TestNumber2 = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;
const TestNumber3 = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
`;
const TestNumber4 = styled.div`
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
