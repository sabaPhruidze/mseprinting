import React from "react";
import {
  RQFormGroup,
  RQFormLabel,
  RQFormTextarea,
  RQInput,
} from "../style/RequestQuoteStyle";
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
          id="projectName" // Add id if needed for accessibility (no label references it, but it's good practice)
          placeholder="Project Name *"
          type="text"
          autoComplete="off"
          {...collectInfoLeft("projectName", { required: true })}
        />
        {errors.projectName && (
          <ErrorMessage>This field is required</ErrorMessage>
        )}
      </RQFormGroup>

      <RQFormGroup>
        <RQInput
          id="quantity" // Similarly, good practice even if no label references it
          placeholder="Quantity *"
          type="text"
          autoComplete="off"
          {...collectInfoLeft("quantity", { required: true })}
        />
        {errors.quantity && <ErrorMessage>This field is required</ErrorMessage>}
      </RQFormGroup>

      <RQFormGroup>
        <RQFormLabel htmlFor="description">Project Description *</RQFormLabel>
        <RQFormTextarea
          id="description"
          autoComplete="off"
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
        <RQFormLabel htmlFor="dueDate">Project Due Date *</RQFormLabel>
        <RQInput
          id="dueDate"
          type="date"
          autoComplete="off"
          {...collectInfoLeft("dueDate", { required: true })}
          style={{ cursor: "pointer" }}
        />
        {errors.dueDate && <ErrorMessage>This field is required</ErrorMessage>}
      </RQFormGroup>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <RQFormGroup style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            id="terms" // Add id to match label htmlFor
            {...collectInfoLeft("terms", { required: true })}
            style={{ margin: "0 5px 2px 0" }}
          />
          <RQFormLabel htmlFor="terms">
            Yes, I agree to the terms and conditions *
          </RQFormLabel>
        </RQFormGroup>
        {errors.terms && <ErrorMessage>This field is required</ErrorMessage>}
      </div>
    </>
  );
};

export default RQProjectDetailsLeft;
