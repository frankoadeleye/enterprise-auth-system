import { useState, type ReactNode } from "react";
import { SidebarContext } from "./SidebarContext";

interface SidebarProviderProps {
  children: ReactNode;
}

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function toggleSidebar() {
    setIsSidebarOpen((current) => !current);
  }

  function toggleCollapse() {
    setIsSidebarCollapsed((current) => !current);
  }

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        isSidebarCollapsed,
        openSidebar,
        closeSidebar,
        toggleSidebar,
        toggleCollapse,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}
