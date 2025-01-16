"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SecretPage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET_CODE;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (code === secret) {
      router.push("/admin/dashboard");
    } else {
      router.push("/");
    }
  };

  return (
    <div className="mt-10 max-w-lg w-full mx-auto rounded-2xl p-6 shadow-lg bg-gray-200 border border-gray-300">
      <h1 className="text-2xl font-bold text-center text-[#4338ca] mb-4">
        Enter Secret Code
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="password"
          placeholder="Enter the secret code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4338ca] focus:outline-none"
        />
        <button
          type="submit"
          className="w-full button-hover-effect"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default SecretPage;
