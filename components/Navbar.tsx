"use client";

import * as React from "react";
import Link from "next/link";
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
    description: "Experts in managing and closing insolvency cases",
  },
  {
    title: "Senior Management",
    href: "/team/senior-management",
    description: "Leaders overseeing operations and strategy.",
  },
  {
    title: "Liquidation",
    href: "/team/liquidation",
    description: "Specialists handling business wind-ups.",
  },
  {
    title: "Conveyancing & Subsale",
    href: "/team/conveyancing-subsale",
    description: "Professionals managing property transfers.",
  },
  {
    title: "Accounts",
    href: "/team/accounts",
    description: "Team ensuring financial accuracy and compliance",
  },
  {
    title: "Admin",
    href: "/team/admin",
    description: "Support team managing daily operations.",
  },
  {
    title: "Consultants",
    href: "/team/consultants",
    description: "Advisors providing expert advice.",
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
    name: "Contact Us",
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
      className="bg-background"
    >
      {/* Left Section: Logo and Menu Toggle */}
      <NavbarContent>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
      </NavbarContent>

      {/* Center Section: Links and Dropdowns (Visible on Desktop) */}
      <NavbarContent className="hidden gap-4 md:flex" justify="end">
        {/* About Us Dropdown */}
        <Dropdown className="bg-background">
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
        <Dropdown className="bg-background">
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
              className="text-text rounded border border-gray-400/40 bg-transparent px-4 py-0.5 text-sm hover:text-background data-[hover=true]:bg-primary/90"
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
              className={`mt-4 w-fit rounded  ${
                index == menuItems.length - 1 ? "text-primary" : ""
              }`}
            >
              <Link href={item.href} className="block w-full">
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
