// components/RegisterInputs.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { RegisterInput, RegisterBox, ErrorMessage } from "../style/LoginStyles";
import {
  REGISTERDATAFIRSTPART,
  REGISTERDATASECONDPART,
  UseFormFirstPart,
  UseFormSecondPart,
  UseFormLogin,
} from "../data/LoginData";

interface RegisterInputsProps {
  register: UseFormRegister<
    (UseFormFirstPart & UseFormSecondPart) | UseFormLogin
  >;
  errors: FieldErrors<UseFormFirstPart & UseFormSecondPart>;
}

const RegisterInputs: React.FC<RegisterInputsProps> = ({
  register,
  errors,
}) => {
  return (
    <>
      <RegisterBox>
        {REGISTERDATAFIRSTPART.map((data) => (
          <div key={data.placeholder}>
            <RegisterInput
              placeholder={data.placeholder}
              {...register(
                data.registerName as keyof (UseFormFirstPart &
                  UseFormSecondPart),
                {
                  required: data.required,
                  pattern: {
                    message: data.message,
                    value: data.value,
                  },
                }
              )}
            />
            {errors[data.registerName] && (
              <ErrorMessage>{errors[data.registerName]?.message}</ErrorMessage>
            )}
          </div>
        ))}
      </RegisterBox>
      <RegisterBox>
        {REGISTERDATASECONDPART.map((data) => (
          <div key={data.placeholder}>
            <RegisterInput
              placeholder={data.placeholder}
              {...register(
                data.registerName as keyof (UseFormFirstPart &
                  UseFormSecondPart),
                {
                  required: data.required,
                  pattern: {
                    message: data.message,
                    value: data.value,
                  },
                }
              )}
            />
            {errors[data.registerName] && (
              <ErrorMessage>{errors[data.registerName]?.message}</ErrorMessage>
            )}
          </div>
        ))}
      </RegisterBox>
    </>
  );
};

export default RegisterInputs;