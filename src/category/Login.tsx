// components/Login.tsx
import React, { useContext } from "react";
import { rootContext } from "../Root";
import { auth, db } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  RegisterContainer,
  RegisterForm,
  LoginButton,
  RegLogContainer,
  LoginContainer,
  LoginForm,
} from "../style/LoginStyles";
import {
  UseFormFirstPart,
  UseFormLogin,
  UseFormSecondPart,
} from "../data/LoginData";
import LoginInputs from "../importantparts/LoginInputs";
import LoginRadio from "../importantparts/LoginRadio";
import RegisterInputs from "../importantparts/RegisterInputs";

function Login() {
  const loginContext = useContext(rootContext);

  if (!loginContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { state, dispatching } = loginContext;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<(UseFormFirstPart & UseFormSecondPart) | UseFormLogin>();

  const onSubmitRegister = async (
    data: UseFormFirstPart & UseFormSecondPart
  ) => {
    const {
      email,
      emailVerification,
      password,
      passwordVerification,
      firstname,
      lastname,
      jobTitle,
      company,
    } = data;

    if (email === emailVerification && password === passwordVerification) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Save additional user info in Firestore
        await setDoc(doc(db, "users", user.uid), {
          firstname,
          lastname,
          email,
          jobTitle,
          company,
          createdAt: new Date(),
        });
        navigate("/");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      console.error("Email or password verification does not match");
    }
  };

  const onSubmitLogin = async (data: UseFormLogin) => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User logged in:", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error logging in user:");
    }
  };

  return (
    <>
      {state.radioForRegLog ? (
        <RegisterContainer>
          <RegisterForm onSubmit={handleSubmit(onSubmitRegister as any)}>
            <LoginRadio />
            <RegLogContainer>
              <RegisterInputs register={register} errors={errors} />
            </RegLogContainer>
            <LoginButton type="submit">Register</LoginButton>
          </RegisterForm>
        </RegisterContainer>
      ) : (
        <LoginContainer>
          <LoginForm onSubmit={handleSubmit(onSubmitLogin as any)}>
            <LoginRadio />
            <LoginInputs register={register} errors={errors} />
            <LoginButton type="submit">Login</LoginButton>
          </LoginForm>
        </LoginContainer>
      )}
    </>
  );
}

export default Login;
