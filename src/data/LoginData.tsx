type UseForm = {
  firstname: string;
  lastname: string;
  email: string;
  emailVerification: string;
  phone: number;
  password: string;
  optionalJobTitle: string;
  optionalCompany: string;
};

export const LOGINDATA: {
  placeholder: string;
  registerName: keyof UseForm;
  required: boolean;
  message: string;
  value: RegExp;
}[] = [
  {
    placeholder: "First name",
    registerName: "firstname",
    required: true,
    message: "only english letters, at least 3",
    value: /^[A-Za-z][A-Za-z]*$/,
  },
  {
    placeholder: "Last name",
    registerName: "lastname",
    required: true,
    message: "only english letters, at least 3",
    value: /^[A-Za-z][A-Za-z]*$/,
  },
  {
    placeholder: "Email",
    registerName: "email",
    required: true,
    message: "only english letters @gmail.com or @yahoo.com",
    value: /^[A-Za-z][A-Za-z]*$/,
  },
  {
    placeholder: "EmailVerification",
    registerName: "email",
    required: true,
    message: "only english letters @gmail.com or @yahoo.com",
    value: /^[A-Za-z][A-Za-z]*$/,
  },
  {
    placeholder: "Phone",
    registerName: "phone",
    required: true,
    message: "only USA numbers such as +1 (XXX) XXX-XXXX",
    value: /^[A-Za-z][A-Za-z]*$/,
  },
];
