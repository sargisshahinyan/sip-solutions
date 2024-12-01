import nodemailer, { SendMailOptions } from "nodemailer";
import { config } from "@/config";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.gmail.user,
    pass: config.gmail.password,
  },
});

export const sendEmail = async (options: Omit<SendMailOptions, "from">) => {
  await transporter.sendMail({
    ...options,
    from: config.gmail.user,
  });
};
