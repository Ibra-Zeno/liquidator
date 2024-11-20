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
        name: "Senior Management",
        href: "/team/senior-management",
      },
      {
        name: "Liquidation",
        href: "/team/liquidation",
      },
      {
        name: "Conveyancing & Subsale",
        href: "/team/conveyancing-subsale",
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
    ],
  },
];

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div>
      <footer className="align-center flex flex-col justify-center border-t-2 border-t-black px-4 pt-12">
        <section className="container mx-auto flex flex-col justify-center gap-x-32 md:flex-row ">
          {footerLinks.map((link) => (
            <div key={link.title} className="">
              <h4 className=" font-semibold">{link.title}</h4>
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
          <div id="contact-section">
            <h4 className="grid text-sm font-semibold sm:text-base">
              Head Office
            </h4>
            <div className="my-1 h-0.5 w-24 rounded-md bg-black"></div>
            <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
              <div className="flex w-auto flex-col space-y-6">
                {contactInfo
                  .filter((contact) => contact.title !== "Address")
                  .map((contact) => (
                    <div
                      key={contact.title}
                      className="flex flex-row items-start gap-x-3 px-2 text-sm"
                    >
                      <div className="flex">{contact.icon}</div>
                      <div>{contact.content()}</div>
                    </div>
                  ))}
              </div>
              <div className="mt-6 px-2">
                {contactInfo
                  .filter((contact) => contact.title === "Address")
                  .map((contact) => (
                    <div
                      key={contact.title}
                      className="flex flex-row items-start gap-x-3 px-2 text-sm"
                    >
                      <div className="flex">{contact.icon}</div>
                      {contact.content()}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>
        <section className="container mt-10 flex flex-wrap border-y border-opacity-25 py-2 ">
          {companyLocations.map((location) => (
            <div key={location.name} className="mx-auto my-1.5">
              <div className="flex items-center gap-x-2">
                {location.icons}
                <h4 className="text-sm font-medium">{location.name}</h4>
              </div>
              <p className="ml-8 mt-1 text-xs ">{location.id}</p>
            </div>
          ))}
        </section>
        <section className="container mt-8 flex max-w-6xl justify-between pb-6 ">
          <p className="text-xs">
            © 2021 theliquidator.net All rights reserved.
          </p>
          <div>
            <div className="flex flex-row gap-x-10">
              {SocialMediaLinks.map((media) => (
                <div
                  key={media.name}
                  className="flex items-center justify-center rounded-full "
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
{
  /* 

<footer className="my-10 border-t border-gray-700/40 lg:mt-20">
<div className="mx-auto max-w-[85rem] px-4 py-6  sm:px-6 lg:px-8 ">
<div className="flex flex-col justify-between md:flex-row">
  <div className="col-span-full mb-8 lg:col-span-1">
    <div className="mx-auto w-fit scale-110 lg:ml-0">
      <Logo />
    </div>
    <div className="mt-6">
      {contactInfo.map((contact) => (
        <div
          key={contact.title}
          className="mt-2.5 grid grid-cols-4 px-2 text-sm"
        >
          <div className="col-span-1 mr-4 flex gap-x-3">
            <div className="flex h-5 w-5">{contact.icon}</div>
            <h4 className="mt-1 w-fit text-xs italic">
              {contact.title}
            </h4>
          </div>
          <div className="col-span-3 px-2">{contact.content()}</div>
        </div>
      ))}
    </div>
    <h4 className="mx-auto mt-6 max-w-sm text-center text-sm font-medium leading-6 text-gray-500">
      Propelling Business Innovations Forward and Cultivating
      Financial Empowerment for Sustainable Growth
    </h4>
  </div>

  {/* Footer Nav */
}
//   <section className="mx-auto flex max-w-[26rem] flex-wrap justify-around gap-x-8 sm:mx-0">
//     {footerLinks.map((link) => (
//       <div key={link.title} className="col-span-1">
//         <h4 className="text-sm font-semibold ">{link.title}</h4>
//         <div className="mt-3 grid space-y-3">
//           {link.links.map((link) => (
//             <p key={link.name}>
//               <Link
//                 className="inline-flex gap-x-2 text-xs transition duration-150 ease-in-out hover:text-gray-600 focus:text-gray-600 focus:outline-none"
//                 href={link.href}
//               >
//                 {link.name}
//               </Link>
//             </p>
//           ))}
//         </div>
//       </div>
//     ))}
//   </section>
// </div>
// {/* Contact Info */}
// {/* Houses */}

// <div className="flex gap-y-2 border-t border-gray-400/50 sm:mt-4 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
//   <div className="flex items-center justify-between ">
//     <p className="text-sm">© All rights reserved.</p>
//   </div>

//   <div>
//     <a className="mt-1 inline-flex h-10 w-10 p-1" href="#">
//       <Slack />
//     </a>
//     <a className="mt-1 inline-flex h-10 w-10 p-1" href="#">
//       <Slack />
//     </a>
//     <a className="mt-1 inline-flex h-10 w-10 p-1" href="#">
//       <Slack />
//     </a>
//     <a className="mt-1 inline-flex h-10 w-10 p-1" href="#">
//       <Slack />
//     </a>
//     <a className="mt-1 inline-flex h-10 w-10 p-1" href="#">
//       <Slack />
//     </a>
//   </div>
// </div>
// </div>
// </footer> */}
