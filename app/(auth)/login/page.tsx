import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Orbitron, Open_Sans, Akaya_Kanadaka } from "next/font/google";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { login } from "@/action/user";
import { signIn } from "@/auth";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/getSession";

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

const LoginPage = async () => {
  const session = await getSession();
  const user = session?.user;
  if(user) redirect("/");

  return (
    <div className="mt-10 max-w-lg w-full mx-auto rounded-none md:rounded-2xl p-6 md:p-8 shadow-lg bg-gray-200 border border-gray-300">
      <h1
        className={`text-3xl font-bold text-[#4338ca] text-center mb-2 ${orbitron.className}`}
      >
        Welcome Back to Elite Resumer
      </h1>

      <p
        className={`text-[#958cff] text-center mb-6 ${openSans.className} font-semibold`}
      >
        Log in to continue building your professional resume.
      </p>

      <form className="space-y-6" action={login}>
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
          <span>Log In &rarr;</span>
        </button>

        <p
          className={`text-sm text-[#4338ca] text-center mt-4 ${openSans.className}`}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className={`text-[#4338ca] hover:text-[#837ae0] duration-150 transition-all font-semibold ${orbitron.className}`}
          >
            Sign Up Here
          </Link>
        </p>

        <div className="my-6 flex items-center">
          <hr className="flex-1 border-gray-500" />
          <span className={`text-sm text-gray-700 px-2 ${openSans.className}`}>
            OR
          </span>
          <hr className="flex-1 border-gray-500" />
        </div>
      </form>

      <div className="flex flex-col space-y-4">
        <form
          action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <button className="flex items-center justify-center w-full border border-gray-300 bg-white shadow transition-all rounded-full py-2">
            <FcGoogle className="mr-2" size={20} />
            Continue with Google
          </button>
        </form>

        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button className="flex items-center justify-center w-full border border-gray-300 bg-black text-white shadow transition-all rounded-full py-2">
            <FaGithub className="mr-2" size={20} />
            Continue with GitHub
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
