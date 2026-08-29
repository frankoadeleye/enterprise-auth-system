import AuthLayout from "@/components/auth/AuthLayout";
import FormField from "@/components/ui/FormField";
import LoadingButton from "@/components/ui/LoadingButton";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  resetPasswordSchema,
  type ResetPasswordFormData,
} from "@/validations/authSchemas";
import { useAuthStore } from "@/store/authStore";

import { useNavigate, useParams } from "react-router";
import { useClearAuthError } from "@/hooks/useClearAuthError";
import AuthErrorAlert from "@/components/ui/AuthErrorAlert";

function ResetPasswordPage() {
  useClearAuthError();
  const { token } = useParams();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const password = useWatch({
    control,
    name: "password",
  });

  const confirmPassword = useWatch({
    control,
    name: "confirmPassword",
  });

  const navigate = useNavigate();

  const resetPassword = useAuthStore((state) => state.resetPassword);

  const authError = useAuthStore((state) => state.error);

  const isLoading = useAuthStore((state) => state.isLoading);

  const errorType = useAuthStore((state) => state.errorType);

  const onSubmit = async (data: ResetPasswordFormData) => {
    try {
      await resetPassword(token ?? "", data.password);

      navigate("/login");
    } catch {
      // authStore.error handles the failure
    }
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="Choose a new password for your account."
    >
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <FormField
          label="New Password"
          type="password"
          placeholder="Enter a new password"
          error={errors.password?.message}
          {...register("password")}
        />

        <FormField
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword")}
        />

        {authError && <AuthErrorAlert message={authError} type={errorType} />}

        <LoadingButton
          type="submit"
          isLoading={isSubmitting || isLoading}
          disabled={!password?.trim() || !confirmPassword?.trim()}
        >
          Reset Password
        </LoadingButton>
      </form>
    </AuthLayout>
  );
}

export default ResetPasswordPage;
