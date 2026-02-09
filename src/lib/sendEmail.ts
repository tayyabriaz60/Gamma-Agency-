import emailjs from "@emailjs/browser";

export interface EmailParams {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const templateParams = {
      full_name: params.fullName,
      email: params.email,
      phone: params.phone || "Not provided",
      subject: params.subject,
      message: params.message,
    };

    // Use import.meta.env for Vite
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

    return { success: true, response };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};
