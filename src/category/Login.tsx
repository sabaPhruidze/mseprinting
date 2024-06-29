// Login.tsx
import { useContext } from "react";
import { rootContext } from "../Root";
import { auth, db } from "../config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginButton, LoginContainer, LoginForm } from "../style/LoginStyles";
import { UseFormLogin } from "../data/LoginData";
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
  } = useForm<UseFormLogin>();

  const onSubmitLogin = async (data: UseFormLogin) => {
    const { email, password } = data;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch additional user info from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.data();

      if (userData) {
        dispatching("USER_INFO", {
          firstname: userData.firstname,
          lastname: userData.lastname,
          email: userData.email,
          uid: user.uid,
        });
        navigate("/");
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error logging in user:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmitLogin as any)}>
        <LoginInputs register={register} errors={errors} />
        <LoginButton type="submit">Login</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
