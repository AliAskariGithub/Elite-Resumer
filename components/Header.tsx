import React from "react";
import Link from "next/link";
import { Orbitron } from "next/font/google";
// import { FiMenu } from "react-icons/fi";
// import { IoClose } from "react-icons/io5";
import { signOut } from "@/auth";
import { getSession } from "@/lib/getSession";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const Header = async () => {
      const session = await getSession();
      const user = session?.user;

  return (
    <div className="bg-[#4338ca] text-white py-4 px-6 shadow-md w-full fixed top-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 tracking-wider">
          <Link href="/" className={`text-2xl font-bold ${orbitron.className}`}>
            Elite Resumer
          </Link>
        </div>

        {/* <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex items-center"
        >
          {isMenuOpen ? (
            <IoClose color="white" size={30} />
          ) : (
            <FiMenu color="white" size={30} />
          )}
        </button> */}

        <nav className="hidden lg:flex items-center justify-center space-x-4">
          <Link
            href="/"
            className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
          >
            Contact
          </Link>
          <Link
            href="/templates"
            className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
          >
            Templates
          </Link>
          <Link
            href={`/admin`}
            className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
          >
            Admin
          </Link>
          {!user ? (
            <Link href="/login">
              <button className="button-hover-effect">
                <span className={`${orbitron.className}`}>Login</span>
              </button>
            </Link>
          ) : (
            <button
              onClick={async () => {
                "use server";

                await signOut();
              }}
              className="button-hover-effect"
            >
              <span className={`${orbitron.className}`}>Logout</span>
            </button>
          )}
        </nav>
      </div>

      {/* {isMenuOpen && (
        <div
          className={`lg:hidden bg-[#4338ca] text-white py-4 px-6 absolute left-0 w-full shadow-lg transition-all duration-300 ease-in-out transform ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-20px]"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/"
              className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
            >
              Home
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/about"
              className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
            >
              About
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/contact"
              className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
            >
              Contact
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href="/templates"
              className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
            >
              Templates
            </Link>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={`/admin`}
              className={`text-white hover:underline-effect tracking-wider text-sm duration-150 w-max transition-all ${orbitron.className}`}
            >
              Admin
            </Link>
            {!user ? (
              <Link href="/login">
                <button className="button-hover-effect">
                  <span className={`${orbitron.className}`}>Login</span>
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setTriggerSignOut(true);
                }}
                className="button-hover-effect"
              >
                <span className={`${orbitron.className}`}>Logout</span>
              </button>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;