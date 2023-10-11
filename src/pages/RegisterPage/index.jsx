// import React from 'react'

const index = () => {
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
            className="rounded-xl border-2 bg-red-600  py-3 font-bold text-white "
          >
            Register Now
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

export default index;
