import {
  RUseFormFirstPart,
  RUseFormSecondPart,
  FormField,
  LUseForm,
} from "../types/DataTypes";

export const REGISTERDATAFIRSTPART: FormField<RUseFormFirstPart>[] = [
  {
    placeholder: "First name *",
    registerName: "firstname",
    required: true,
    message:
      "Please enter at least 3 English alphabet characters (without space)",
    value: /^[a-zA-Z]{3,}$/,
  },
  {
    placeholder: "Last name *",
    registerName: "lastname",
    required: true,
    message:
      "Please enter at least 3 English alphabet characters (without space)",
    value: /^[a-zA-Z]{3,}$/,
  },
  {
    placeholder: "Email *",
    registerName: "email",
    required: true,
    message:
      "Please enter an email address (e.g., example.email+test@example-domain.com) with alphanumeric characters and certain symbols before and after the @ symbol, ending with a dot and at least two letters.",
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    placeholder: "Email verification *",
    registerName: "emailVerification",
    required: true,
    message: "The email address entered is invalid.",
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    placeholder: "Phone *",
    registerName: "phone",
    required: true,
    message: "Please provide the phone number in the 'xxx-xxx-xxxx' format.",
    value: /^\d{3}-\d{3}-\d{4}$/,
  },
];

export const REGISTERDATASECONDPART: FormField<RUseFormSecondPart>[] = [
  {
    placeholder: "Password (e.g., mseprinting1) *",
    registerName: "password",
    required: true,
    message:
      "Enter at least 6 English alphabet characters, one number and one symbol (e.g., mseprinting1)",
    value: /^(?=.*[a-zA-Z]{6,})(?=.*\d).+$/,
  },
  {
    placeholder: "Password verification *",
    registerName: "passwordVerification",
    required: true,
    message: "The password address entered is invalid.",
    value: /^(?=.*[a-zA-Z]{6,})(?=.*\d).+$/,
  },
  {
    placeholder: "Job title",
    registerName: "jobTitle",
    required: false,
    message: "",
    value: /^[a-zA-Z\s]{3,}$/,
  },
  {
    placeholder: "Company *",
    registerName: "company",
    required: true,
    message:
      "Please enter at least 3 English alphabet character.If you do not have a company affiliation, please write 'NaN' in the company field.",
    value: /^[a-zA-Z\s]{3,}$/,
  },
];
export const LOGINDATA: FormField<LUseForm>[] = [
  {
    placeholder: "Email",
    registerName: "email",
    required: true,
    message: "The email is not correct",
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    placeholder: "Password (e.g., mseprinting1)",
    registerName: "password",
    required: true,
    message:
      "Enter at least 6 English alphabet characters, one number (e.g., mseprinting1)",
    value: /^(?=.*[a-zA-Z]{6,})(?=.*\d).+$/,
  },
];
