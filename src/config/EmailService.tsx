import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { RQFormData } from "../data/RequestQuoteData";

const sendEmailTemplate = (
  data: RQFormData,
  templateId: string
): Promise<EmailJSResponseStatus> => {
  // Create templateParams with only the required fields
  const templateParams = {
    firstname: data.firstname || "",
    lastname: data.lastname || "",
    email: data.email || "",
    phone: data.phone || "",
    jobTitle: data.jobTitle || "",
    company: data.company || "",
    projectName: data.projectName || "",
    quantity: data.quantity?.toString() || "",
    description: data.description || "",
    dueDate: data.dueDate || "",
    terms: data.terms?.toString() || "",
    representative: data.representative || "",
    file1: data.uploadedFiles?.[0] || "", // Only the first file
  };

  // Send email using EmailJS
  return emailjs.send(
    "service_murz7qv", // Replace with your Service ID
    templateId, // Replace with your Template ID
    templateParams,
    "n0fNJ32On4BeZAq6d" // Replace with your Public Key
  );
};

export const sendEmail = (data: RQFormData): Promise<EmailJSResponseStatus> => {
  return sendEmailTemplate(data, "template_rbodn39"); // Template for Request a Quote
};

export const sendEmailSecond = (
  data: RQFormData
): Promise<EmailJSResponseStatus> => {
  return sendEmailTemplate(data, "template_z7suxf7"); // Template for Send File
};
