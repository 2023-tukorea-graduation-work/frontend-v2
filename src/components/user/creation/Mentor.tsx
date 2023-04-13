import React from "react";
import axios from "axios";
import styled from "@emotion/styled";
import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Mentor = (props: any) => {
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const teachingStyle = ["온라인", "오프라인", "온라인&오프라인 병행"];

  const onSubmit = (data: any) => {
    const formData = new FormData();
    formData.append("file", data.image[0]);
    delete data.image;
    delete data.password2;
    formData.append(
      "data",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    console.log(data);
    // for (let key of formData.keys()) {
    //   console.log(key);
    // }
    // for (let value of formData.values()) {
    //   console.log(value);
    //   value.text().then((x) => console.log(x));
    // }
    axios({
      url: "/api/v1/mento",
      method: "post",
      data: formData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onError = (error: any) => {
    console.log(error);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      style={{ padding: "4%", height: "87%" }}
    >
      {/* ---------------1번째칸 관심분야---------------  */}

      <div
        style={{
          backgroundColor: "skyblue",
          height: "10rem",
          fontFamily: "NotoSansRegular",
          marginBottom: "1rem",
        }}
      >
        관심분야 선택
      </div>

      {/* ---------------2번째칸 프로필사진 & 정보입력---------------  */}

      <div style={{ display: "flex", height: "42.5%" }}>
        <ImageUpload>
          <ImageShow>프로필 사진</ImageShow>
          {/* <Input
            {...register("image")}
            type="file"
            accept="image/*"
            variant="contained"
            // color="primary"
            sx={{
              marginTop: "8%",
              width: "80%",
              height: "13%",
              fontSize: "70%",
              fontWeight: "bold",
              fontFamily: "NotoSansLight",
              boxShadow: "0",
            }}
          > */}
          첨부
          {/* </Input> */}
        </ImageUpload>
        <InformationBox>
          <InformationBoxLine>
            이름
            <Input
              disableUnderline={true}
              placeholder="이름입력"
              sx={{
                fontSize: "0.8rem",
                height: "100%",
                width: "20%",
                boxShadow: "0",
                border: "0",
                borderRadius: "0",
                borderBottom: "solid 2px",
                borderBottomColor: "#d6d6d6",
                marginLeft: "1rem",
              }}
              {...register("name", {
                required: "이름은 필수입력입니다.",
              })}
            />
            {/*  나이로 바꿔주셈 -> age */}
            출생연도
            <FormControl>
              <Controller
                defaultValue=""
                control={control}
                name="birth_year"
                rules={{ required: "출생년도는 필수선택입니다." }}
                render={({ field }) => (
                  <Select
                    {...field}
                    disableUnderline={true}
                    sx={{
                      width: "4.8rem",
                      height: "100%",
                      border: "solid 1px #d6d6d6",
                      boxShadow: "0",
                      fontSize: "0.9rem",
                    }}
                    displayEmpty
                    variant="standard"
                    name="birth_year"
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        display: "none",
                      }}
                    >
                      <em>-</em>
                    </MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={1999}>1999</MenuItem>
                    <MenuItem value={1998}>1998</MenuItem>
                    <MenuItem value={1997}>1997</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
            이메일
            <Input
              disableUnderline={true}
              placeholder="이메일을 입력"
              sx={{
                fontSize: "0.8rem",
                height: "100%",
                width: "40%",
                boxShadow: "0",
                border: "0",
                borderRadius: "0",
                borderBottom: "solid 2px",
                borderBottomColor: "#d6d6d6",
              }}
              {...register("email", {
                required: "이메일은 필수입력입니다.",
                // pattern: {
                //   value: /\S+@\S+\.\S+/,
                //   message: "이메일 형식에 맞지 않습니다.",
                // },
              })}
            />
          </InformationBoxLine>
          <InformationBoxLine>
            학교
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "60%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
                marginLeft: "1.5rem",
                fontSize: "0.9rem",
              }}
              placeholder="직접입력"
              {...register("college", {
                required: "학교는 필수입력입니다.",
              })}
            />
            학교찾기
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "22%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
                fontSize: "0.9rem",
              }}
              placeholder="학교명 검색"
            />
          </InformationBoxLine>
          <InformationBoxLine style={{ justifyContent: "start" }}>
            학과
            <Input
              disableUnderline={true}
              sx={{
                height: "100%",
                width: "24%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
                fontSize: "0.9rem",
                marginLeft: "2.2rem",
                marginRight: "0.8rem",
              }}
              placeholder="학과"
              {...register("major", {
                required: "학교는 필수입력입니다.",
              })}
            />
            학년
            <FormControl>
              <Controller
                defaultValue=""
                control={control}
                name="grade"
                rules={{ required: "학년은 필수선택입니다." }}
                render={({ field }) => (
                  <Select
                    {...field}
                    disableUnderline={true}
                    sx={{
                      height: "33px",
                      width: "120%",
                      border: "solid 1px #d6d6d6",
                      boxShadow: "0",
                      fontSize: "0.8rem",
                      marginLeft: "0.6rem",
                    }}
                    displayEmpty
                    variant="standard"
                  >
                    <MenuItem
                      disabled
                      value=""
                      sx={{
                        display: "none",
                      }}
                    >
                      <em>학년</em>
                    </MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </InformationBoxLine>
          <InformationBoxLine>
            수업방식
            <div
              style={{
                justifyContent: "space-evenly",
                display: "flex",
                width: "75%",
                height: "100%",
                paddingTop: "0.4rem",
                paddingBottom: "0.4rem",
                backgroundColor: "#f8f8f8",
                fontSize: "0.8rem",
                marginRight: "7.7rem",
              }}
            >
              {teachingStyle.map((value, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    value={value}
                    {...register("act_place", {
                      required: "수업방식은 필수입력입니다.",
                    })}
                  ></input>
                  {value}
                </div>
              ))}
            </div>
          </InformationBoxLine>
          <InformationBoxLine>
            한줄자기소개
            <Input
              disableUnderline={true}
              sx={{
                height: "90%",
                width: "88%",
                borderRadius: "4.2px",
                border: "solid 0.8px #d6d6d6",
                boxShadow: "0",
              }}
              placeholder=""
              {...register("introduction", {
                required: "소개는 필수입력입니다.",
              })}
            />
          </InformationBoxLine>
        </InformationBox>
      </div>

      {/* ---------------3번째칸 아이디 & 비밀번호---------------  */}

      <IdWithPasswordBox>
        <IdWithPasswordLine>
          비밀번호
          <Input
            disableUnderline={true}
            placeholder="비밀번호입력"
            sx={{
              fontSize: "0.8rem",
              height: "100%",
              width: "70%",
              boxShadow: "0",
              border: "0",
              borderRadius: "0",
              borderBottom: "solid 2px",
              borderBottomColor: "#d6d6d6",
            }}
            {...register("password", {
              required: "비밀번호는 필수입력입니다.",
              // pattern: {
              //   value:
              //     /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
              //   message: "특수문자 / 문자 / 숫자 포함 형태의 8~15 자리",
              // },
            })}
          />
        </IdWithPasswordLine>
        <IdWithPasswordLine>
          비밀번호 확인
          <Input
            disableUnderline={true}
            placeholder="비밀번호확인"
            sx={{
              fontSize: "0.8rem",
              height: "100%",
              width: "70%",
              boxShadow: "0",
              border: "0",
              borderRadius: "0",
              borderBottom: "solid 2px",
              borderBottomColor: "#d6d6d6",
            }}
            // {...register("password2", {
            //   required: "비밀번호확인은 필수입력입니다.",
            //   validate: {
            //     confirmPassword: (value) => {
            //       if (getValues("password") !== value) {
            //         return "비밀번호가 일치하지않습니다!.";
            //       }
            //     },
            //   },
            // })}
          />
        </IdWithPasswordLine>
      </IdWithPasswordBox>

      {/* ---------------4번째칸 회원가입버튼---------------  */}

      <SubmitButton>
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          color="primary"
          sx={{
            width: "20%",
            height: "100%",
            fontSize: "80%",
            fontFamily: "NotoSansLight",
            boxShadow: "0",
          }}
          // onClick={props.increaseStep}
        >
          회원가입하기
        </Button>
      </SubmitButton>
    </form>
  );
};

const ImageUpload = styled.div`
  width: 20%;
  height: 89%;
  padding: 1.25rem 1.125rem 0.891rem;
  border-radius: 5px;
  border: solid 1px #d6d6d6;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImageShow = styled.div`
  width: 100%;
  height: 80%;
  background-color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #afafaf;
  font-family: "NotoSansLight";
`;
const InformationBox = styled.div`
  margin-top: 3%;
  margin-left: 2%;
  font-family: "NotoSansMedium";
  height: 100%;
  width: 100%;
  font-size: 0.8rem;
`;
const InformationBoxLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2%;
`;
const IdWithPasswordBox = styled.div`
  margin-top: 3%;
  font-family: NotoSansRegular;
  height: 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 0.8rem;
`;
const IdWithPasswordLine = styled.div`
  width: 35%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SubmitButton = styled.div`
  margin-top: 4%;
  height: 6%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Mentor;
