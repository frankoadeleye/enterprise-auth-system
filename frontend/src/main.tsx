import { BrowserRouter } from "react-router";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@/context/ThemeContext.tsx";
import { NetworkStatusProvider } from "@/context/NetworkStatusProvider";
import { SidebarProvider } from "@/context/SidebarProvider";
import ScrollToTop from "@/components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />

    <ThemeProvider>
      <NetworkStatusProvider>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </NetworkStatusProvider>
    </ThemeProvider>
  </BrowserRouter>,
);
