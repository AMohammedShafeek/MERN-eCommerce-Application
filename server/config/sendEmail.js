import sendEmail from "./emailService.js";

const sendEmailFun = async ({ sendTo, subject, text, html }) => {
  const result = await sendEmail(sendTo, subject, text, html);

  return result;
};

export default sendEmailFun;
