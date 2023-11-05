/* eslint-disable react/no-unknown-property */
import { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";
import { AuthContext } from "../../providers/AuthProvider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div className="my-7 items-center flex justify-between">
        <div className="text-primary flex items-center gap-2">
          <Link to={"/"} className="text-4xl xl:text-5xl font-bold">
            h4Food
          </Link>
        </div>
        <div className="xl:text-lg hidden lg:block font-semibold text-text-secondary">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/allFoodItems"}
            className={({ isActive }) =>
              isActive
                ? "text-primary mx-5 xl:mx-16"
                : "mx-5 xl:mx-16 hover:text-primary transition"
            }
          >
            All Food Items
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? "text-primary" : "hover:text-primary transition"
            }
          >
            Blog
          </NavLink>
        </div>
        <div className="flex gap-5 items-center relative">
          {/* toggle login logout button */}
          {user ? (
            <>
              <img
                className="w-10 border-2 border-primary rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                className="border-2  px-8 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white  xl:text-lg font-semibold rounded-xl border-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link className="hidden lg:block">
              <button className="border-2  px-8 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white  xl:text-lg font-semibold rounded-xl border-primary">
                Login
              </button>
            </Link>
          )}
          <div className="lg:hidden" onClick={handleOpen}>
            {isOpen ? (
              <IoClose className="text-primary" size={30} />
            ) : (
              <HiMenu className="text-primary" size={30} />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="absolute mt-5 top-12 right-5 md:right-12  w-[50%] md:w-[35%] shadow-xl rounded-lg  z-10 bg-neutral-200">
            <div className="flex flex-col">
              <NavLink
                to={"/"}
                className={
                  "rounded-t-lg px-6 py-4  hover:bg-neutral-200 font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink to={"/allFoodItems"} className={"px-6 py-4 font-medium"}>
                All Food Items
              </NavLink>
              <NavLink to={"/blog"} className={"px-6 py-4 font-medium"}>
                Blog
              </NavLink>
            </div>
            <div className="mx-6 pb-6 pt-1 rounded-b-lg">
              <button className="border-2 w-full text-center px-3 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white font-semibold rounded-xl border-primary">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
