"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const menues = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "About", path: "about" },
    { id: 3, name: "Projects", path: "project" },
    { id: 4, name: "Testimonials", path: "testimonial" },
    { id: 5, name: "Contact Us", path: "contact" },
  ];

  return (
    <>
      <div className="app z-[999] fixed bg-gray-100 w-full">
        <nav className="shadow-md">
          <div className="mx-auto">
            <div className="flex items-center mx-auto justify-between px-8 md:px-14">
              {/* Primary menu and logo */}
              <div className="flex font-semibold text-lg gap-2 items-center my-4">
                {/* Logo */}
                <FaCode size={30} className="text-orange-500" />
                <h1>ProfessoR</h1>
              </div>

              {/* Navigation Links */}
              <div className="hidden lg:flex gap-14">
                {menues.map((menu) => (
                  <div key={menu.id}>
                    <Link
                      className="hover:border-b-2 cursor-pointer hover:transition ease-in-out duration-300 border-orange-500"
                      to={menu.path}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {menu.name}
                    </Link>
                  </div>
                ))}
              </div>

              {/* Secondary (icons and search) */}
              <div className="flex gap-6">
                <div className="hidden md:flex items-center gap-4">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="px-4 py-1.5 rounded-3xl border-2  hover:border-orange-600 outline-none "
                  />

<button
            type="button"
            className="px-5 py-2 bg-[#0057ff] rounded-3xl text-sm tracking-wider  border border-current outline-none hover:bg-[#1725e4] hover:bg-transparent font-semibold text-white hover:text-blue-600  transition-all duration-300"
          >
            Login 
          </button>
                </div>

                {/* Mobile navigation toggle */}
                <div className="lg:hidden flex items-center">
                  <button
                    onClick={() => setToggleMenu(!toggleMenu)}
                    aria-label="Toggle mobile navigation"
                  >
                    <IoMdMenu size={40} className="h-24" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile navigation */}
          <div
            className={`mobile-nav fixed z-40 w-full px-4 bg-white flex flex-col lg:hidden gap-12 origin-top duration-700 ${
              !toggleMenu ? "h-0 opacity-0" : "h-full opacity-100"
            }`}
          >
            <div className="px-4">
              <div className="flex flex-col pt-5 gap-8 font-bold tracking-wider">
                {menues.map((menu) => (
                  <div key={menu.id}>
                    <Link
                      className="hover:border-b-2 hover:transition ease-in-out duration-300 border-orange-500"
                      activeClass="active"
                      to={menu.path}
                      spy={true}
                      smooth={true}
                      duration={500}
                    >
                      {menu.name}
                    </Link>
                  </div>
                ))}

                {/* Mobile search input */}
                <div className="flex items-center gap-4">
                  <input
                    type="search"
                    placeholder="Search..."
                    className="border px-4 py-1 rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
