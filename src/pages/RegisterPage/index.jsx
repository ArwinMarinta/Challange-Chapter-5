// import React from 'react'

const index = () => {
  return (
    <div className=" flex h-screen items-center justify-center ">
      <div className="max-w-3xl  border-2 px-20 ">
        <div className="flex flex-row justify-between">
          <h1 className="mb-6 mt-10 text-5xl font-bold">Create Account </h1>
          <button className="text-center text-5xl font-bold">X</button>
        </div>
        <div className="flex  flex-col gap-6 px-10">
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

          <div className="mb-10 mt-3">
            <button className="rounded-xl border-2 bg-red-600 px-4 py-3 font-bold text-white">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
