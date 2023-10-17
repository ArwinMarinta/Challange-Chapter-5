import axios from "axios";
import { useState } from "react";
import { VITE_API_URL } from "../../constants/config";
import { useNavigate } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";
import { toastify } from "../../lib/toastify";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    if (form.password !== form.confirmPassword) {
      toastify({
        message: "Password tidak sama",
        type: "error",
      });
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(`${VITE_API_URL}/auth/register`, {
        email: form.email,
        name: form.firstName + " " + form.lastName,
        password: form.password,
      });
      toastify({
        message: "Register berhasil",
        type: "success",
      });

      // Setelah berhasil register, langsung redirect ke halaman home
      const result = response.data;
      localStorage.setItem("token", result.data.token);
      navigate("/");

      // // Setelah berhasil register, langsung redirect ke halaman login
      // navigate("/login");
    } catch (error) {
      toastify({
        message: error.response.data.message,
        type: "error",
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" flex h-screen  items-center justify-center  ">
      <div className="px-20  sm:w-[600px] md:border-2 ">
        {/* Buat akun dan tombol leave */}
        <div className="mb-6 mt-10 flex w-full flex-row justify-between">
          <h1 className="text-2xl font-bold">Create Account </h1>
          <button className="text-center text-2xl font-bold">X</button>
        </div>

        {/* Form inputan dan button register */}
        <form className="flex flex-col gap-5 ">
          <div>
            <h2 className="mb-2 text-lg font-bold">Nama Depan</h2>
            <input
              id="firstName"
              className="h-10 w-full rounded-md border-2 pl-2 text-lg"
              type="text"
              placeholder="Nama Depan"
              value={form.firstName}
              onChange={(e) => {
                setForm({ ...form, firstName: e.target.value });
              }}
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold">Nama Belakang</h2>
            <input
              id="lastName"
              className="h-10 w-full rounded-md border-2 pl-2 text-lg"
              type="text"
              placeholder="Nama Belakang"
              value={form.lastName}
              onChange={(e) => {
                setForm({ ...form, lastName: e.target.value });
              }}
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold">Email</h2>
            <input
              id="email"
              className="h-10 w-full rounded-md border-2 pl-2 text-lg"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, email: e.target.value });
              }}
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold">Password</h2>
            <input
              className="h-10 w-full rounded-md border-2 pl-2 text-lg"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
          </div>
          <div>
            <h2 className="mb-2 text-lg font-bold">Confirm Password</h2>
            <input
              className="h-10 w-full rounded-md border-2 pl-2 text-lg"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={(e) => {
                setForm({ ...form, confirmPassword: e.target.value });
              }}
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center rounded-xl border-2 bg-red-600 py-3 font-bold text-white "
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? <SpinnerLoading /> : <span>Register Now</span>}
          </button>
        </form>

        {/* Login dengan menggunakan google or facebook */}
        <div className="mt-8 flex flex-col items-center">
          <h1 className="text-base font-semibold">Or Sign Up Using</h1>
          <div className="flex flex-row gap-3">
            <button>google</button>
            <button>Facebook</button>
          </div>
        </div>

        {/* login ketika sudah memiliki akun  */}
        <div className="mt-6 flex flex-col items-center md:flex-row md:justify-center">
          <p>Have already an account?</p>
          <p>Login Here</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
