import { useSearchParams, useNavigate } from "react-router";
import { useForm, useWatch } from "react-hook-form";

import AuthLayout from "@/components/auth/AuthLayout";
import LoadingButton from "@/components/ui/LoadingButton";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";
import { useClearAuthError } from "@/hooks/useClearAuthError";

import { useEffect, useState } from "react";

import { useAuthStore } from "@/store/authStore";
import AuthErrorAlert from "@/components/ui/AuthErrorAlert";

interface VerifyEmailFormData {
  code: string;
}

function VerifyEmailPage() {
  useClearAuthError();
  const [countdown, setCountdown] = useState(0);
  const [resendMessage, setResendMessage] = useState("");
  const [searchParams] = useSearchParams();

  const canResend = countdown === 0;

  const email = searchParams.get("email");
  const navigate = useNavigate();

  const verifyEmail = useAuthStore((state) => state.verifyEmail);

  const resendVerificationEmail = useAuthStore(
    (state) => state.resendVerificationEmail,
  );

  const authError = useAuthStore((state) => state.error);

  const isLoading = useAuthStore((state) => state.isLoading);
  const errorType = useAuthStore((state) => state.errorType);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerifyEmailFormData>({
    defaultValues: {
      code: "",
    },
  });

  const code = useWatch({
    control,
    name: "code",
  });

  useEffect(() => {
    if (!email) {
      navigate("/login", { replace: true });
    }
  }, [email, navigate]);

  useEffect(() => {
    if (countdown === 0) {
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleResendCode = async () => {
    if (!email) return;

    try {
      await resendVerificationEmail(email);

      setResendMessage("A new verification code has been sent.");
      setCountdown(60);
    } catch {
      // Error is already stored in authStore.
    }
  };

  const onSubmit = async (data: VerifyEmailFormData) => {
    if (!email) return;

    try {
      await verifyEmail(email, data.code);

      navigate("/dashboard");
    } catch {
      // Error already handled by store
    }
  };

  return (
    <AuthLayout
      title="Verify Your Email"
      subtitle={
        email
          ? `Enter the verification code sent to ${email}.`
          : "Enter the verification code sent to your email."
      }
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div>
          <label className="label">
            <span className="label-text">Verification Code</span>
          </label>

          <input
            type="text"
            inputMode="numeric"
            maxLength={6}
            placeholder="Enter your 6-digit code"
            className="input input-bordered w-full"
            {...register("code", {
              required: "Verification code is required",
              minLength: {
                value: 6,
                message: "Verification code must be 6 digits",
              },
              maxLength: {
                value: 6,
                message: "Verification code must be 6 digits",
              },
            })}
          />

          {errors.code && (
            <p className="mt-1 text-sm text-error">{errors.code.message}</p>
          )}
        </div>

        {authError && <AuthErrorAlert message={authError} type={errorType} />}

        <LoadingButton type="submit" disabled={code?.trim().length !== 6}>
          Verify Email
        </LoadingButton>

        <div className="mt-6 text-center">
          {resendMessage && (
            <p className="mb-3 text-sm text-success">{resendMessage}</p>
          )}

          {canResend ? (
            <>
              <p className="mb-3 text-sm opacity-70">Didn't receive a code?</p>

              <button
                type="button"
                onClick={handleResendCode}
                disabled={!email || isLoading}
                className="btn btn-outline btn-success rounded-full"
              >
                Resend Code
              </button>
            </>
          ) : (
            <p className="text-sm opacity-70">
              You can request another code in {countdown}s
            </p>
          )}
        </div>

        <AuthFooterLinks
          text="Already verified?"
          linkText="Login"
          to="/login"
        />
      </form>
    </AuthLayout>
  );
}

export default VerifyEmailPage;
