import React, { useState } from "react";
import { styles } from "../styles";
import { navLinks } from "../constants/index";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toogle, setToogle] = useState("");
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed py-5 z-20 top-0 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logo23.svg"
            alt="logo"
            className=" w-5 h-5 object-contain"
          />
          <p className=" text-white text-[18px] font-bold cursor-pointer flex">
            <span className="text-[#915EFF]"> Cliford</span> &nbsp;
            <span className=" sm:block hidden"> | Js Dev</span>
          </p>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }  hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        {/* mobile menu */}
        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <img
            className=" w-[28px] h-[28px] object-contain cursor-pointer"
            src={toogle ? close : menu}
            alt="menu pour mobile"
            onClick={() => setToogle(!toogle)}
          />
          <div
            className={`${
              !toogle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-lg `}
          >
            {/* list mobile link */}
            <ul className=" list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } text-[16px] font-medium font-poppins cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToogle(!toogle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
