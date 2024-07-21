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
  FormField,
  RUseFormFirstPart,
  RUseFormSecondPart,
} from "../types/DataTypes";

interface RegisterInputsProps {
  register: UseFormRegister<RUseFormFirstPart & RUseFormSecondPart>;
  errors: FieldErrors<RUseFormFirstPart & RUseFormSecondPart>;
  firstPartFields: FormField<RUseFormFirstPart>[];
  secondPartFields: FormField<RUseFormSecondPart>[];
}

const RegisterInputs: React.FC<RegisterInputsProps> = ({
  register,
  errors,
  firstPartFields,
  secondPartFields,
}) => {
  // Function to format phone number
  const formatPhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length > 6) {
      event.target.value = `${input.slice(0, 3)}-${input.slice(
        3,
        6
      )}-${input.slice(6, 10)}`;
    } else if (input.length > 3) {
      event.target.value = `${input.slice(0, 3)}-${input.slice(3, 6)}`;
    } else {
      event.target.value = input;
    }
  };

  return (
    <RegLogContainer>
      <RegisterBoxOne>
        {firstPartFields.map((data) => (
          <div key={data.placeholder}>
            <RegisterInput
              placeholder={data.placeholder}
              {...register(
                data.registerName as keyof (RUseFormFirstPart &
                  RUseFormSecondPart),
                {
                  required: data.required,
                  pattern: {
                    message: data.message,
                    value: new RegExp(data.value), // Ensure value is a RegExp
                  },
                }
              )}
              onInput={
                data.registerName === "phone" ? formatPhoneNumber : undefined
              }
              maxLength={data.registerName === "phone" ? 12 : undefined}
            />
            {errors[data.registerName] && (
              <ErrorMessage>{errors[data.registerName]?.message}</ErrorMessage>
            )}
          </div>
        ))}
      </RegisterBoxOne>
      <RegisterBoxTwo>
        {secondPartFields.map((data) => (
          <div key={data.placeholder}>
            <RegisterInput
              placeholder={data.placeholder}
              {...register(
                data.registerName as keyof (RUseFormFirstPart &
                  RUseFormSecondPart),
                {
                  required: data.required,
                  pattern: {
                    message: data.message,
                    value: new RegExp(data.value), // Ensure value is a RegExp
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
