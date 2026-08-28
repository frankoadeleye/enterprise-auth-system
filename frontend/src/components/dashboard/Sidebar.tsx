import { Link } from "react-router";
import {
  LayoutDashboard,
  LogOut,
  PanelLeftClose,
  PanelLeftOpen,
} from "lucide-react";

import useLogout from "@/hooks/useLogout";
import { useSidebar } from "@/context/useSidebar";

function Sidebar() {
  const handleLogout = useLogout();

  const { isSidebarCollapsed, toggleCollapse } = useSidebar();

  return (
    <aside
      className={`sticky top-0 h-screen shrink-0 hidden border-r border-base-300 bg-base-100 transition-all duration-300 lg:flex lg:flex-col ${
        isSidebarCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between p-4">
        {!isSidebarCollapsed && (
          <Link to="/dashboard" className="text-primary text-2xl font-bold">
            EAS
          </Link>
        )}

        <button
          type="button"
          className="btn btn-ghost btn-sm"
          onClick={toggleCollapse}
        >
          {isSidebarCollapsed ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelLeftClose size={20} />
          )}
        </button>
      </div>

      <nav className="mt-4 flex-1">
        <ul className="space-y-2 px-2">
          <li>
            <Link
              to="/dashboard"
              className="btn btn-ghost w-full justify-start gap-3 rounded-full"
            >
              <LayoutDashboard size={20} />
              {!isSidebarCollapsed && <span>Dashboard</span>}
            </Link>
          </li>

          <li>
            <button
              className="btn btn-ghost w-full justify-start gap-3 rounded-full"
              onClick={handleLogout}
            >
              <LogOut size={20} />
              {!isSidebarCollapsed && <span>Logout</span>}
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
