import { createContext } from "react";

interface NetworkStatusContextValue {
  isOnline: boolean;
}

export const NetworkStatusContext =
  createContext<NetworkStatusContextValue | null>(null);
