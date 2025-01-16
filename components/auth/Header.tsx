"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Orbitron } from "next/font/google";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { RxExit } from "react-icons/rx";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#4338ca] text-white py-4 px-6 shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4  tracking-wider">
          <Link href="/" className={`text-2xl font-bold ${orbitron.className}`}>
            Elite Resumer
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center"
        >
          {isMenuOpen ? (
            <IoClose color="white" size={30} />
          ) : (
            <FiMenu color="white" size={30} />
          )}
        </button>

        <nav className="hidden lg:flex items-center justify-center space-x-6 lg:space-x-6">
          <Link
            href={`/admin/dashboard`}
            className={`text-white hover:underline-effect tracking-wider text-lg duration-150 w-max transition-all ${orbitron.className}`}
          >
            Dashboard
          </Link>
          <Link
            href={`/admin/settings`}
            className={`text-white hover:underline-effect tracking-wider text-lg duration-150 w-max transition-all ${orbitron.className}`}
          >
            Settings
          </Link>
          <Link href="/">
            <button className="button-hover-effect">
              <span
                className={`flex justify-center items-center gap-2 ${orbitron.className}`}
              >
                <RxExit size={24} className="rotate-180" /> Exit
              </span>
            </button>
          </Link>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className={`lg:hidden bg-[#4338ca] text-white py-4 px-6 absolute left-0 w-full shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href={`/admin/dashboard`}
              className={`text-white hover:underline-effect tracking-wider text-lg duration-150 w-max transition-all ${orbitron.className}`}
            >
              Dashboard
            </Link>
            <Link
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              href={`/admin/settings`}
              className={`text-white hover:underline-effect tracking-wider text-lg duration-150 w-max transition-all ${orbitron.className}`}
            >
              Settings
            </Link>
            <Link href="/">
              <button className="button-hover-effect">
                <span className={`${orbitron.className}`}>Exit</span>
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
