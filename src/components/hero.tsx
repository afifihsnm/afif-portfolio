"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen relative">
      <div className="text-center mt-[-10vh]">
        <h1 className="text-3xl font-semibold mb-4">
          I&apos;m <span className="underline decoration-green-500">Afif</span>{" "}
          Ihsan Maulana
          <span className="text-green-500">.</span>
        </h1>
        <h2 className="text-sm font-medium mb-8">
          Web Designer | Full Stack Web Developer | DevOps Engineer
        </h2>

        <div className="relative w-56 h-56 mx-auto mb-16 rounded-full overflow-hidden">
          <Image
            src="/afif.jpeg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="relative animate-bounce p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 z-10"
        aria-label="Go to About Me section"
      >
        <ChevronDown className="h-6 w-6" />
        <span className="sr-only">Go to About Me section</span>
      </button>
    </section>
  );
}
