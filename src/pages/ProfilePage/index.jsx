// import React from 'react'
import { useEffect, useState } from "react";
import { token } from "../../constants/config";
import { axiosInstance } from "../../lib/axios";
import axios from "axios";
import BinarLogo from "../../assets/binar.jpeg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState([]);

  const getMe = async () => {
    try {
      if (!token) return;
      const response = await axiosInstance.get("/api/v1/auth/me");
      const { data } = response.data;
      setProfile(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error?.response?.data?.message);
        return;
      }
      alert(error?.message);
    }
  };

  useEffect(() => {
    getMe();
  }, []);
  return (
    <>
      <Navbar />
      <div className=" flex h-screen w-full items-center justify-center ">
        <div className=" w-full px-6 md:w-[900px] md:border-2 md:px-20 md:py-8">
          <div className="flex w-full flex-row items-center justify-between border-b-2 border-slate-300 pb-4 ">
            <h1 className="text-4xl font-bold">Profile Saya</h1>
            <Link className="text-4xl font-bold" as={Link} to="/">
              X
            </Link>
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-10 py-4 md:flex-row">
            <div className="flex flex-row gap-8  text-xl font-bold">
              <div className="flex flex-col items-end gap-8">
                <h1 className="w-max">Nama</h1>
                <h1 className="w-max">Email</h1>
                <h1 className="w-max">Bergabung</h1>
              </div>
              <div className="flex flex-col gap-8  md:border-r-2 md:pr-20">
                <div>{profile.name}</div>
                <div>{profile.email}</div>
                <div>{profile.createdAt}</div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={BinarLogo} className="h-40 w-full rounded-full" />
              <button className="rounded-lg border-2 border-black px-2 py-2 font-bold">
                Pilih Gambar
              </button>
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Profile;