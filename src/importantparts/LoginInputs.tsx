// components/LoginInputs.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput, ErrorMessage } from "../style/LoginStyles";
import { LOGINDATA, UseFormLogin } from "../data/LoginData";

interface LoginInputsProps {
  register: UseFormRegister<UseFormLogin>;
  errors: FieldErrors<UseFormLogin>;
}

const LoginInputs: React.FC<LoginInputsProps> = ({ register, errors }) => {
  return (
    <>
      {LOGINDATA.map((data) => (
        <div key={data.placeholder}>
          <RegisterInput
            placeholder={data.placeholder}
            {...register(data.registerName as keyof UseFormLogin, {
              required: data.required,
              pattern: {
                message: data.message,
                value: data.value,
              },
            })}
          />
          {errors[data.registerName] && (
            <ErrorMessage>{errors[data.registerName]?.message}</ErrorMessage>
          )}
        </div>
      ))}
    </>
  );
};

export default LoginInputs;
