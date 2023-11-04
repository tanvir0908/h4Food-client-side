/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <div className="my-7 items-center flex justify-between">
        <div className="text-primary flex items-center gap-2 font-secondary">
          <p className="text-4xl xl:text-5xl font-semibold">h4food</p>
        </div>
        <div className="xl:text-lg hidden lg:block font-semibold text-text-secondary">
          <NavLink className={"hover:text-primary transition"}>Home</NavLink>
          <NavLink className={"mx-5 xl:mx-16 hover:text-primary transition"}>
            All Food Items
          </NavLink>
          <NavLink className={"hover:text-primary transition"}>Blog</NavLink>
        </div>
        <div className="flex gap-5 items-center relative">
          <Link className="hidden lg:block">
            <button className="border-2  px-8 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white  xl:text-lg font-semibold rounded-lg border-primary">
              Login
            </button>
          </Link>
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
                className={
                  "rounded-t-lg px-6 py-4  hover:bg-neutral-200 font-medium"
                }
              >
                Home
              </NavLink>
              <NavLink className={"px-6 py-4 font-medium"}>
                All Food Items
              </NavLink>
              <NavLink className={"px-6 py-4 font-medium"}>Blog</NavLink>
            </div>
            <div className="mx-6 pb-6 pt-1 rounded-b-lg">
              <button className="border-2 w-full text-center px-3 py-3 text-primary hover:shadow-md hover:bg-primary transition hover:text-white font-semibold rounded-lg border-primary">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}
