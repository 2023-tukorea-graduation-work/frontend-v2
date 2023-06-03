import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, Checkbox, FormControlLabel, Switch } from "@mui/material";
import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login.status);
  const user_gb = useAppSelector((state) => state.login.object.user_gb);
  const [toggle, setToggle] = useState(user_gb);
  const toggleOnChange = () => {
    toggle === "MENTEE" ? setToggle("MENTO") : setToggle("MENTEE");
  };
  useEffect(() => {
    if (loginState === "SUCCESS") {
      navigate("/programList");
    }
  }, [loginState]);
  useEffect(() => {}, [toggle]);
  const {
    control,
    register,
    getValues,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => {
    data.user_gb = toggle;
  };
  const onError = (error: any) => {
    console.log(error);
  };
  return (
    <FormStyled>
      <p
        style={{
          fontFamily: "NotoSansBold",
          fontSize: "2rem",
          marginBottom: "3rem",
        }}
      >
        Admin Login
      </p>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Input
          id="email"
          placeholder="아아디 입력"
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
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="contained"
          color={user_gb === "MENTEE" ? "primary" : "secondary"}
          fullWidth={true}
          sx={{
            fontSize: "1rem",
            fontFamily: "NotoSansMedium",
            marginTop: "1rem",
          }}
        >
          로그인
        </Button>
      </form>
    </FormStyled>
  );
};
const FormStyled = styled.div`
  margin-top: 10rem;
  padding-left: 10%;
  padding-right: 10%;
  width: 80%;
  height: 25rem;
  border: 1px;
  border-radius: 20px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export default AdminLogin;
