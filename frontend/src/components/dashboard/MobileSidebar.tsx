import { Link } from "react-router";
import { LayoutDashboard, LogOut, X } from "lucide-react";

import useLogout from "@/hooks/useLogout";
import { useSidebar } from "@/context/useSidebar";

function MobileSidebar() {
  const handleLogout = useLogout();

  const { isSidebarOpen, closeSidebar } = useSidebar();

  const handleMobileLogout = async () => {
    closeSidebar();
    await handleLogout();
  };

  return (
    <>
      <div
        className={`
    fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden
    ${
      isSidebarOpen
        ? "opacity-100 pointer-events-auto"
        : "opacity-0 pointer-events-none"
    }
  `}
        onClick={closeSidebar}
      />

      <aside
        className={`
    fixed
    left-0
    top-0
    z-50
    h-full
    w-72
    bg-base-100
    border-r
    border-base-300
    p-4
    shadow-xl
    transition-transform
    duration-300
    lg:hidden
    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/dashboard"
            className="text-primary text-2xl font-bold"
            onClick={closeSidebar}
          >
            EAS
          </Link>

          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={closeSidebar}
          >
            <X size={20} />
          </button>
        </div>

        <ul className="space-y-2">
          <li>
            <Link
              to="/dashboard"
              className="btn btn-ghost w-full justify-start gap-3 rounded-full"
              onClick={closeSidebar}
            >
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
          </li>

          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-3 rounded-full"
              onClick={handleMobileLogout}
            >
              <LogOut size={20} />
              Logout
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default MobileSidebar;
