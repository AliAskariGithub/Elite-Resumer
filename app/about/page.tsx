import Link from "next/link";
import { Orbitron, Open_Sans } from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const AboutPage = () => {
  return (
    <main className=" min-h-screen py-10 px-6">
      <title>Elite Resumer - About</title>
      <div className="max-w-7xl mx-auto">
        <section className="bg-[#4338ca] text-white rounded-xl p-10 shadow-md text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${orbitron.className}`}
          >
            About Elite Resumer
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed ${openSans.className}`}
          >
            Elite Resumer is your ultimate platform to craft professional,
            standout resumes tailored for your dream career. Whether you&apos;re
            a student, a fresh graduate, or a seasoned professional, we empower
            you with tools to leave an unforgettable impression.
          </p>
        </section>

        <section className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
                Our Vision
              </h2>
              <p className={`text-lg leading-relaxed ${openSans.className}`}>
                At Elite Resumer, we envision a world where every individual has
                the tools to showcase their skills and experiences in the most
                compelling way. We strive to bridge the gap between talent and
                opportunity.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
                Our Mission
              </h2>
              <p className={`text-lg leading-relaxed ${openSans.className}`}>
                Our mission is to simplify resume building, helping you focus on
                what matters most: landing your dream job. With cutting-edge
                technology and intuitive design, we aim to make the process
                efficient, engaging, and effective.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 bg-white p-10 rounded-xl shadow-md">
          <h2
            className={`text-3xl font-bold mb-6 text-center ${orbitron.className}`}
          >
            Why Choose Elite Resumer?
          </h2>
          <ul className={`space-y-4 text-lg ${openSans.className}`}>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              Easy-to-use resume builder with customizable templates.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              Advanced features like job-specific tailoring and keyword
              optimization.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              Clean, professional designs to stand out in competitive job
              markets.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              24/7 support and expert tips for crafting the perfect resume.
            </li>
          </ul>
        </section>

        <section className="mt-12 text-center">
          <h2 className={`text-3xl font-bold mb-6 ${orbitron.className}`}>
            Ready to Build Your Dream Resume?
          </h2>
          <p
            className={`text-lg md:text-xl leading-relaxed mb-6 ${openSans.className}`}
          >
            Join thousands of satisfied users who have taken their careers to
            the next level with Elite Resumer. Get started today and take the
            first step toward your bright future.
          </p>
          <Link
            href="/signup"
            className="bg-[#4338ca] text-white px-6 py-3 rounded-xl hover:bg-[#5a4ef5] transition-all duration-200"
          >
            Start Now
          </Link>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
