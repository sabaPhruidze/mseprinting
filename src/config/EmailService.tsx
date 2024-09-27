import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { RQFormData } from "../data/RequestQuoteData";

// Function to send email using the first template
export const sendEmail = (data: RQFormData): Promise<EmailJSResponseStatus> => {
  const form = document.createElement("form");
  form.style.display = "none";

  // Append form data to the form
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
  form.appendChild(createInput("representative", data.representative)); // Include representative

  // Append uploaded file URLs to the form
  data.uploadedFiles?.forEach((fileUrl: string, index: number) => {
    const fileUrlInput = createInput(`file${index + 1}`, fileUrl);
    form.appendChild(fileUrlInput);
  });

  document.body.appendChild(form);

  return emailjs
    .sendForm("service_murz7qv", "template_rbodn39", form, "n0fNJ32On4BeZAq6d")
    .then(
      (result: EmailJSResponseStatus) => result,
      (error) => {
        console.error(error.text);
        throw error;
      }
    )
    .finally(() => {
      document.body.removeChild(form); // Clean up the form after sending
    });
};

// Function to send email using the second template
export const sendEmailSecond = (
  data: RQFormData
): Promise<EmailJSResponseStatus> => {
  const form = document.createElement("form");
  form.style.display = "none";

  // Append form data to the form
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
  form.appendChild(createInput("representative", data.representative)); // Include representative

  // Append uploaded file URLs to the form
  data.uploadedFiles?.forEach((fileUrl: string, index: number) => {
    const fileUrlInput = createInput(`file${index + 1}`, fileUrl);
    form.appendChild(fileUrlInput);
  });

  document.body.appendChild(form);

  return emailjs
    .sendForm("service_murz7qv", "template_z7suxf7", form, "n0fNJ32On4BeZAq6d")
    .then(
      (result: EmailJSResponseStatus) => result,
      (error) => {
        console.error(error.text);
        throw error;
      }
    )
    .finally(() => {
      document.body.removeChild(form); // Clean up the form after sending
    });
};

// Function to create hidden inputs
const createInput = (name: string, value: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  return input;
};
