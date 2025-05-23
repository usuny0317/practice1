import { API_URL, ERORR } from "@/constants";

export const getTodoService = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(ERORR.GET);
  }
  return res.json();
};
