"use client";
import Link from "next/link";
import { Orbitron, Akaya_Kanadaka } from "next/font/google"; // You can use your chosen fonts
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "700",
});

const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <footer className="bg-[#4338ca] text-white pt-8 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <Link
              href="/"
              className={`text-2xl font-bold ${orbitron.className}`}
            >
              Elite Resumer
            </Link>
            <p
              className={`mt-2 text-md text-white/90 ${akayaKanadaka.className}`}
            >
              Your go-to platform for creating exceptional resumes. Powered by
              cutting-edge technology.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h1 className={`text-2xl font-bold ${orbitron.className}`}>
              Quick Links
            </h1>
            <div className="flex flex-col space-y-2 mt-2 text-center md:text-left">
              <Link
                href="/"
                className="text-white  tracking-wider text-md duration-150 transition-all font-sans"
              >
                <span
                  className={`w-max hover:underline-effect ${akayaKanadaka.className}`}
                >
                  Home
                </span>
              </Link>
              <Link
                href="/about"
                className="text-white  tracking-wider text-md duration-150 transition-all font-sans"
              >
                <span
                  className={`w-max hover:underline-effect ${akayaKanadaka.className}`}
                >
                  About
                </span>
              </Link>
              <Link
                href="/contact"
                className="text-white tracking-wider text-md duration-150 transition-all font-sans"
              >
                <span
                  className={`w-max hover:underline-effect ${akayaKanadaka.className}`}
                >
                  Contact
                </span>
              </Link>
              <Link
                href="/templates"
                className="text-white tracking-wider text-md duration-150 transition-all font-sans"
              >
                <span
                  className={`w-max hover:underline-effect ${akayaKanadaka.className}`}
                >
                  Templates
                </span>
              </Link>
              <Link
                href="/services"
                className="text-white tracking-wider text-md duration-150 transition-all font-sans"
              >
                <span
                  className={`w-max hover:underline-effect ${akayaKanadaka.className}`}
                >
                  Services
                </span>
              </Link>
              <Link
                href="/privacy-policy"
                className="text-white tracking-wider text-md duration-150 transition-all font-sans"
              >
                <span
                  className={`w-max hover:underline-effect ${akayaKanadaka.className}`}
                >
                  Privacy Policy
                </span>
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className={`text-2xl font-bold ${orbitron.className}`}>
              Socail Links
            </h1>
            <div className="flex flex-col justify-center md:items-start items-center space-y-4">
              <div className="flex justify-center md:justify-start space-x-6 mt-5">
                <Link
                  href="linkedin.com/in/ali-askari-355257308/"
                  target="_blank"
                  className="text-2xl hover:text-[rgb(131,122,224)] hover:scale-125 duration-150 transition-all"
                >
                  <FaLinkedin />
                </Link>
                <Link
                  href="https://github.com/AliAskariGithub"
                  target="_blank"
                  className="text-2xl hover:text-[rgb(131,122,224)] hover:scale-125 duration-150 transition-all"
                >
                  <FaGithub />
                </Link>
                <Link
                  href="https://x.com/Syed_Ali_Askari?t=88dxwRm8tvBnkWDEVmZhWg&s=09"
                  target="_blank"
                  className="text-2xl hover:text-[rgb(131,122,224)] hover:scale-125 duration-150 transition-all"
                >
                  <FaXTwitter />
                </Link>
                <Link
                  href="https://www.facebook.com/profile.php?id=61564881342854"
                  target="_blank"
                  className="text-2xl hover:text-[rgb(131,122,224)] hover:scale-125 duration-150 transition-all"
                >
                  <FaFacebook />
                </Link>
              </div>

              <Link
                href="mailto:syedaliaskarizaidi1@mail.com"
                className={`mt-2 text-md text-white hover:text-[rgb(131,122,224)] flex justify-center items-center gap-2 duration-150 transition-all ${akayaKanadaka.className}`}
              >
                <IoMdMail size={20} /> eliteresumer@mail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs pb-4 font-bold text-[rgb(187,184,218)] ">
          <p>
            © 2025{" "}
            <span
              className={`font-bold text-lg text-white ${orbitron.className}`}
            >
              Elite Resumer{" "}
            </span>{" "}
            | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
