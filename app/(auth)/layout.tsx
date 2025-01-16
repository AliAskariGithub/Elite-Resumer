import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elite Resumer - Register",
  description: "Elite Resumer is a resume builder. Here you can create your own resume in minutes with few information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex justify-center items-center bg-white">
        {children}
      </body>
    </html>
  );
}
