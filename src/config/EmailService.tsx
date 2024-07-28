import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { RQFormData } from "../data/RequestQuoteData";

export const sendEmail = (data: RQFormData): Promise<EmailJSResponseStatus> => {
  // Create a form element
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

  // Append uploaded file URLs to the form with correct placeholders
  data.uploadedFiles?.forEach((fileUrl: string, index: number) => {
    const fileUrlInput = createInput(`file${index + 1}`, fileUrl);
    form.appendChild(fileUrlInput);
  });

  // Log form data for debugging
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }

  document.body.appendChild(form);

  // Send the form using emailjs
  return emailjs
    .sendForm("info_mseprinting", "template_rbodn39", form, "o8M8gRSBk1LAfvoAE")
    .then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        return result;
      },
      (error) => {
        console.error(error.text);
        throw error;
      }
    )
    .finally(() => {
      document.body.removeChild(form); // Clean up the form after sending
    });
};

const createInput = (name: string, value: string): HTMLInputElement => {
  const input = document.createElement("input");
  input.setAttribute("type", "hidden");
  input.setAttribute("name", name);
  input.setAttribute("value", value);
  return input;
};
