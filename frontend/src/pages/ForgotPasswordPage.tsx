import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AuthLayout from "@/components/auth/AuthLayout";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";
import FormField from "@/components/ui/FormField";
import LoadingButton from "@/components/ui/LoadingButton";
import Alert from "@/components/ui/Alert";

import { useAuthStore } from "@/store/authStore";
import { useClearAuthError } from "@/hooks/useClearAuthError";

import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/validations/authSchemas";
import AuthErrorAlert from "@/components/ui/AuthErrorAlert";

function ForgotPasswordPage() {
  useClearAuthError();

  const [emailSent, setEmailSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const email = useWatch({
    control,
    name: "email",
  });

  const forgotPassword = useAuthStore((state) => state.forgotPassword);

  const authError = useAuthStore((state) => state.error);
  const errorType = useAuthStore((state) => state.errorType);
  const isLoading = useAuthStore((state) => state.isLoading);

  const onSubmit = async (data: ForgotPasswordFormData) => {
    try {
      await forgotPassword(data.email);

      setSubmittedEmail(data.email);
      setEmailSent(true);
    } catch {
      // authStore.error handles the failure.
    }
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle={
        emailSent
          ? "Check your email for the next step."
          : "Enter your email and we'll send you a reset link."
      }
    >
      {!emailSent ? (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <FormField
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            error={errors.email?.message}
            {...register("email")}
          />

          {authError && <AuthErrorAlert message={authError} type={errorType} />}

          <LoadingButton
            type="submit"
            isLoading={isLoading}
            disabled={!email?.trim()}
          >
            Send Reset Link
          </LoadingButton>
        </form>
      ) : (
        <div className="mt-6 text-center space-y-4">
          <Alert
            type="success"
            message="Password reset link sent successfully."
          />

          <p className="text-sm opacity-70">
            If an account exists for{" "}
            <span className="font-semibold">{submittedEmail}</span>, you will
            receive a password reset link shortly.
          </p>
        </div>
      )}

      <div className="mt-6">
        <AuthFooterLinks
          text="Remember your password?"
          linkText="Login"
          to="/login"
        />
      </div>
    </AuthLayout>
  );
}

export default ForgotPasswordPage;
