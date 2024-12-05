"use client";

import React, { useState } from "react";
import { useToast } from "@/components/hooks/use-toast";
import { Button } from "@/components/shadcn/ui/button";
import {
  Briefcase,
  Facebook,
  Landmark,
  Library,
  Link as Link1,
  Linkedin,
  Mail,
  MapPin,
  MoveRight,
  PackageIcon,
  Phone,
  Printer,
  ShieldQuestion,
} from "lucide-react";
import Link from "next/link";

const companyLocations = [
  {
    name: "Radiant Consulting Asia Sdn Bhd",
    id: "(773117-T)",
    margin: "mr-auto",
  },
  {
    name: "Chilterns Insolvency Sdn Bhd",
    id: "(822208-U)",
    margin: "mx-auto",
  },
  {
    name: "MJ Insolvency",
    id: "(LLP0037224-LAL) (NF 2776)",
    margin: "ml-auto",
  },
  {
    name: "TS Insolvency",
    id: "(NF 2776)",
    margin: "ml-auto",
  },
  {
    name: "Radiant Corporate Solutions Sdn Bhd",
    id: "(1005821-D)",
    margin: "ml-auto",
  },
];

const ContactPage = () => {
  const [showMapOnly, setShowMapOnly] = useState(false);
  const { toast } = useToast();
  const feature = [
    {
      title: "Visit Us",
      sub: "Click below to copy our address and find us on a map.",
      description: () => (
        <Button
          onClick={handleButtonClick}
          className="z-20 rounded bg-gray-800 px-4 py-1 text-white shadow-lg hover:bg-gray-700"
        >
          Mutiara Bangsar
        </Button>
      ),
      icon: <MapPin />,
    },
    {
      title: "Email Us",
      sub: "Send us an email and we'll respond as soon as possible.",
      description: () => (
        <Button>
          <Link href="mailto:info@theliquidator.net">
            info@theliquidator.net
          </Link>
        </Button>
      ),
      icon: <Mail />,
    },
    {
      title: "Call Us",
      sub: "Reach out to us by phone to ask a question or learn more.",
      description: () => (
        <Button>
          <Link href="tel:60322824558">+6 03 2282 4558</Link>
        </Button>
      ),
      icon: <Phone />,
    },
    {
      title: "Write To Us",
      sub: "Need to send us documents? \n \n Use the number below.",
      description: () => (
        <Button>
          <Link href="#">+6 03 2282 1558</Link>
        </Button>
      ),
      icon: <Printer />,
    },
  ];
  const textToCopy =
    "Suite 8-11-4, Menara Mutiara Bangsar, Jalan Liku, Off Jalan Riong, 59100 Kuala Lumpur, Malaysia";

  const handleButtonClick = () => {
    // Copy text to clipboard
    if (!showMapOnly) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast({
            description: "Address has been copied.",
          });
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }

    // Toggle showMapOnly
    setShowMapOnly(!showMapOnly);
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3983.895094635971!2d101.67364755297056!3d3.122438942040024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSUITE%208-11-4%2C%20MENARA%20MUTIARA%20BANGSAR%2C%20JALAN%20LIKU%20OFF%20JALAN%20RIONG%2C%2059100%20KUALA%20LUMPUR!5e0!3m2!1sen!2suk!4v1732475647576!5m2!1sen!2suk"
          title="map"
          width="100%"
          height="100%"
          style={{
            filter: showMapOnly
              ? "none"
              : "grayscale(1) contrast(1.2) opacity(0.4)",
          }}
          scrolling="no"
          allowFullScreen={undefined}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      {/* Toggle Button */}
      {showMapOnly && (
        <button
          onClick={handleButtonClick}
          className="absolute left-4 top-2 z-20 rounded bg-gray-800 px-6 py-2 text-white shadow-lg hover:bg-gray-700"
        >
          {showMapOnly ? "Go Back" : "Show Map Only & Copy Address"}
        </button>
      )}
      {/* Content Section */}
      {!showMapOnly && (
        <div className="py-12">
          <div className="container relative z-10 mx-auto max-w-7xl bg-white">
            <>
              <section className="">
                <div className="relative flex flex-col">
                  <div className="relative flex h-full flex-col lg:grid lg:grid-cols-8">
                    {/* <!-- Left side contact start --> */}
                    <div className="order-last col-span-3 h-full rounded-b bg-gradient-to-tr from-sky-950 to-cyan-900 px-4 py-8 text-gray-100/95 sm:px-8 lg:order-none lg:rounded-b-none lg:rounded-l">
                      <div className="flex h-full flex-col justify-around">
                        <div className="hidden lg:block">
                          <h1 className="text-center text-base font-semibold text-gray-200 md:text-lg lg:text-3xl">
                            We would love to hear <br />
                            from you!
                          </h1>
                        </div>

                        <div className="divide-classyCream/50 divide-y pb-8 lg:py-8">
                          {/* <!-- Icon Block --> */}
                          <div className="flex gap-x-7 py-2 lg:py-6">
                            <Briefcase className="h-7 w-7" strokeWidth={1.4} />
                            <div>
                              <h3 className="text-sm font-semibold text-gray-200 md:text-base">
                                Explore Our Services
                              </h3>
                              <p className="mt-1 text-xs text-gray-300 md:text-sm">
                                We offer a wide range of services suited to your
                                needs
                              </p>
                              <a
                                className="mt-2 inline-flex  items-center gap-x-2 text-xs font-medium text-gray-400 transition duration-300 ease-in-out hover:text-gray-200 md:text-sm"
                                href="/courses.html"
                              >
                                View Courses
                                <MoveRight className="-mb-0.5 h-5 w-5" />
                              </a>
                            </div>
                          </div>
                          {/* <!-- End Icon Block --> */}

                          {/* <!-- Icon Block --> */}
                          <div className="flex gap-x-7 py-6">
                            <ShieldQuestion
                              className="h-7 w-7"
                              strokeWidth={1.4}
                            />
                            <div>
                              <h3 className="text-sm font-semibold text-gray-200 md:text-base">
                                FAQ
                              </h3>
                              <p className="mt-1 text-xs text-gray-300 md:text-sm">
                                Find our customer&apos;s most Frequently Asked
                                Questions.
                              </p>
                              <a
                                className="mt-2 inline-flex items-center gap-x-2 text-xs font-medium text-gray-400 transition duration-300 ease-in-out hover:text-gray-200 md:text-sm"
                                href="/about.html#FAQs "
                              >
                                Visit FAQ
                                <MoveRight className="-mb-0.5 h-5 w-5" />
                              </a>
                            </div>
                          </div>
                          {/* <!-- End Icon Block --> */}
                          {/* <!-- Icon Block --> */}
                          <div className="flex gap-x-7 py-6">
                            <Link1 className="h-6 w-6" strokeWidth={1.4} />
                            <div>
                              <h3 className="text-sm font-semibold text-gray-200 md:text-base">
                                Useful Links
                              </h3>
                              <p className="mt-1 text-xs text-gray-300 md:text-sm">
                                Explore a curated list of helpful resources to
                                provide you with answers.
                              </p>
                              <a
                                className="mt-2 inline-flex items-center gap-x-2 text-xs font-medium text-gray-400 transition duration-300 ease-in-out hover:text-gray-200 md:text-sm"
                                href="mailto:info@theliquidator.net"
                              >
                                Useful links{" "}
                                <MoveRight className="-mb-0.5 h-5 w-5" />
                              </a>
                            </div>
                          </div>
                          {/* <!-- End Icon Block --> */}
                        </div>
                        {/* <!-- Social Links --> */}
                        <div className="relative flex flex-col text-sm">
                          <div className="mx-auto mt-8 flex w-full items-center justify-around bg-transparent">
                            <div className="flex justify-around space-x-5 text-gray-100 lg:space-x-10">
                              <a
                                href="#"
                                className="rounded-full bg-sky-950 p-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                              >
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                              </a>
                              <a
                                href="#"
                                className="rounded-full bg-sky-950 p-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                              >
                                <span className="sr-only">Linkedin</span>
                                <Linkedin className="h-6 w-6" />
                              </a>
                              <a
                                href="#"
                                className="rounded-full bg-sky-950 p-1 transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                              >
                                <span className="sr-only">Email</span>
                                <Mail className="h-6 w-6" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Left side contact end --> */}
                    {/* <!-- Right side contact start--> */}
                    <div className="relative col-span-5 block h-full px-6 py-8 sm:px-12">
                      <div className="relative mx-auto flex h-full w-full flex-col bg-transparent sm:px-4 md:px-0">
                        {/* <!-- Header Right Side --> */}
                        <div className="flex flex-col justify-center">
                          <div className="lg:hidden">
                            <h2 className="block text-center text-xl font-bold text-primary/90 drop-shadow-lg md:text-3xl lg:text-3xl">
                              Lets get started!
                            </h2>
                            <div className="mx-auto mb-4 mt-4 h-1 w-14 rounded-full bg-gray-500/20 shadow-sm"></div>
                            <p className="mb-4 mt-3 text-center text-sm leading-6 text-gray-600">
                              We are here to help you every step of the way{" "}
                              <br />
                              Get in touch with us today!
                            </p>
                          </div>
                        </div>
                        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                          {feature.map((feature, idx) => (
                            <div
                              className="flex min-w-[18rem] flex-col justify-around rounded-sm bg-gray-200 p-6 md:min-h-[300px] md:p-8"
                              key={idx}
                            >
                              <span className=" mx-auto flex items-center  justify-center rounded-full bg-gray-300 p-2">
                                {feature.icon}
                              </span>
                              <div>
                                <h3 className="mt-8 text-center text-lg font-medium md:text-2xl">
                                  {feature.title}
                                </h3>
                                <p className="my-6 mt-2 text-center text-muted-foreground">
                                  {feature.sub}
                                </p>
                                <div className="grid justify-center">
                                  {feature.description()}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
            <section className="container mt-6 flex flex-wrap  divide-x-2 border-y border-opacity-25 py-2">
              <div className="mx-auto max-w-[85rem] px-2 py-6 lg:py-8">
                {/* Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-20 lg:grid-cols-5 lg:gap-8">
                  {companyLocations.map((location, index) => (
                    <div key={index} className="text-center">
                      {/* Icon */}
                      <Landmark className="mx-auto h-8 w-auto text-gray-800" />

                      {/* Name */}
                      <div className="mt-2 sm:mt-6">
                        <p className="text-gray-800">{location.name}</p>
                      </div>

                      {/* ID */}
                      <div className="mt-3">
                        <p className="text-xs text-gray-600">{location.id}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
