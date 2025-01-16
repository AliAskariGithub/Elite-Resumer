import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/auth/Header";

export const metadata: Metadata = {
  title: "Elite Resumer",
  description: "Elite Resumer is a resume builder. Here you can create your own resume in minutes with few information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mt-12 md:mt-20">
        {children}
        </main>
      </body>
    </html>
  );
}
