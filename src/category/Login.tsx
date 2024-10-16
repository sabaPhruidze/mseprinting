import { useContext, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { rootContext } from "../Root";
import { auth, db } from "../config/Firebase";
import {
  ErrorMessage,
  LoginButton,
  LoginContainer,
  LoginForm,
} from "../style/LoginStyles";
import LoginInputs from "../importantparts/LoginInputs";
import { LUseForm } from "../types/DataTypes";

function Login() {
  const loginContext = useContext(rootContext);
  if (!loginContext) return null;

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
      try {
        const { email, password } = data;
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        const userDoc = await getDoc(doc(db, "users", user.uid));
        const userData = userDoc.data();

        if (userData) {
          dispatching("USER_INFO", { ...userData, uid: user.uid });
          navigate("/");
        } else {
          setLoginError(true);
        }
      } catch (error) {
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
