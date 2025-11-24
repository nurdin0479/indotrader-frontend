// src/lib/api.ts
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("INDOTRADER_TOKEN", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("INDOTRADER_TOKEN");
  }
}
