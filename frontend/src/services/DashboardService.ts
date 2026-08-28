import { api } from "@/lib/axios";
import type { ApiResponse } from "@/types/ApiResponse";
import type { DashboardData } from "@/types/Dashboard";

export async function getDashboardData(): Promise<ApiResponse<DashboardData>> {
  const response = await api.get<ApiResponse<DashboardData>>("/dashboard");

  return response.data;
}
