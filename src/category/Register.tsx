import { useContext } from "react";
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
} from "../style/LoginStyles";
import { UseFormFirstPart, UseFormSecondPart } from "../data/LoginData";

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
  } = useForm<UseFormFirstPart & UseFormSecondPart>();

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

        dispatching("SET_USER", {
          firstname,
          lastname,
          email,
          uid: user.uid,
        });

        navigate("/login");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    } else {
      console.error("Email or password verification does not match");
    }
  };

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(onSubmitRegister)}>
        <RegisterInputs register={register} errors={errors} />
        <LoginButton type="submit">Register</LoginButton>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default Register;
