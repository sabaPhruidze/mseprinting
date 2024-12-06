import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { RQFormData } from "../data/RequestQuoteData";

const sendEmailTemplate = (
  data: RQFormData,
  templateId: string
): Promise<EmailJSResponseStatus> => {
  const form = document.createElement("form");
  form.style.display = "none";

  form.appendChild(createInput("firstname", data.firstname));
  form.appendChild(createInput("lastname", data.lastname));
  form.appendChild(createInput("email", data.email));
  form.appendChild(createInput("phone", data.phone));
  form.appendChild(createInput("jobTitle", data.jobTitle));
  form.appendChild(createInput("company", data.company));
  form.appendChild(createInput("projectName", data.projectName));
  form.appendChild(createInput("quantity", data.quantity.toString()));
  form.appendChild(createInput("description", data.description));
  form.appendChild(createInput("dueDate", data.dueDate));
  form.appendChild(createInput("terms", data.terms.toString()));
  form.appendChild(createInput("representative", data.representative));

  // Append all file URLs, up to 8
  data.uploadedFiles?.slice(0, 8).forEach((fileUrl: string, index: number) => {
    form.appendChild(createInput(`file${index + 1}`, fileUrl));
  });

  document.body.appendChild(form);

  return emailjs
    .sendForm("service_murz7qv", templateId, form, "n0fNJ32On4BeZAq6d")
    .then((result: EmailJSResponseStatus) => result)
    .catch((error) => {
      console.error("Error sending email:", error.text);
      throw error;
    })
    .finally(() => {
      document.body.removeChild(form);
    });
};

export const sendEmail = (data: RQFormData): Promise<EmailJSResponseStatus> => {
  return sendEmailTemplate(data, "template_rbodn39");
};

export const sendEmailSecond = (
  data: RQFormData
): Promise<EmailJSResponseStatus> => {
  return sendEmailTemplate(data, "template_z7suxf7");
};

const createInput = (name: string, value: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  return input;
};
