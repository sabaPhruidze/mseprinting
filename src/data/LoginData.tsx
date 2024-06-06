export type UseFormFirstPart = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  phone: string;
  password: string;
  passwordVerification: string;
};

export type UseFormSecondPart = {
  jobTitle: string;
  company: string;
};

type FormField<T> = {
  placeholder: string;
  registerName: keyof T;
  required: boolean;
  message: string;
  value: RegExp;
};

export const REGISTERDATAFIRSTPART: FormField<UseFormFirstPart>[] = [
  {
    placeholder: "First name",
    registerName: "firstname",
    required: true,
    message: "Please enter at least 3 English alphabet characters.",
    value: /^[a-zA-Z]{3,}$/,
  },
  {
    placeholder: "Last name",
    registerName: "lastname",
    required: true,
    message: "Please enter at least 3 English alphabet characters.",
    value: /^[a-zA-Z]{3,}$/,
  },
  {
    placeholder: "Email",
    registerName: "email",
    required: true,
    message:
      "Please enter an email address (e.g., example.email+test@example-domain.com) with alphanumeric characters and certain symbols before and after the @ symbol, ending with a dot and at least two letters.",
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    placeholder: "Email verification",
    registerName: "emailVerification",
    required: true,
    message: "The email address entered is invalid.",
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    placeholder: "Phone",
    registerName: "phone",
    required: true,
    message: "Please provide the phone number in the 'xxx-xxx-xxxx' format.",
    value: /^\d{3}-\d{3}-\d{4}$/,
  },
  {
    placeholder: "Password",
    registerName: "password",
    required: true,
    message:
      "Enter at least 3 English alphabet characters, one number and one symbol (e.g., mse1@)",
    value: /^(?=.*[a-zA-Z]{3,})(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/,
  },
  {
    placeholder: "Password verification",
    registerName: "passwordVerification",
    required: true,
    message: "The password address entered is invalid.",
    value: /^(?=.*[a-zA-Z]{3,})(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]+$/,
  },
];

export const REGISTERDATASECONDPART: FormField<UseFormSecondPart>[] = [
  {
    placeholder: "Job title",
    registerName: "jobTitle",
    required: true,
    message: "enter at least 3 English alphabet characters.",
    value: /^[a-zA-Z]{3,}$/,
  },
  {
    placeholder: "Company",
    registerName: "company",
    required: true,
    message: "Please enter at least 1 English alphabet character.",
    value: /^[a-zA-Z]{1,}$/,
  },
];
