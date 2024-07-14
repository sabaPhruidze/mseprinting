import React from "react";
import {
  RQFormGroup,
  RQFormLabel,
  RQFormInput,
  RQFormTextarea,
  RQSubmitButton,
  RQInput,
} from "../style/RequestQuoteStyle";

import { LoginButton } from "../style/LoginStyles";

import { useForm } from "react-hook-form";

export default function RQProjectDetailsLeft() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <RQFormGroup>
        <RQInput
          placeholder="Project Name"
          type="text"
          {...register("projectName", { required: true })}
        />
        {errors.projectName && <span>This field is required</span>}
      </RQFormGroup>

      <RQFormGroup>
        <RQInput
          placeholder="Quantity"
          type="number"
          {...register("quantity", { required: true, min: 1 })}
        />
        {errors.quantity && <span>Quantity must be greater than 0</span>}
      </RQFormGroup>

      <RQFormGroup>
        <RQFormLabel htmlFor="description">Project Description</RQFormLabel>
        <RQFormTextarea
          id="description"
          {...register("description", { required: true, maxLength: 700 })}
        />
        {errors.description && <span>Max 700 characters for description</span>}
      </RQFormGroup>

      <RQFormGroup>
        <RQFormLabel htmlFor="dueDate">Project Due Date</RQFormLabel>
        <RQInput
          id="dueDate"
          type="date"
          {...register("dueDate", { required: true })}
          style={{ cursor: "pointer" }}
        />
        {errors.dueDate && <span>This field is required</span>}
      </RQFormGroup>

      <RQFormGroup style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          {...register("terms", { required: true })}
          style={{ margin: "0 5px 2px 0" }}
        />
        <RQFormLabel htmlFor="terms">
          Yes, I agree to the terms and conditions *
        </RQFormLabel>
        {errors.terms && <span>This field is required</span>}
      </RQFormGroup>

      <LoginButton type="submit" style={{ minWidth: "100%" }}>
        Submit
      </LoginButton>
    </form>
  );
}
