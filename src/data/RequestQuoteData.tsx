export type RQUseFormFirstPart = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  phone: string;
};

export type RQUseFormSecondPart = {
  jobTitle: string;
  company: string;
  extention: string;
};

export type RQUseFormThirdPart = {
  projectName: string;
  quantity: number;
  description: string;
  dueDate: string;
  terms: boolean;
};

type FormField<T> = {
  placeholder: string;
  registerName: keyof T;
  required: boolean;
  message: string;
  value: RegExp;
};

export const RQDATAFIRSTPART: FormField<RQUseFormFirstPart>[] = [
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
];

export const RQDATASECONDPART: FormField<RQUseFormSecondPart>[] = [
  {
    placeholder: "Job title",
    registerName: "jobTitle",
    required: true,
    message:
      "Enter at least 3 English alphabet characters. If you do not have a Job title, please write 'NaN' in the Job title field.",
    value: /^[a-zA-Z\s]{3,}$/,
  },
  {
    placeholder: "Company",
    registerName: "company",
    required: true,
    message:
      "Please enter at least 3 English alphabet characters. If you do not have a company affiliation, please write 'NaN' in the company field.",
    value: /^[a-zA-Z\s]{3,}$/,
  },
  {
    placeholder: "Extension",
    registerName: "extention",
    required: true,
    message:
      "You can enter any additional information you feel like you want to be provided.",
    value: /^.*$/,
  },
];

export const RQDATATHIRDPART: FormField<RQUseFormThirdPart>[] = [
  {
    placeholder: "Project Name",
    registerName: "projectName",
    required: true,
    message: "Please enter the project name.",
    value: /^.*$/,
  },
  {
    placeholder: "Quantity",
    registerName: "quantity",
    required: true,
    message: "Quantity must be greater than 0.",
    value: /^\d+$/,
  },
  {
    placeholder: "Project Description",
    registerName: "description",
    required: true,
    message: "Max 700 characters for description.",
    value: /^.{1,700}$/,
  },
  {
    placeholder: "Project Due Date",
    registerName: "dueDate",
    required: true,
    message: "Please enter the project due date.",
    value: /^\d{4}-\d{2}-\d{2}$/,
  },
  {
    placeholder: "Terms and Conditions",
    registerName: "terms",
    required: true,
    message: "This field is required.",
    value: /true|false/,
  },
];
