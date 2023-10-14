// import React from 'react'
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className=" flex h-screen  items-center justify-center">
        <div className="px-20  py-8 sm:w-[600px] md:border-2">
          {/* Buat akun dan tombol leave */}
          <div className="mb-6  flex w-full flex-row justify-between">
            <h1 className="text-2xl font-bold">Create Account </h1>
            <Link
              className="text-center text-2xl font-bold"
              as={Link}
              to="/login"
            >
              X
            </Link>
          </div>

          {/* Form inputan dan button register */}
          <form className="flex flex-col gap-5 ">
            <div>
              <h2 className="mb-2 text-lg font-bold">Nama Depan</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="text"
                placeholder="Nama Depan"
              />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">Nama Belakang</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="text"
                placeholder="Nama Belakang"
              />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">Email</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">Password</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="text"
                placeholder="Password"
              />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold">Confirm Password</h2>
              <input
                className="h-10 w-full rounded-md border-2 pl-2 text-lg"
                type="text"
                placeholder="Confirm Password"
              />
            </div>

            <button
              type="submit"
              className="rounded-xl border-2 bg-red-600 py-2 font-bold text-white md:py-3 md:text-lg "
            >
              Register Now
            </button>
          </form>

          {/* login ketika sudah memiliki akun  */}
          <div className="mt-6 flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <p>Have already an account?</p>
            <Link
              className="font-bold hover:border-b-2 hover:border-black"
              as={Link}
              to="/login"
            >
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
