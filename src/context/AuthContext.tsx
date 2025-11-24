// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { api, setAuthToken } from "../lib/api";

type User = {
  id: number;
  email: string;
  role?: "admin" | "user" | string;
};

type AuthContextValue = {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

function parseUserFromToken(token: string | null): User | null {
  if (!token) return null;
  try {
    // assume token payload has { sub, email, role } or adjust accordingly
    const payload: any = jwtDecode(token);
    return {
      id: payload.sub ?? payload.user_id ?? 0,
      email: payload.email ?? "",
      role: payload.role ?? payload?.roles ?? "user",
    };
  } catch {
    return null;
  }
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("INDOTRADER_TOKEN"));
  const [user, setUser] = useState<User | null>(() => parseUserFromToken(localStorage.getItem("INDOTRADER_TOKEN")));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAuthToken(token);
    setUser(parseUserFromToken(token));
  }, [token]);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Adjust path if backend has different login endpoint
      const res = await api.post("/auth/login", { email, password });
      const access = res.data.access_token ?? res.data.token ?? res.data.accessToken;
      if (!access) throw new Error("No access token returned");
      setToken(access);
      setAuthToken(access);
      setUser(parseUserFromToken(access));
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setAuthToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
