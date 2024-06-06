// components/Login.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  LoginButton,
  RegLogContainer,
} from "../style/LoginStyles";
import { UseFormFirstPart, UseFormSecondPart } from "../data/LoginData";
import RegisterInputs from "../importantparts/RegisterInputs";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseFormFirstPart & UseFormSecondPart>();
  const navigate = useNavigate();

  const onSubmit = (data: UseFormFirstPart & UseFormSecondPart) => {
    console.log("saba", data);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <RegLogContainer>
          <RegisterInputs register={register} errors={errors} />
        </RegLogContainer>
        <LoginButton type="submit">Register</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
