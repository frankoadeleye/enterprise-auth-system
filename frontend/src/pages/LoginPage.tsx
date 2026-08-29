import AuthLayout from "@/components/auth/AuthLayout";
import AuthFooterLinks from "@/components/auth/AuthFooterLinks";
import { Link } from "react-router";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";

import { loginSchema, type LoginFormData } from "@/validations/authSchemas";

import FormField from "@/components/ui/FormField";
import LoadingButton from "@/components/ui/LoadingButton";
import { useAuthStore } from "@/store/authStore";
import { useClearAuthError } from "@/hooks/useClearAuthError";
import AuthErrorAlert from "@/components/ui/AuthErrorAlert";

function LoginPage() {
  useClearAuthError();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const email = useWatch({
    control,
    name: "email",
  });

  const password = useWatch({
    control,
    name: "password",
  });

  const navigate = useNavigate();

  const isLoading = useAuthStore((state) => state.isLoading);
  const login = useAuthStore((state) => state.login);
  const authError = useAuthStore((state) => state.error);
  const errorType = useAuthStore((state) => state.errorType);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate("/dashboard");
    } catch {
      // Error is already stored in authStore.
    }
  };
  return (
    <AuthLayout title="Welcome Back" subtitle="Sign in to continue testing.">
      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
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
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register("password")}
        />

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm font-medium text-(--color-primary-text)"
          >
            Forgot Password?
          </Link>
        </div>

        {authError && (
          <>
            <AuthErrorAlert message={authError} type={errorType} />

            {authError === "Please verify your email first" && (
              <div className="rounded-xl border border-success/30 bg-success/10 p-4 text-center">
                <p className="text-sm opacity-80">
                  Your account exists, but your email hasn't been verified yet.
                </p>

                <Link
                  to={`/verify-email?email=${encodeURIComponent(email ?? "")}`}
                  className="btn btn-success btn-sm mt-3 rounded-full"
                >
                  Verify Email
                </Link>
              </div>
            )}
          </>
        )}

        <LoadingButton
          type="submit"
          isLoading={isSubmitting || isLoading}
          disabled={
            isSubmitting || isLoading || !email?.trim() || !password?.trim()
          }
        >
          Log In
        </LoadingButton>

        <AuthFooterLinks
          text="Don't have an account?"
          linkText="Sign Up"
          to="/signup"
        />
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
