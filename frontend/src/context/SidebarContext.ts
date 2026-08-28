import { createContext } from "react";

interface SidebarContextValue {
  isSidebarOpen: boolean;
  isSidebarCollapsed: boolean;

  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;

  toggleCollapse: () => void;
}

export const SidebarContext = createContext<SidebarContextValue | null>(null);
