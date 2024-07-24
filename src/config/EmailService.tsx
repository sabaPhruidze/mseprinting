import emailjs from "emailjs-com";
import { RQFormData } from "../data/RequestQuoteData";

export const sendEmail = (data: RQFormData) => {
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

  // Append uploaded files to the form
  data.uploadedFiles?.forEach((file: File, index: number) => {
    const fileInput = createFileInput(`file${index + 1}`, file);
    form.appendChild(fileInput);
  });

  document.body.appendChild(form);

  // Send the form using emailjs
  emailjs
    .sendForm("info_mseprinting", "template_rbodn39", form, "o8M8gRSBk1LAfvoAE")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
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

const createFileInput = (name: string, file: File): HTMLInputElement => {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("name", name);
  input.files = new DataTransfer().files;
  const dt = new DataTransfer();
  dt.items.add(file);
  input.files = dt.files;
  return input;
};
