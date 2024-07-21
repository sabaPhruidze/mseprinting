import { useContext, useState } from "react";
import { rootContext } from "../Root";
import { auth, db } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import {
  RegisterContainer,
  RegisterForm,
  LoginButton,
  ErrorMessage,
} from "../style/LoginStyles";

import { RUseFormFirstPart, RUseFormSecondPart } from "../types/DataTypes";

import RegisterInputs from "../importantparts/RegisterInputs";

function Register() {
  const registerContext = useContext(rootContext);

  if (!registerContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching } = registerContext;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RUseFormFirstPart & RUseFormSecondPart>();

  // State to manage the verification error message display
  const [verificationError, setVerificationError] = useState("");

  const onSubmitRegister = async (
    data: RUseFormFirstPart & RUseFormSecondPart
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

        dispatching("SET_USER", {
          firstname,
          lastname,
          email,
          uid: user.uid,
        });

        navigate("/");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      setVerificationError("Email or password verification does not match");
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(onSubmitRegister)}>
        <RegisterInputs register={register} errors={errors} />
        {verificationError && <ErrorMessage>{verificationError}</ErrorMessage>}
        <LoginButton type="submit">Register</LoginButton>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
