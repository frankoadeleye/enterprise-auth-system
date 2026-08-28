import { useState } from "react";
import { Link } from "react-router";
import { Menu, X, LayoutDashboard, LogOut } from "lucide-react";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { useAuthStore } from "@/store/authStore";
import useLogout from "@/hooks/useLogout";

function Navbar() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const handleLogout = useLogout();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar border-b border-base-300 bg-base-100 px-4">
      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-primary text-2xl font-bold"
          onClick={closeMenu}
        >
          EAS
        </Link>
      </div>

      {/* Desktop navigation */}
      <div className="hidden items-center gap-2 lg:flex">
        <ThemeToggle />

        {isAuthenticated ? (
          <>
            <Link to="/dashboard" className="btn btn-ghost rounded-full">
              Dashboard
            </Link>

            <button
              type="button"
              className="btn btn-primary rounded-full"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost rounded-full">
              Login
            </Link>

            <Link to="/signup" className="btn btn-primary rounded-full">
              Sign Up
            </Link>
          </>
        )}
      </div>

      {/* Mobile visible navigation */}
      <div className="flex items-center gap-2 lg:hidden">
        {isAuthenticated ? (
          <Link to="/dashboard" className="btn btn-ghost btn-sm rounded-full">
            Dashboard
          </Link>
        ) : (
          <Link to="/login" className="btn btn-ghost btn-sm rounded-full">
            Login
          </Link>
        )}

        <button
          type="button"
          className="btn btn-ghost btn-sm"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`
          fixed inset-0 z-50 lg:hidden
          transition-opacity duration-300
          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" onClick={closeMenu} />

        {/* Drawer */}
        <aside
          className={`
            absolute right-0 top-0
            flex h-full w-72 max-w-[85vw] flex-col
            border-l border-base-300
            bg-base-100
            p-4
            shadow-xl
            transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Drawer header */}
          <div className="mb-8 flex items-center justify-between">
            <span className="text-primary text-2xl font-bold">EAS</span>

            <button
              type="button"
              className="btn btn-ghost btn-sm"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-2">
            <div className="mb-4 flex items-center justify-between rounded-xl border border-base-300 p-3">
              <span className="font-medium">Theme</span>
              <ThemeToggle />
            </div>

            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="btn btn-ghost w-full justify-start gap-3 rounded-full"
                  onClick={closeMenu}
                >
                  <LayoutDashboard size={20} />
                  Dashboard
                </Link>

                <button
                  type="button"
                  className="btn btn-ghost w-full justify-start gap-3 rounded-full"
                  onClick={handleLogout}
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="btn btn-primary w-full justify-start rounded-full"
                  onClick={closeMenu}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
