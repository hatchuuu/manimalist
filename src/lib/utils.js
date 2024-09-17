import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import axios from "axios";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const axiosInstance = axios.create({
  baseURL:`${process.env.NEXT_PUBLIC_API_URL}`
})