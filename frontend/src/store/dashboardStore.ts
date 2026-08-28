import { create } from "zustand";

import type { DashboardData } from "@/types/Dashboard";
import { getDashboardData } from "@/services/DashboardService";

interface DashboardStore {
  dashboard: DashboardData | null;
  isLoading: boolean;
  error: string | null;

  fetchDashboard: () => Promise<void>;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  dashboard: null,
  isLoading: false,
  error: null,

  fetchDashboard: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      const response = await getDashboardData();

      if (!response.success || !response.data) {
        set({
          error: response.message || "Failed to fetch dashboard data",
          isLoading: false,
        });

        return;
      }

      set({
        dashboard: response.data,
        isLoading: false,
      });
    } catch (error) {
      console.error("Fetch Dashboard Error:", error);

      set({
        error: "Something went wrong while fetching dashboard data",
        isLoading: false,
      });
    }
  },
}));
