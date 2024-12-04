"use client";

import * as React from "react";
import Link from "next/link";
import { FC, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "./ui/Logo";
import { cn } from "@/lib/utils";

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

const menuItems = [
  {
    name: "About Us",
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
    name: "Meet the Team",
    href: "/team/liquidators",
  },
  {
    name: "Useful Links",
    href: "/useful",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={(open) => setIsMenuOpen(open)} // Tie to menu open state
      className=""
    >
      {/* Left Section: Logo and Menu Toggle */}
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      </NavbarContent>

      {/* Center Section: Links and Dropdowns (Visible on Desktop) */}
      <NavbarContent className="hidden gap-4 sm:flex" justify="end">
        {/* About Us Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                About Us
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="About Us" className="w-[340px]">
            {aboutLinks.map((link, index) => (
              <DropdownItem
                key={index}
                href={link.href}
                description={link.description}
              >
                {link.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {/* Our Team Dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                className="bg-transparent p-0 data-[hover=true]:bg-transparent"
                radius="sm"
                variant="light"
              >
                Our Team
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Our Team" className="w-[340px]">
            {teamLinks.map((link, index) => (
              <DropdownItem
                key={index}
                href={link.href}
                description={link.description}
              >
                {link.title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>

        {/* Gallery Link */}
        <NavbarItem>
          <Link href="/useful">
            <Button
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              radius="sm"
              variant="light"
            >
              Useful Links
            </Button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/gallery">
            <Button
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              radius="sm"
              variant="light"
            >
              Gallery
            </Button>
          </Link>
        </NavbarItem>

        {/* Contact Us Link */}
        <NavbarItem>
          <Link href="/contact">
            <Button
              className="bg-transparent p-0 data-[hover=true]:bg-transparent"
              radius="sm"
              variant="light"
            >
              Contact Us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu: Visible on Small Screens */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <div
              onClick={() => {
                handleMenuItemClick(); // Close the menu
              }}
              className="w-full"
            >
              <Link
                href={item.href}
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="block w-full"
              >
                {item.name}
              </Link>
            </div>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
