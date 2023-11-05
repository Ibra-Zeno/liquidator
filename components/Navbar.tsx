"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./ui/Logo";
import { FC } from "react";
import { cn } from "@/lib/utils";

const aboutLinks: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/",
    description: "Learn more about our mission and values.",
  },
  {
    title: "Services",
    href: "/",
    description: "Explore our areas of expertise and how we can help you.",
  },
  {
    title: "FAQs",
    href: "/",
    description: "Find answers to your most common questions.",
  },
];

const teamLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Liquidators",
    href: "/",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Senior Management",
    href: "/",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Liquidation",
    href: "/",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Conveyancing & Subsale",
    href: "/",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Accounts",
    href: "/",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Admin",
    href: "/",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Consultants",
    href: "/",
    description: "lorem dol",
  },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="relative w-full">
      <section
        className="mx-auto flex max-w-7xl items-center justify-between p-2"
        id="container"
      >
        <div>
          <Logo />
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="relative grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {aboutLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink
                          asChild
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <p className="text-sm leading-snug text-gray-500">
                            <span className="block text-base font-bold text-gray-700">
                              {link.title}
                            </span>
                            {link.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Our Team</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {teamLinks.map((link) => (
                      <li key={link.title}>
                        <NavigationMenuLink
                          asChild
                          href={link.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <p className="text-sm leading-snug text-gray-500">
                            <span className="block text-base font-bold text-gray-700">
                              {link.title}
                            </span>
                            {link.description}
                          </p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Contact Us
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
