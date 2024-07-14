import React from "react";
import {
  RQFormGroup,
  RQFormLabel,
  RQFormTextarea,
  RQInput,
} from "../style/RequestQuoteStyle";
import { LoginButton } from "../style/LoginStyles";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import {
  RQUseFormFirstPart,
  RQUseFormSecondPart,
  RQUseFormThirdPart,
} from "../data/RequestQuoteData";
import { ErrorMessage } from "../style/LoginStyles";

interface RQProjectDetailsLeftProps {
  collectInfoLeft: UseFormRegister<
    RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart
  >;
  errors: FieldErrors<
    RQUseFormFirstPart & RQUseFormSecondPart & RQUseFormThirdPart
  >;
}

const RQProjectDetailsLeft: React.FC<RQProjectDetailsLeftProps> = ({
  collectInfoLeft,
  errors,
}) => {
  return (
    <>
      <RQFormGroup>
        <RQInput
          placeholder="Project Name"
          type="text"
          {...collectInfoLeft("projectName", { required: true })}
        />
        {errors.projectName && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </RQFormGroup>

      <RQFormGroup>
        <RQInput
          placeholder="Quantity"
          type="number"
          {...collectInfoLeft("quantity", { required: true, min: 1 })}
        />
        {errors.quantity && (
          <ErrorMessage>Quantity must be greater than 0</ErrorMessage>
        )}
      </RQFormGroup>

      <RQFormGroup>
        <RQFormLabel htmlFor="description">Project Description</RQFormLabel>
        <RQFormTextarea
          id="description"
          {...collectInfoLeft("description", {
            required: true,
            maxLength: 700,
          })}
        />
        {errors.description && (
          <ErrorMessage>Max 700 characters for description</ErrorMessage>
        )}
      </RQFormGroup>

      <RQFormGroup>
        <RQFormLabel htmlFor="dueDate">Project Due Date</RQFormLabel>
        <RQInput
          id="dueDate"
          type="date"
          {...collectInfoLeft("dueDate", { required: true })}
          style={{ cursor: "pointer" }}
        />
        {errors.dueDate && <ErrorMessage>This field is required</ErrorMessage>}
      </RQFormGroup>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <RQFormGroup style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            {...collectInfoLeft("terms", { required: true })}
            style={{ margin: "0 5px 2px 0" }}
          />
          <RQFormLabel htmlFor="terms">
            Yes, I agree to the terms and conditions *
          </RQFormLabel>
        </RQFormGroup>
        {errors.terms && <ErrorMessage>This field is required</ErrorMessage>}
      </div>

      <LoginButton type="submit" style={{ minWidth: "100%" }}>
        Submit
      </LoginButton>
    </>
  );
};

export default RQProjectDetailsLeft;
