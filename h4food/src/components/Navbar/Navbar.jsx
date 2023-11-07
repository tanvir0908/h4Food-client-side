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
  const [profile, setProfile] = useState(false);
  const handleLogout = () => {
    logoutUser()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    setProfile(false);
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
                onClick={() => {
                  setProfile(!profile);
                  setIsOpen(false);
                }}
                className="w-10 cursor-pointer h-10 md:w-12 md:h-12 border-2 border-primary rounded-full object-cover"
                src={user.photoURL}
                alt=""
              />
              <button
                className="border-2 hidden md:block  px-8 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white  xl:text-lg font-semibold rounded-xl border-primary"
                onClick={handleLogout}
              >
                Logout
              </button>
              {profile && (
                <div className="absolute mt-1 md:mt-3 lg:mt-4 top-12 right-12 md:right-48 lg:right-36  w-[15rem] shadow-xl rounded-xl  z-10 bg-rose-200">
                  <div className="flex flex-col">
                    <NavLink
                      to={"/myAddedFoods"}
                      onClick={() => setProfile(false)}
                      className={
                        "rounded-t-xl px-6 py-4  hover:bg-rose-300 font-medium"
                      }
                    >
                      My added food items
                    </NavLink>
                    <NavLink
                      onClick={() => setProfile(false)}
                      to={"/addNewFood"}
                      className={"px-6 py-4 hover:bg-rose-300 font-medium"}
                    >
                      Add a new food
                    </NavLink>
                    <NavLink
                      onClick={() => setProfile(false)}
                      to={"/myOrderedFoods"}
                      className={
                        "px-6 hover:bg-rose-300 py-4 rounded-b-xl font-medium"
                      }
                    >
                      My ordered food items
                    </NavLink>
                  </div>
                </div>
              )}
            </>
          ) : (
            <Link to={"/login"} className="hidden lg:block">
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
          <div className="absolute mt-8 md:mt-10 top-12 right-5 md:right-12  w-[50%] md:w-[35%] shadow-xl rounded-xl  z-10 bg-rose-200">
            <div className="flex flex-col">
              <NavLink
                to={"/"}
                className={"rounded-t-xl px-6 py-4 font-medium"}
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
            <div className="mx-6 pb-6 pt-1 rounded-b-xl">
              {/* <Link to={"/login"}>
                <button className="border-2 w-full text-center px-3 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white font-semibold rounded-xl border-primary">
                  Login
                </button>
              </Link> */}
              {user ? (
                <>
                  <button
                    className="border-2 w-full px-8 py-3 text-primary xl:text-lg font-semibold rounded-xl border-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link to={"/login"}>
                  <button className="border-2 w-full px-8 py-3 text-primary xl:text-lg font-semibold rounded-xl border-primary">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
