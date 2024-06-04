import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginContainer, LoginForm, LoginInput } from "../style/LoginStyles";
import { LOGINDATA } from "../data/LoginData";
import { Placeholder } from "react-bootstrap";
function Login() {
  type UseForm = {
    firstname: string;
    lastname: string;
    email: string;
    emailVerification: string;
    phone: number;
    password: string;
    optionalJobTitle: string;
    optionalCompany: string;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UseForm>();
  const navigate = useNavigate();

  const passwordMessage =
    "minimum 8 characters,at least one letter and one number";

  const onSubmit = (data: UseForm) => {
    console.log("saba");
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        {LOGINDATA.map((data) => (
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
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
