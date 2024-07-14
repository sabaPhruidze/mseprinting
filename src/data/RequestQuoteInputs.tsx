import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { ErrorMessage, RegLogContainer } from "../style/LoginStyles";
import { RQInput } from "../style/RequestQuoteStyle";
import {
  RQUseFormFirstPart,
  RQUseFormSecondPart,
  RQDATAFIRSTPART,
  RQDATASECONDPART,
} from "../data/RequestQuoteData";
import styled from "styled-components";

interface RQInputsProps {
  collectInfo: UseFormRegister<RQUseFormFirstPart & RQUseFormSecondPart>;
  errors: FieldErrors<RQUseFormFirstPart & RQUseFormSecondPart>;
  section: "firstPart" | "secondPart";
}

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RequestQouteInputs: React.FC<RQInputsProps> = ({
  collectInfo,
  errors,
  section,
}) => {
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

  const dataPart = section === "firstPart" ? RQDATAFIRSTPART : RQDATASECONDPART;

  return (
    <RegLogContainer>
      <ColumnContainer>
        {dataPart.map((data) => (
          <div key={data.placeholder}>
            <RQInput
              placeholder={data.placeholder}
              {...collectInfo(
                data.registerName as keyof (RQUseFormFirstPart &
                  RQUseFormSecondPart),
                {
                  required: data.required,
                  pattern: {
                    message: data.message,
                    value: data.value,
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
      </ColumnContainer>
    </RegLogContainer>
  );
};

export default RequestQouteInputs;
