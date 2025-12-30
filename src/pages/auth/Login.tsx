// src/pages/auth/Login.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const auth = useAuth();
  const navigate = useNavigate();
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setError(null);
    try {
      await auth.login(data.email, data.password);
      // redirect based on role
      if (auth.user?.role === "admin") navigate("/admin/Dashboard");
      else navigate("user/Dashboard");
    } catch (e: any) {
      setError(e?.response?.data?.detail ?? e.message ?? "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="admin@indotrader.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="w-full mt-1 p-2 border rounded-md"
              placeholder="******"
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
