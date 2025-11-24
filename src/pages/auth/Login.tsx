import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "@tanstack/react-router";

interface LoginForm {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    const success = await login(data.email, data.password);

    if (success) {
      navigate({ to: "/dashboard" }); // otomatis masuk
    } else {
      alert("Login gagal, email atau password salah!");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0d0d0d] to-[#121212] overflow-hidden">
      
      {/* Floating Blobs */}
      <div className="absolute w-[200px] h-[200px] top-[10%] left-[20%] bg-cyan-400 opacity-30 rounded-full animate-floatBlob z-0"></div>
      <div className="absolute w-[300px] h-[300px] top-[50%] left-[70%] bg-cyan-300 opacity-20 rounded-full animate-floatBlob delay-2000 z-0"></div>
      <div className="absolute w-[250px] h-[250px] top-[70%] left-[30%] bg-cyan-200 opacity-15 rounded-full animate-floatBlob delay-4000 z-0"></div>

      {/* Center Card */}
      <div className="relative z-10 w-full max-w-[600px] h-[600px] bg-white/10 backdrop-blur-md rounded-xl shadow-xl flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left Column: Image */}
        <div className="hidden lg:flex flex-1 items-center justify-center bg-[#0c0c0c]">
          <img src="/rocket.jpeg" alt="Cover" className="w-full h-full object-cover rounded-l-xl" />
        </div>

        {/* Right Column: Form */}
        <div className="flex-1 flex flex-col justify-center p-8">
          <h2 className="text-3xl text-cyanGlow font-extrabold uppercase tracking-wide mb-6 drop-shadow-neon text-center lg:text-left">
            Login
          </h2>
          
          <form className="space-y-4 w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row gap-4 w-full">
              <input 
                type="email"
                placeholder="Email"
                className="input input-bordered flex-1 bg-white/20 text-white placeholder-white/50 border-cyan-400 focus:border-cyan-500 focus:ring-cyan-400"
                {...register("email", { required: true })}
              />
              <input 
                type="password"
                placeholder="Password"
                className="input input-bordered flex-1 bg-white/20 text-white placeholder-white/50 border-cyan-400 focus:border-cyan-500 focus:ring-cyan-400"
                {...register("password", { required: true })}
              />
            </div>

            <input 
              type="submit"
              value={loading ? "Processing..." : "Sign In"}
              disabled={loading}
              className="btn w-full bg-cyanGlow text-white text-lg font-semibold shadow-lg hover:shadow-cyanGlow/50 transition-all duration-300 mt-4 disabled:opacity-50"
            />
          </form>

          <p className="mt-4 text-cyan-200 text-sm text-center lg:text-left">
            Are you new here? Please <a href="#" className='text-cyanGlow font-semibold hover:underline'>Sign Up</a>
          </p>

          <div className='divider text-cyanGlow my-2'>OR</div>

          <button className='btn w-full bg-cyanGlow flex items-center justify-center gap-2 shadow-lg hover:shadow-cyanGlow/50 transition-all duration-300'>
            <img className='w-5' src="/google.png" alt="Google" /> Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login;
