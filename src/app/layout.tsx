import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jane Doe | Actor & Creator",
  description: "Cinematic portfolio of Jane Doe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#050505] text-[#f5f5f5] min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
