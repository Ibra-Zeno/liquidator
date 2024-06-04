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
} from "@/components/shadcn/ui/navigation-menu";
import Logo from "./ui/Logo";
import { FC } from "react";
import { cn } from "@/lib/utils";

const aboutLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Our Values",
    href: "/about",
    description: "Learn more about our mission and values.",
  },
  {
    title: "Services",
    href: "/services",
    description: "Explore our areas of expertise and how we can help you.",
  },
  {
    title: "FAQs",
    href: "/FAQ",
    description: "Find answers to your most common questions.",
  },
];

const teamLinks: { title: string; href: string; description: string }[] = [
  {
    title: "Liquidators",
    href: "/team/liquidators",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Senior Management",
    href: "/team/senior-management",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Liquidation",
    href: "/team/liquidation",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Conveyancing & Subsale",
    href: "/team/conveyancing-subsale",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Accounts",
    href: "/team/accounts",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Admin",
    href: "/team/admin",
    description:
      "lorem dolor sit amet consectetur adipisicing elit. consectetur adipisicing elit.",
  },
  {
    title: "Consultants",
    href: "/team/consultants",
    description: "lorem dol",
  },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="nav relative hidden w-full lg:block">
      <section
        className="max-w-8xl mx-auto flex items-center justify-between p-3"
        id="container"
      >
        <div className="z-30">
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
                          // asChild
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
                  href="/gallery"
                  className={navigationMenuTriggerStyle()}
                >
                  Gallery
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/contact"
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
