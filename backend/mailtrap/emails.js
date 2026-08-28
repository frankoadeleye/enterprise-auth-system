import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./email.template.js";

import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  try {
    await mailtrapClient.send({
      from: sender,
      to: [{ email }],
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken,
      ),
      category: "Email Verification",
    });
  } catch (error) {
    console.error(`Error sending verification email: ${error}`);
    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  try {
    await mailtrapClient.send({
      from: sender,
      to: [{ email }],
      subject: "Welcome to Enterprise-Auth-System",
      html: WELCOME_EMAIL_TEMPLATE.replace("{userName}", name),
      category: "Welcome Email",
    });
  } catch (error) {
    console.error(`Error sending welcome email: ${error}`);
    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    await mailtrapClient.send({
      from: sender,
      to: [{ email }],
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email: ${error}`);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email, name) => {
  try {
    await mailtrapClient.send({
      from: sender,
      to: [{ email }],
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE.replace("{userName}", name),
      category: "Password Reset",
    });
  } catch (error) {
    console.error(`Error sending password reset email: ${error}`);
    throw new Error(`Error sending password reset email: ${error}`);
  }
};
