import React, {
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
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
import {
  RUseFormFirstPart,
  RUseFormSecondPart,
  FormField,
} from "../types/DataTypes";
import RegisterInputs from "../importantparts/RegisterInputs";
import { fetchRegisterDataRFP, fetchRegisterDataRSP } from "../data/LoginData";

function Register() {
  const registerContext = useContext(rootContext);

  if (!registerContext) {
    throw new Error("rootContext must be used within a Root provider");
  }

  const { dispatching, state } = registerContext;
  const navigate = useNavigate();

  const [firstPartFields, setFirstPartFields] = useState<
    FormField<RUseFormFirstPart>[]
  >([]);
  const [secondPartFields, setSecondPartFields] = useState<
    FormField<RUseFormSecondPart>[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const firstPart = await fetchRegisterDataRFP();
      const secondPart = await fetchRegisterDataRSP();
      setFirstPartFields(firstPart);
      setSecondPartFields(secondPart);
    };

    fetchData();
  }, []); // Only run once when the component mounts

  const defaultValues = useMemo(() => {
    return state.user
      ? {
          firstname: state.user.firstname,
          lastname: state.user.lastname,
          email: state.user.email,
          emailVerification: state.user.email,
          phone: state.user.phone || "",
          jobTitle: state.user.jobTitle || "",
          company: state.user.company || "",
          password: "",
          passwordVerification: "",
        }
      : {};
  }, [state.user]); // Include dependencies to prevent unnecessary recalculations

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RUseFormFirstPart & RUseFormSecondPart>({
    defaultValues,
  });

  const [verificationError, setVerificationError] = useState("");

  const onSubmitRegister = useCallback(
    async (data: RUseFormFirstPart & RUseFormSecondPart) => {
      const {
        email,
        emailVerification,
        password,
        passwordVerification,
        firstname,
        lastname,
        jobTitle,
        phone,
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

          await setDoc(doc(db, "users", user.uid), {
            firstname,
            lastname,
            email,
            jobTitle,
            phone,
            company,
            createdAt: new Date(),
          });

          dispatching("SET_USER", {
            firstname,
            lastname,
            email,
            jobTitle,
            phone,
            company,
            uid: user.uid,
          });

          navigate("/");
        } catch (error) {
          console.error("Error registering user:", error);
        }
      } else {
        setVerificationError("Email or password verification does not match");
      }
    },
    [dispatching, navigate] // Include dependencies to prevent unnecessary re-renders
  );

  return (
    <RegisterContainer>
      <RegisterForm onSubmit={handleSubmit(onSubmitRegister)}>
        <RegisterInputs
          register={register}
          errors={errors}
          firstPartFields={firstPartFields}
          secondPartFields={secondPartFields}
        />
        {verificationError && <ErrorMessage>{verificationError}</ErrorMessage>}
        <LoginButton type="submit">Register</LoginButton>
      </RegisterForm>
    </RegisterContainer>
  );
}

export default React.memo(Register);
