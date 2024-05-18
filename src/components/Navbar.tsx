import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div>
        <div className="flex flex-row fixed w-screen justify-between p-5 px-5 md:px-25 bg-gray-900 text-gray-100">
          <div>
            <Link to="/" className="cursor-pointer">
              <img src="./src/assets/logo-text.png" className="h-20" />
            </Link>
          </div>

          <nav className="hidden md:flex gap-5 font-medium p-5 text-3xl">
            <Link
              to="/home"
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              {" "}
              Menu{" "}
            </Link>
            <Link
              to="/reservations"
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              {" "}
              Reservations{" "}
            </Link>
            <Link
              to="/events"
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              {" "}
              Events{" "}
            </Link>
            <Link
              to="/contactus"
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              {" "}
              Contact Us{" "}
            </Link>
          </nav>

          <div className="flex md:hidden" onClick={handleChange}>
            <div className=" p-2">
              <AiOutlineMenu size={22} />
            </div>
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "translate-x-full"
          } md:hidden  fixed flex flex-col bg-gray-900 text-gray-100 left-0 top-25 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
        >
        <Link
              to="/home"
              className="hover:text-red-500  transition-all cursor-pointer"
              onClick={handleChange}
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="hover:text-red-500  transition-all cursor-pointer"
              onClick={handleChange}
            >
              {" "}
              Menu{" "}
            </Link>
            <Link
              to="/reservations"
              className="hover:text-red-500  transition-all cursor-pointer"
              onClick={handleChange}
            >
              {" "}
              Reservations{" "}
            </Link>
            <Link
              to="/events"
              className="hover:text-red-500  transition-all cursor-pointer"
              onClick={handleChange}
            >
              {" "}
              Events{" "}
            </Link>
            <Link
              to="/contactus"
              className="hover:text-red-500  transition-all cursor-pointer"
              onClick={handleChange}
            >
              {" "}
              Contact Us{" "}
            </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
