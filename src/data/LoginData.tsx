import { GeneralizedFetch } from "../importantparts/GeneralizedFetch";
import {
  RUseFormFirstPart,
  RUseFormSecondPart,
  FormField,
  LUseForm,
} from "../types/DataTypes";

// Helper function to convert string values to RegExp
const convertToRegExp = <T,>(formFields: FormField<T>[]): FormField<T>[] => {
  return formFields.map((field) => ({
    ...field,
    value: new RegExp(field.value), // Convert string back to RegExp
  }));
};

// Fetch functions
export const fetchRegisterDataRFP = async (): Promise<
  FormField<RUseFormFirstPart>[]
> => {
  const data = await GeneralizedFetch<{ data: FormField<RUseFormFirstPart>[] }>(
    "authentication",
    "REGISTERDATAFIRSTPART"
  );
  return data ? convertToRegExp<RUseFormFirstPart>(data.data) : [];
};

export const fetchRegisterDataRSP = async (): Promise<
  FormField<RUseFormSecondPart>[]
> => {
  const data = await GeneralizedFetch<{
    data: FormField<RUseFormSecondPart>[];
  }>("authentication", "REGISTERDATASECONDPART");
  return data ? convertToRegExp<RUseFormSecondPart>(data.data) : [];
};

export const fetchRegisterDataL = async (): Promise<FormField<LUseForm>[]> => {
  const data = await GeneralizedFetch<{ data: FormField<LUseForm>[] }>(
    "authentication",
    "LOGINDATA"
  );
  return data ? convertToRegExp<LUseForm>(data.data) : [];
};
