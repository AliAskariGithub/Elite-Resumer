import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Orbitron, Open_Sans, Akaya_Kanadaka } from "next/font/google";
import { register } from "@/action/user";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

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

const RegisterPage = async () => {
  const session = await getSession();
    const user = session?.user;
    if(user) redirect("/");

  return (
    <div className="mt-10 max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-8 shadow-lg bg-gray-200 border border-gray-300">
      <h1
        className={`text-3xl font-bold text-[#4338ca] text-center mb-2 ${orbitron.className}`}
      >
        Welcome to Elite Resumer
      </h1>
      <p
        className={`text-[#958cff] text-center mb-6 ${openSans.className} font-semibold`}
      >
        Please provide all the necessary information to get started.
      </p>

      <form className="space-y-6" action={register}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label
              htmlFor="firstName"
              className={`text-sm text-[#4338ca] ${akayaKanadaka.className}`}
            >
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="Ali"
              type="text"
              name="firstName"
              className={`mt-2 border-gray-300 bg-white text-black ${akayaKanadaka.className}`}
            />
          </div>
          <div>
            <Label
              htmlFor="lastName"
              className={`text-sm text-[#4338ca] ${akayaKanadaka.className}`}
            >
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Askari"
              type="text"
              name="lastName"
              className={`mt-2 border-gray-300 bg-white text-black ${akayaKanadaka.className}`}
            />
          </div>
        </div>

        <div>
          <Label
            htmlFor="email"
            className={`text-sm text-[#4338ca] ${akayaKanadaka.className}`}
          >
            Email Address
          </Label>
          <Input
            id="email"
            placeholder="eliteresumer@gmail.com"
            type="email"
            name="email"
            className={`mt-2 border-gray-300 bg-white text-black ${akayaKanadaka.className}`}
          />
        </div>

        <div>
          <Label
            htmlFor="password"
            className={`text-sm text-[#4338ca] ${akayaKanadaka.className}`}
          >
            Password
          </Label>
          <Input
            id="password"
            placeholder="********"
            type="password"
            name="password"
            className={`mt-2 border-gray-300 bg-white text-black ${akayaKanadaka.className}`}
          />
        </div>

        <button className="w-full button-hover-effect shadow transition-all">
          <span>Sign Up &rarr;</span>
        </button>

        <p
          className={`text-sm text-[#4338ca] text-center mt-4 ${openSans.className}`}
        >
          Already have an account?{" "}
          <Link
            href="/login"
            className={`text-[#4338ca] hover:text-[#837ae0] duration-150 transition-all font-semibold ${orbitron.className}`}
          >
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;