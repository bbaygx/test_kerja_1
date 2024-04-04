import { API_BASE_URL } from "@/constants/constanst";
import { ApiResponse } from "@/types/type";
import axios from "axios";

export async function DataListAPI(): Promise<ApiResponse> {
  try {
    const result = await axios.get<ApiResponse>(
      `${API_BASE_URL}/api/directory/dataList`
    );
    return result.data;
  } catch (error) {
    throw new Error("Failed to fetch data list");
  }
}
