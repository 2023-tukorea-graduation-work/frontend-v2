import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Checkbox, FormControlLabel, Switch } from "@mui/material";
import { useForm } from "react-hook-form";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { changeUserGB, loginAsync } from "../../../../slice/user/loginSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const loginState = useAppSelector((state) => state.login.status);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [toggle, setToggle] = useState(user_gb);
  const toggleOnChange = () => {
    toggle === "MENTEE" ? setToggle("MENTO") : setToggle("MENTEE");
  };
  // useEffect(() => {
  //   if (loginState === "SUCCESS") {
  //     navigate("/programList");
  //   }
  // }, [loginState]);
  useEffect(() => {
    dispatch(changeUserGB(toggle));
  }, [toggle]);
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => {
    data.user_gb = toggle;
    dispatch(loginAsync(data));
  };
  const onError = (error: any) => {
    console.log(error);
  };
  return (
    <>
      <LogoStyled>{/* <Logo>{loginState}</Logo> */}</LogoStyled>

      <FormStyled>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormControlLabel
            sx={{
              marginTop: "8rem",
              width: "100%",
              fontFamily: "NotoSansLight",
              color: "#777",
              fontSize: "0.7rem",
            }}
            control={
              <Switch
                onChange={toggleOnChange}
                checked={user_gb === "MENTEE"}
              />
            }
            label={user_gb}
          />
          <Input
            id="email"
            placeholder="이메일주소 OR 전화번호 입력"
            fullWidth={true}
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            startAdornment={
              <InputAdornment position="start">
                <PersonOutlineOutlinedIcon fontSize="medium" />
              </InputAdornment>
            }
            disableUnderline={true}
            {...register("email", {
              required: "이메일은 필수입력입니다.",
            })}
          />
          <Input
            id="passWord"
            placeholder="비밀번호 입력"
            sx={{ marginTop: "1rem" }}
            fullWidth={true}
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            startAdornment={
              <InputAdornment position="start">
                <LockOutlinedIcon fontSize="medium" />
              </InputAdornment>
            }
            disableUnderline={true}
            {...register("password", {
              required: "비밀번호은 필수입력입니다.",
            })}
          />
          <CheckStyled>
            <Checkbox color={user_gb === "MENTEE" ? "primary" : "secondary"} />
            로그인 상태 유지
          </CheckStyled>
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="contained"
            color={user_gb === "MENTEE" ? "primary" : "secondary"}
            fullWidth={true}
            sx={{ fontSize: "1rem", fontFamily: "NotoSansMedium" }}
          >
            로그인
          </Button>
        </form>
      </FormStyled>
    </>
  );
};

const FormStyled = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  width: 80%;
  height: 30rem;
  border: 1px;
  border-radius: 20px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const CheckStyled = styled.div`
  justify-content: start;
  display: flex;
  align-items: center;
  font-family: NotoSansLight;
  color: #777;
  font-size: 0.7rem;
`;
const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6rem;
  // border: 1px solid red;
  width: 100%;
  height: 1rem;
`;
const Logo = styled.div`
  // border: 1px solid blue;
  width: 10rem;
  height: 6rem;
  text-align: center;
`;

export default LoginForm;
