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
import { ChevronDown } from "lucide-react";
import { FC } from "react";
import { cn } from "@/lib/utils";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
  Button,
} from "@nextui-org/react";

const aboutLinks = [
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

const teamLinks = [
  {
    title: "Liquidators",
    href: "/team/liquidators",
    description: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Senior Management",
    href: "/team/senior-management",
    description: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Liquidation",
    href: "/team/liquidation",
    description: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Conveyancing & Subsale",
    href: "/team/conveyancing-subsale",
    description: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Accounts",
    href: "/team/accounts",
    description: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Admin",
    href: "/team/admin",
    description: "Lorem dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Consultants",
    href: "/team/consultants",
    description: "Lorem dol.",
  },
];

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="nav relative w-full md:absolute md:top-0 md:w-full lg:block">
      <section
        className="mx-auto flex max-w-8xl items-center justify-between p-3"
        id="container"
      >
        <div className="z-30">
          <Logo />
        </div>
        <div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Dropdown>
                  <DropdownTrigger className="bg-transparent">
                    <Button className={navigationMenuTriggerStyle()}>
                      About Us <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="About Us" className="w-[340px]">
                    {aboutLinks.map((link) => (
                      <DropdownItem
                        key={link.title}
                        description={link.description}
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Dropdown>
                  <DropdownTrigger className="bg-transparent">
                    <Button className={navigationMenuTriggerStyle()}>
                      Our Team
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Our Team" className="w-[340px]">
                    {teamLinks.map((link) => (
                      <DropdownItem
                        key={link.title}
                        description={link.description}
                      >
                        <Link href={link.href}>{link.title}</Link>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
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
