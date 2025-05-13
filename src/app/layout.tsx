import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afif Ihsan | Full Stack Developer & DevOps Engineer Freelancer",
  description: "I help businesses build scalable web apps and cloud infrastructure. Full Stack + DevOps freelancer for hire. Based remotely, serving globally.",
  keywords: [
    "Afif Ihsan Maulana",
    "Web Development Services",
    "Freelance web developer for small businesses",
    "Afif Ihsan Maulana fullstack developer",
    "AWS engineer",
    "Freelancer portfolio website",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
