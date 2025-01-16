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
const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen py-10 px-6">
      <title>Elite Resumer - Privacy Policy</title>
      <div className="max-w-7xl mx-auto">
        <header className="bg-[#4338ca] text-white rounded-xl p-10 shadow-md text-center">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${orbitron.className}`}
          >
            Privacy Policy
          </h1>
          <p
            className={`text-lg md:text-xl leading-relaxed ${openSans.className}`}
          >
            At Elite Resumer, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data.
          </p>
        </header>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Information We Collect
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            We collect the following types of information to provide you with
            the best experience:
          </p>
          <ul className={`mt-4 space-y-3 ${openSans.className}`}>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              Personal details such as name, email address, and phone number.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              Account credentials for secure access to your account.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              Usage data to improve our services and provide personalized
              features.
            </li>
          </ul>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            How We Use Your Information
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            We use your information for the following purposes:
          </p>
          <ul className={`mt-4 space-y-3 ${openSans.className}`}>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              To create and manage your account.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              To provide, operate, and improve our resume-building services.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              To communicate with you, including sending updates and promotional
              offers.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              To ensure the security of our platform.
            </li>
          </ul>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Sharing Your Information
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            We respect your privacy and will never sell your information.
            However, we may share your information in the following cases:
          </p>
          <ul className={`mt-4 space-y-3 ${openSans.className}`}>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              With trusted third-party service providers who assist in
              delivering our services.
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#4338ca] font-bold">•</span>
              When required by law or to protect our rights and property.
            </li>
          </ul>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Your Rights
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            You have the right to access, update, or delete your personal
            information. To exercise these rights, please contact us at{" "}
            <Link
              href="mailto:syedaliaskarizaidi1@mail.com"
              className={`text-xl text-[#4338ca] hover:text-[rgb(131,122,224)] duration-150 transition-all ${akayaKanadaka.className}`}
            >
              support@eliteresumer.com
            </Link>
          </p>
        </section>

        <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
          <h2 className={`text-3xl font-bold mb-4 ${orbitron.className}`}>
            Updates to This Policy
          </h2>
          <p className={`text-lg leading-relaxed ${openSans.className}`}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Please review this page periodically for
            updates.
          </p>
        </section>

        <footer className="mt-12 text-center">
          <p className={`text-lg ${openSans.className}`}>
            If you have any questions about our Privacy Policy, please contact
            us at{" "}
            <Link
              href="mailto:syedaliaskarizaidi1@mail.com"
              className={`text-xl text-[#4338ca] hover:text-[rgb(131,122,224)] duration-150 transition-all ${akayaKanadaka.className}`}
            >
              support@eliteresumer.com
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
