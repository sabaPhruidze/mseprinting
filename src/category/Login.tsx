// components/Login.tsx
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  LoginContainer,
  LoginForm,
  LoginInput,
  RegisterBox,
} from "../style/LoginStyles";
import {
  REGISTERDATAFIRSTPART,
  REGISTERDATASECONDPART,
  UseFormFirstPart,
  UseFormSecondPart,
} from "../data/LoginData";

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
        <RegisterBox>
          {REGISTERDATAFIRSTPART.map((data) => (
            <LoginInput
              key={data.placeholder}
              placeholder={data.placeholder}
              {...register(data.registerName, {
                required: data.required,
                pattern: {
                  message: data.message,
                  value: data.value,
                },
              })}
            />
          ))}
          {errors.firstname && <div>{errors.firstname.message}</div>}
          {errors.lastname && <div>{errors.lastname.message}</div>}
          {errors.email && <div>{errors.email.message}</div>}
          {errors.emailVerification && (
            <div>{errors.emailVerification.message}</div>
          )}
          {errors.phone && <div>{errors.phone.message}</div>}
        </RegisterBox>
        <RegisterBox>
          {REGISTERDATASECONDPART.map((data) => (
            <LoginInput
              key={data.placeholder}
              placeholder={data.placeholder}
              {...register(data.registerName, {
                required: data.required,
                pattern: {
                  message: data.message,
                  value: data.value,
                },
              })}
            />
          ))}
          {errors.jobTitle && <div>{errors.jobTitle.message}</div>}
          {errors.company && <div>{errors.company.message}</div>}
        </RegisterBox>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
