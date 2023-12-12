"use client";
import Image from "next/image";
import { FC } from "react";

interface pageProps {}

const Contact: FC<pageProps> = ({}) => {
  const servicesItems = [
    "Mobile development",
    "UI/UX Design",
    "web development",
    "SEO",
  ];
  return (
    <main className="flex overflow-hidden">
      <div className="hidden flex-1 lg:block">
        <Image
          src="/images/index/index-bg.jpg"
          className="h-screen object-cover"
          alt="Contact bg Image"
          height={1000}
          width={1000}
        />
      </div>
      <div className="flex-1 py-12 lg:-ml-44 lg:flex lg:h-screen lg:justify-center lg:overflow-auto">
        <div className="mx-auto max-w-lg flex-1 px-4 text-gray-600">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
              Get in touch
            </h3>
            <p className="mt-3">
              We’d love to hear from you! Please fill out the form bellow.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 space-y-5 lg:pb-12"
          >
            <div>
              <label className="font-medium">Full name</label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-gray-800"
              />
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-gray-800"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto flex h-6 items-center border-r pr-2">
                  <select className="h-full rounded-lg bg-transparent text-sm outline-none">
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+1 (555) 000-000"
                  required
                  className="w-full appearance-none rounded-lg border bg-transparent py-2 pl-[4.5rem] pr-3 shadow-sm outline-none focus:border-gray-800"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Services</label>
              <ul className="mt-3 grid grid-cols-2 flex-wrap gap-x-6 gap-y-2">
                {servicesItems.map((item, idx) => (
                  <li key={idx} className="flex gap-x-3 text-sm">
                    <div>
                      <input
                        id={`service-${idx}`}
                        type="checkbox"
                        className="checkbox-item peer hidden"
                      />
                      <label
                        htmlFor={`service-${idx}`}
                        className="relative flex h-5 w-5 cursor-pointer rounded-md border bg-white ring-indigo-600 ring-offset-2 duration-150 after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:h-2.5 after:w-1.5 after:rotate-45 after:border-b-2 after:border-r-2 after:border-white peer-checked:bg-indigo-600 peer-active:ring"
                      ></label>
                    </div>
                    <label
                      htmlFor={`service-${idx}`}
                      className="cursor-pointer"
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                className="mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-gray-800"
              ></textarea>
            </div>
            <button className="w-full rounded-lg bg-gray-800 px-4 py-2 font-medium text-white duration-150 hover:bg-gray-700 active:bg-gray-900">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
