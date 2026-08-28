import { Link } from "react-router";
import { useAuthStore } from "@/store/authStore";

function NotFoundPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold text-primary">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

        <p className="mt-3 text-base-content/70">
          The page you are looking for does not exist or may have been moved.
        </p>

        <Link
          to={isAuthenticated ? "/dashboard" : "/"}
          className="btn btn-primary rounded-full mt-8"
        >
          {isAuthenticated ? "Back to Dashboard" : "Back Home"}
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
