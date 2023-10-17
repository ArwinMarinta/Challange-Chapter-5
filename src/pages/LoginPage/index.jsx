// import React from 'react'
import axios from "axios";
import { useState } from "react";
// import { VITE_API_URL } from "../../constants/config";
import Navbar from "../../components/Navbar";
import { axiosLogin } from "../../lib/axios";
import { Link } from "react-router-dom";
//import Google from "../../assets/google.svg";
import Facebook from "../../assets/facebook.svg";
import GoogleLogin from "../../components/GoogleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosLogin.post("/api/v1/auth/login", {
        email,
        password,
      });
      const { data } = response.data;
      const { token } = data;

      //menyimpan token ke localstorage
      localStorage.setItem("token", token);

      //direct ke homepage
      window.location.replace("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className=" flex h-screen  items-center justify-center  ">
        <div className="px-20  py-8 sm:w-[600px] md:border-2 ">
          {/* LOGIN */}
          <div className="mb-6 flex w-full justify-center">
            <h1 className="text-4xl font-bold"> LOGIN </h1>
          </div>

          {/* Form inputan dan button register */}
          <form className="mt-12 flex flex-col gap-5 " onSubmit={login}>
            <div>
              <h2 className="mb-2 text-lg font-bold">Email Address</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">Password</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button
              type="submit"
              className="mt-3 rounded-xl border-2 bg-red-600 py-2 font-bold text-white md:py-3 "
            >
              LOGIN
            </button>
          </form>

          {/* Login dengan menggunakan google or facebook */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <h1 className="text-base font-semibold">Or Sign Up Using</h1>
            <div className="flex flex-row gap-3">
              <div>
                <GoogleLogin/>
              </div>
              <button>
                <img src={Facebook} />
              </button>
            </div>
          </div>

          {/* login ketika sudah memiliki akun  */}
          <div className=" mt-6 flex flex-col items-center gap-1 md:flex-row md:justify-center ">
            <p>Don't have an account?</p>
            <Link
              className="font-bold hover:border-b-2 hover:border-black"
              as={Link}
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
