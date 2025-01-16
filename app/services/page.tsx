import { Orbitron, Open_Sans, Akaya_Kanadaka } from "next/font/google";
import Link from "next/link";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "600",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const akayaKanadaka = Akaya_Kanadaka({
  subsets: ["latin"],
  weight: "400",
});

const Services = () => {
  return (
    <main className="min-h-screen py-10 px-6">
      <title>Elite Resumer - Services</title>
      <div className="max-w-7xl mx-auto">
        <header className="bg-[#4338ca] text-white rounded-xl p-10 shadow-md text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${orbitron.className}`}
          >
            Our Services
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed ${openSans.className}`}
          >
            At Elite Resumer, we provide top-notch services to help you stand
            out in the job market with personalized resume-building and career
            tools.
          </p>
        </header>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Resume Building
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            Our easy-to-use platform allows you to create professional resumes
            tailored to your needs with modern templates and design options.
          </p>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Cover Letter Assistance
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            We guide you through writing compelling cover letters to highlight
            your skills and stand out to employers.
          </p>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Career Coaching
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            Our expert career coaches offer personalized advice to help you
            navigate your career path and achieve your goals.
          </p>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            LinkedIn Optimization
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            Enhance your LinkedIn profile to attract recruiters and showcase
            your professional achievements effectively.
          </p>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Job Application Support
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            We assist you in applying to your dream jobs with personalized tips
            and optimized application strategies.
          </p>
        </section>

        <footer className="mt-12 text-center">
          <p className={`text-lg ${openSans.className}`}>
            Ready to elevate your career? Contact us at{" "}
            <Link
              href="mailto:syedaliaskarizaidi1@mail.com"
              className={`text-xl text-[#4338ca] hover:text-[rgb(131,122,224)] duration-150 transition-all ${akayaKanadaka.className}`}
            >
              support@eliteresumer.com
            </Link>{" "}
            to get started!
          </p>
        </footer>
      </div>
    </main>
  );
};

export default Services;
