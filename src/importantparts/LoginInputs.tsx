// components/LoginInputs.tsx
import React, { useEffect, useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput, ErrorMessage } from "../style/LoginStyles";
import { fetchRegisterDataL } from "../data/LoginData"; // Ensure this function is defined
import { FormField, LUseForm } from "../types/DataTypes";

interface LoginInputsProps {
  register: UseFormRegister<LUseForm>;
  errors: FieldErrors<LUseForm>;
}

const LoginInputs: React.FC<LoginInputsProps> = ({ register, errors }) => {
  const [loginData, setLoginData] = useState<FormField<LUseForm>[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchRegisterDataL();
      setLoginData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {loginData.map((data) => (
        <div key={data.placeholder}>
          <RegisterInput
            placeholder={data.placeholder}
            {...register(data.registerName as keyof LUseForm, {
              required: data.required,
              pattern: {
                message: data.message,
                value: new RegExp(data.value), // Ensure value is a RegExp
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
