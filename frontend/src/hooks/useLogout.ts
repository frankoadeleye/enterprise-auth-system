import { useNavigate } from "react-router";

import { useAuthStore } from "@/store/authStore";

function useLogout() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await logout();

    navigate("/", { replace: true });
  };

  return handleLogout;
}

export default useLogout;
