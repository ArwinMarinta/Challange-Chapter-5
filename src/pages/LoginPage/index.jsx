// import React from 'react'

const index = () => {
  return (
    <div className=" flex h-screen  items-center justify-center  ">
      <div className="px-20  py-8 sm:w-[600px] md:border-2 ">
        {/* LOGIN */}
        <div className="mb-6 flex w-full justify-center">
          <h1 className="text-4xl font-bold"> LOGIN </h1>
        </div>

        {/* Form inputan dan button register */}
        <form className="mt-12 flex flex-col gap-5 ">
          <div>
            <h2 className="mb-2 text-lg font-bold">Email Address</h2>
            <input
              className="h-10 w-full rounded-md border-2 pl-2 text-lg"
              type="text"
              placeholder="Email Address"
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
        <div className=" mt-6 flex flex-col items-center gap-1 md:flex-row md:justify-center">
          <p>Don't have an account?</p>
          <p className="font-bold">Register</p>
        </div>
      </div>
    </div>
  );
};

export default index;
