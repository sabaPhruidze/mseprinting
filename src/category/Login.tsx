import { useContext, useState, useCallback } from "react";
import { rootContext } from "../Root";
import { auth, db } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  ErrorMessage,
  LoginButton,
  LoginContainer,
  LoginForm,
} from "../style/LoginStyles";
import { LUseForm } from "../types/DataTypes";
import LoginInputs from "../importantparts/LoginInputs";

function Login() {
  const loginContext = useContext(rootContext);

  if (!loginContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching } = loginContext;
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LUseForm>();

  const [loginError, setLoginError] = useState(false);

  const onSubmitLogin = useCallback(
    async (data: LUseForm) => {
      const { email, password } = data;
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();

        if (userData) {
          dispatching("USER_INFO", {
            firstname: userData.firstname,
            lastname: userData.lastname,
            email: userData.email,
            jobTitle: userData.jobTitle,
            phone: userData.phone,
            company: userData.company,
            uid: user.uid,
          });
          navigate("/");
        } else {
          console.error("No such document!");
          setLoginError(true);
        }
      } catch (error) {
        console.error("Error logging in user:", error);
        setLoginError(true);
      }
    },
    [dispatching, navigate]
  );

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmitLogin)}>
        <LoginInputs register={register} errors={errors} />
        {loginError && (
          <ErrorMessage>User Email or Password is not correct</ErrorMessage>
        )}
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
