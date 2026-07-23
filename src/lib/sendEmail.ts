import emailjs from "@emailjs/browser";

export interface EmailParams {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const getEmailJsConfig = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

  if (!serviceId || !templateId || !publicKey) {
    return null;
  }

  return { serviceId, templateId, publicKey };
};

export const sendEmail = async (params: EmailParams) => {
  const config = getEmailJsConfig();

  if (!config) {
    console.error("EmailJS is not configured. Add VITE_EMAILJS_* variables to .env");
    return { success: false, error: new Error("Email service not configured") };
  }

  try {
    const templateParams = {
      full_name: params.fullName,
      email: params.email,
      phone: params.phone || "Not provided",
      subject: params.subject,
      message: params.message,
    };

    const response = await emailjs.send(
      config.serviceId,
      config.templateId,
      templateParams,
      config.publicKey
    );

    return { success: true, response };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return { success: false, error };
  }
};
