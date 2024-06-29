// components/RegisterInputs.tsx
import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import {
  RegisterInput,
  RegisterBoxOne,
  RegisterBoxTwo,
  ErrorMessage,
  RegLogContainer,
} from "../style/LoginStyles";
import {
  REGISTERDATAFIRSTPART,
  REGISTERDATASECONDPART,
  UseFormFirstPart,
  UseFormSecondPart,
} from "../data/LoginData";

interface RegisterInputsProps {
  register: UseFormRegister<UseFormFirstPart & UseFormSecondPart>;
  errors: FieldErrors<UseFormFirstPart & UseFormSecondPart>;
}

const RegisterInputs: React.FC<RegisterInputsProps> = ({
  register,
  errors,
}) => {
  return (
    <RegLogContainer>
      <RegisterBoxOne>
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
      </RegisterBoxOne>
      <RegisterBoxTwo>
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
      </RegisterBoxTwo>
    </RegLogContainer>
  );
};

export default RegisterInputs;
