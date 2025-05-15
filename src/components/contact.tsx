import { Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="container px-6 py-12 mx-auto">
        <div className="text-center">
          <p className="font-medium text-green-500">Contact me</p>

          <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl">
            Get in touch
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-green-500 rounded-full bg-green-100/80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800">
              Email
            </h2>
            <p className="mt-2 text-gray-500">
              afifihsanke2@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-green-500 rounded-full bg-green-100/80 font-bold">
              Up
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800 ">
              Upwork
            </h2>
            <p className="mt-2 text-gray-500">
              <a href="https://www.upwork.com/freelancers/~01993d1a307f810c5f" target="_blank" className="text-green-700 hover:underline">Afif Ihsan</a>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-green-500 rounded-full bg-green-100/80">
              <Github className="h-5 w-5" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800">
              Github
            </h2>
            <p className="mt-2 text-gray-500">
              <a href="https://github.com/afifihsnm" target="_blank" className="text-green-700 hover:underline">SuchaJif</a>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <span className="p-3 text-green-500 rounded-full bg-green-100/80">
              <Linkedin className="h-5 w-5" />
            </span>

            <h2 className="mt-4 text-lg font-medium text-gray-800">
              LinkedIn
            </h2>
            <p className="mt-2 text-gray-500">
              <a href="https://www.linkedin.com/in/afifihsanmaulana/" target="_blank" className="text-green-700 hover:underline">Afif Ihsan Maulana</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
