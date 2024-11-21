"use client";

import { FC } from "react";
import {
  Slack,
  Landmark,
  MapPinned,
  Phone,
  Linkedin,
  Printer,
  AtSign,
  Mail,
  Facebook,
  SendHorizontal,
} from "lucide-react";
import Logo from "./ui/Logo";
import Link from "next/link";
import { Button } from "./shadcn/ui/button";

interface FooterProps {}
const companyLocations = [
  {
    name: "Radiant Consulting Asia Sdn Bhd",
    icons: <Landmark />,
    id: "(773117-T)",
    margin: "mr-auto",
  },
  {
    name: "Chilterns Insolvency Sdn Bhd",
    icons: <Landmark />,
    id: "(822208-U)",
    margin: "mx-auto",
  },
  {
    name: "MJ Insolvency",
    icons: <Landmark />,
    id: "(LLP0037224-LAL) (NF 2776)",
    margin: "ml-auto",
  },
  {
    name: "TS Insolvency",
    icons: <Landmark />,
    id: "(NF 2776)",
    margin: "ml-auto",
  },
  {
    name: "Radiant Corporate Solutions Sdn Bhd",
    icons: <Landmark />,
    id: "(1005821-D)",
    margin: "ml-auto",
  },
];

const contactInfo = [
  {
    icon: <Phone size={16} />,
    title: "Tel",
    content: () => <Link href="tel:60322824558">+6 03 2282 4558</Link>,
  },
  {
    icon: <Printer size={16} />,
    title: "Fax",
    content: () => <p>+6 03 2282 1558</p>,
  },
  {
    icon: <AtSign size={16} />,
    title: "Email",
    content: () => (
      <Link href="mailto:info@theliquidator.net">info@theliquidator.net</Link>
    ),
  },
  {
    icon: <MapPinned size={16} />,
    title: "Address",
    content: () => (
      <p className="max-w-[16rem]">
        Suite 8-11-4, Menara Mutiara Bangsar, Jalan Liku, Off Jalan Riong, 59100
        Kuala Lumpur, Malaysia
      </p>
    ),
  },
];

const SocialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/theliquidator.net/",
    logo: <Facebook strokeWidth={1.25} />,
  },
  {
    name: "Linkedin",
    href: "https://www.theliquidator.net/",
    logo: <Linkedin strokeWidth={1.25} />,
  },
  {
    name: "Email",
    href: "mailto:info@theliquidator.net",
    logo: <Mail strokeWidth={1.25} />,
  },
];

const footerLinks = [
  {
    title: "Useful Links",
    // TODO: Change name of the above to more professional.
    links: [
      {
        name: "Our Values",
        href: "/about",
      },
      {
        name: "Services",
        href: "/services",
      },
      {
        name: "FAQs",
        href: "/FAQ",
      },
      {
        name: "Gallery",
        href: "/gallery",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },
  {
    title: "Our Team",
    links: [
      {
        name: "Liquidators",
        href: "/team/liquidators",
      },

      {
        name: "Liquidation",
        href: "/team/liquidation",
      },

      {
        name: "Accounts",
        href: "/team/accounts",
      },
      {
        name: "Admin",
        href: "/team/admin",
      },
      {
        name: "Consultants",
        href: "/team/consultants",
      },
      {
        name: "Senior Management",
        href: "/team/senior-management",
      },
      {
        name: "Conveyancing & Subsale",
        href: "/team/conveyancing-subsale",
      },
    ],
  },
];
const Footer: FC<FooterProps> = ({}) => {
  return (
    <div>
      <footer className="align-center flex flex-col justify-center border-t-2 border-t-black px-4  pt-12">
        <section className="container mx-auto flex flex-col justify-center gap-x-14 px-20 md:flex-row">
          {footerLinks.map((link, index) => (
            <div
              key={link.title}
              className={`relative ${
                index !== footerLinks.length - 1 ? "md:border-r md:pr-24" : ""
              }`}
            >
              <h4 className="font-semibold">{link.title}</h4>
              <div className="mb-5 mt-0.5 h-0.5 w-24 rounded-md bg-black"></div>
              <div
                className={`mt-3 grid ${
                  link.title === "Our Team" ? "grid-cols-2 gap-4" : "space-y-3"
                }`}
              >
                {link.links.map((link) => (
                  <p key={link.name}>
                    <Link
                      className="inline-flex gap-x-2 text-sm transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  </p>
                ))}
              </div>
            </div>
          ))}
          <div className="relative md:border-l md:pl-24">
            <h4 className="grid text-sm font-semibold sm:text-base">
              Head Office
            </h4>
            <div className="mb-5 mt-0.5 h-0.5 w-24 rounded-md bg-black"></div>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
              <div className="flex w-auto flex-col space-y-6">
                {contactInfo
                  .filter((contact) => contact.title !== "Address")
                  .map((contact) => (
                    <div
                      key={contact.title}
                      className="flex flex-row items-start gap-x-3 px-2 text-sm"
                    >
                      <div className="mt-0.5 flex">{contact.icon}</div>
                      <div>{contact.content()}</div>
                    </div>
                  ))}
              </div>
              <div className="px-2">
                {contactInfo
                  .filter((contact) => contact.title === "Address")
                  .map((contact) => (
                    <div
                      key={contact.title}
                      className="flex flex-row items-start gap-x-3 px-2 text-sm"
                    >
                      <div className="mt-0.5 flex">{contact.icon}</div>
                      {contact.content()}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-10 flex flex-wrap border-y border-opacity-25 py-2">
          {companyLocations.map((location) => (
            <div key={location.name} className="mx-auto my-1.5">
              <div className="flex items-center gap-x-2">
                {location.icons}
                <h4 className="text-sm font-medium">{location.name}</h4>
              </div>
              <p className="ml-8 mt-1 text-xs">{location.id}</p>
            </div>
          ))}
        </section>
        <section className="container mt-6 flex max-w-6xl justify-between pb-6">
          <p className="my-auto text-justify text-xs">
            © 2024 theliquidator.net All rights reserved.
          </p>
          <div>
            <div className="flex flex-row gap-x-10">
              {SocialMediaLinks.map((media) => (
                <div
                  key={media.name}
                  className="flex items-center justify-center rounded-full"
                >
                  <Link
                    href={media.href}
                    className="rounded-full p-1.5 transition-all duration-150 ease-in-out hover:bg-gray-400"
                  >
                    {media.logo}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
