/* eslint-disable no-unused-vars */
import { useSearch } from "../contexts/SearchContext";
import { BsSearch } from "react-icons/bs";
import { axiosInstance } from "../lib/axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Search from "../assets/search2.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const [openSearch, setOpenSearch] = useState(false);

  const logout = (event) => {
    event.preventDefault();

    localStorage.removeItem("token");

    window.location.replace("/");
  };

  const {
    search,
    setSearch,
    setSearchResults,
    setIsSearch,
    setIsSearchIsLoading,
    handleClearSearch,
  } = useSearch();

  const handleSubmitSearch = async (e) => {
    e.preventDefault();
    navigate("/");
    setIsSearch(true);
    setIsSearchIsLoading(true);
    try {
      const response = await axiosInstance.get(
        `/api/v1/search/movie?page=1&query=${search}`,
      );
      const { data } = response.data;
      setIsSearch(true);
      setSearchResults(data);
      setIsSearchIsLoading(false);

      console.log(data.data);

      console.log(data);
    } catch (error) {
      console.log(error);
      setIsSearch(false);
    }
  };

  return (
    <div className="absolute left-0 right-0 top-0 z-40 w-full items-center bg-transparent">
      <nav className="mx-auto flex items-center justify-between  px-4 py-6 lg:px-10">
        <button onClick={handleClearSearch}>
          <h1 className="text-lg font-extrabold text-red-600 md:text-6xl">
            MovieList
          </h1>
        </button>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setOpenSearch(openSearch ? false : true)}
        >
          <img src={Search} className="h-6 w-6" />
        </div>

        <div className="hidden lg:block">
          <form
            onSubmit={handleSubmitSearch}
            className="relative flex w-80 items-center justify-center"
          >
            <input
              placeholder="Seach any movies"
              id="search_movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border-2 border-red-600 bg-transparent px-5 py-2 text-white outline-none backdrop-blur-md focus:border-red-800"
            />
            <button
              type="submit"
              className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-full bg-slate-300 p-2 transition-colors"
            >
              <BsSearch className="h-5 w-5" />
            </button>
          </form>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            className="rounded-lg border-2 border-red-700 px-3 py-2 font-bold text-red-700 hover:bg-white"
            as={Link}
            to="/login"
          >
            Login
          </Link>
          <Link
            className="rounded-lg border-2 border-red-700 bg-red-700 px-3 py-2 font-bold text-white"
            to="/register"
          >
            Register
            </Link>
        </div>
      </nav>
      <div className={`${openSearch ? "block" : "hidden"} lg:hidden`}>
        <div className="flex w-full items-center justify-center px-4">
          <form
            onSubmit={handleSubmitSearch}
            className="relative flex w-full items-center justify-center"
          >
            <input
              placeholder="Seach any movies"
              id="search_movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border-2 border-red-600 bg-transparent px-5 py-2 text-white outline-none backdrop-blur-md focus:border-red-800"
            />
            <button
              type="submit"
              className="absolute bottom-1/2 right-2 translate-y-1/2 rounded-full bg-slate-300 p-2 transition-colors"
            >
              <BsSearch className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
