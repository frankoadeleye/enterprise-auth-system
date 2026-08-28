import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useAuthStore } from "@/store/authStore";

function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  const formatDate = (date?: string) => {
    if (!date) {
      return "N/A";
    }

    return new Date(date).toLocaleString();
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back, {user?.name.split(" ")[0]} 👋
          </h1>

          <p className="mt-2 opacity-70">
            Your account is authenticated and protected.
          </p>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Account Information</h2>

            <div className="space-y-3">
              <p>
                <strong>Name:</strong> {user?.name}
              </p>

              <p>
                <strong>Email:</strong> {user?.email}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {user?.isVerified ? "Verified ✅" : "Not Verified"}
              </p>

              <p>
                <strong>Last Login:</strong> {formatDate(user?.lastLogin)}
              </p>

              <p>
                <strong>Account Created:</strong> {formatDate(user?.createdAt)}
              </p>
            </div>
          </div>
        </div>

        <div className="card border border-base-300 bg-base-100 shadow-sm">
          <div className="card-body">
            <h2 className="card-title">Authentication Features Demonstrated</h2>

            <ul className="space-y-2">
              <li>✅ Signup</li>
              <li>✅ Login</li>
              <li>✅ Email Verification</li>
              <li>✅ Password Reset</li>
              <li>✅ Protected Routes</li>
              <li>✅ JWT Authentication</li>
              <li>✅ Secure Cookie Sessions</li>
              <li>✅ Zustand State Management</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
