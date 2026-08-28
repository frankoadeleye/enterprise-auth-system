import ThemeToggle from "@/components/ui/ThemeToggle";
import { useLocation } from "react-router";
import { Menu } from "lucide-react";
import { useSidebar } from "@/context/useSidebar";

function Topbar() {
  const { openSidebar } = useSidebar();
  const location = useLocation();

  const pageTitles: Record<string, string> = {
    "/dashboard": "Dashboard",
  };

  const title = pageTitles[location.pathname] || "EAS";

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-base-300 bg-base-100 p-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="btn btn-ghost btn-sm lg:hidden"
          onClick={openSidebar}
        >
          <Menu size={22} />
        </button>

        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      <ThemeToggle />
    </header>
  );
}

export default Topbar;
