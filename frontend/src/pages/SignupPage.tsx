import AuthFooterLinks from "@/components/auth/AuthFooterLinks";
import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/ui/FormField";
import LoadingButton from "@/components/ui/LoadingButton";
import PasswordStrengthMeter from "@/components/auth/PasswordStrengthMeter";
import AuthErrorAlert from "@/components/ui/AuthErrorAlert";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

import { useAuthStore } from "@/store/authStore";
import { useClearAuthError } from "@/hooks/useClearAuthError";

import { signupSchema, type SignupFormData } from "@/validations/authSchemas";

function SignupPage() {
  useClearAuthError();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const navigate = useNavigate();

  const signup = useAuthStore((state) => state.signup);
  const authError = useAuthStore((state) => state.error);
  const errorType = useAuthStore((state) => state.errorType);
  const isLoading = useAuthStore((state) => state.isLoading);

  const password = useWatch({
    control,
    name: "password",
  });

  const fullName = useWatch({
    control,
    name: "fullName",
  });

  const email = useWatch({
    control,
    name: "email",
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      await signup(data.fullName, data.email, data.password);

      navigate(`/verify-email?email=${encodeURIComponent(data.email)}`);
    } catch {
      // authStore.error handles the error.
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start exploring featu"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-0 space-y-4">
        <FormField
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          error={errors.fullName?.message}
          {...register("fullName")}
        />

        <FormField
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email")}
        />

        <FormField
          label="Password"
          type="password"
          placeholder="Create a password"
          error={errors.password?.message}
          {...register("password")}
        />

        <PasswordStrengthMeter password={password ?? ""} />

        {authError && <AuthErrorAlert message={authError} type={errorType} />}

        <LoadingButton
          type="submit"
          isLoading={isSubmitting || isLoading}
          disabled={!fullName?.trim() || !email?.trim() || !password?.trim()}
        >
          Create Account
        </LoadingButton>

        <AuthFooterLinks
          text="Already have an account?"
          linkText="Login"
          to="/login"
        />
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
