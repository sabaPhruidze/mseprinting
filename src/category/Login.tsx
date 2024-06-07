// components/Login.tsx
import { auth, db } from "../config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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

  const onSubmit = async (data: UseFormFirstPart & UseFormSecondPart) => {
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

        console.log("User registered and additional data saved:", user);

        navigate("/");
      } catch (error) {
        console.error("Error registering user:", error);
      }
    }
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
