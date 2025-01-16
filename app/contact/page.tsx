"use client";

import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";
import { Orbitron, Akaya_Kanadaka, Open_Sans } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_SWEET_CODE,
          name: formData.get("name"),
          email: formData.get("email"),
          telno: formData.get("telno"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Success!",
          text: "Message has been sent successfully! You will be contacted soon.",
          icon: "success",
        });
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to send your message. Please try again later.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <title>Elite Resumer | Contact</title>
      <main className="py-16 px-6 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <section className="bg-[#4338ca] text-white rounded-xl p-10 shadow-md text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${orbitron.className}`}>
          Contact Us
          </h1>
          <p className={`text-lg md:text-xl leading-relaxed ${openSans.className}`}>
          Got a question, suggestion, or just want to say hello? We’d love
          to hear from you!
          </p>
        </section>

          <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
              <input
                type="tel"
                placeholder="Your Phone Number"
                name="telno"
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                rows={6}
                required
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-indigo-600 focus:ring-indigo-600"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 p-4 text-white font-bold bg-indigo-600 rounded-lg shadow-lg transition hover:bg-indigo-700 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send"} <IoIosSend size={20} />
              </button>
            </form>
          </section>

          <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 border rounded-lg shadow-md text-center">
              <h3
                className={`text-lg font-semibold text-indigo-600  ${orbitron.className}`}
              >
                Email
              </h3>
              <Link
                href="mailto:syedaliaskarizaidi1@gmail.com"
                className={`flex items-center gap-2 justify-center text-gray-700 hover:text-[#837ae0] text-lg duration-150 transition-all ${akayaKanadaka.className}`}
              >
                <MdMailOutline size={24} />
                onewaytolearn@gmail.com
              </Link>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-md text-center">
              <h3
                className={`text-lg font-semibold text-indigo-600  ${orbitron.className}`}
              >
                Phone
              </h3>
              <Link
                href="tel:+923192046516"
                className={`flex items-center gap-2 justify-center text-gray-700 hover:text-[#837ae0] text-lg duration-150 transition-all ${akayaKanadaka.className}`}
              >
                <FaPhoneAlt size={20} />
                +92 (319) 2046516
              </Link>
            </div>
            <div className="bg-white p-6 border rounded-lg shadow-md text-center">
              <h3
                className={`text-lg font-semibold text-indigo-600  ${orbitron.className}`}
              >
                Social Media
              </h3>
              <div className="flex gap-6 justify-center mt-4">
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
