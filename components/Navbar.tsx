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
} from "@nextui-org/react";
import Logo from "./ui/Logo";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQs", href: "/FAQ" },
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
      className="border-b border-black/10 bg-background"
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

      {/* Center Section: Links (Visible on Desktop) */}
      <NavbarContent className="hidden gap-4 md:flex" justify="end">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <Link href={link.href}>
              <Button
                className="bg-transparent p-0 text-sm text-text/70 data-[hover=true]:bg-transparent data-[hover=true]:text-primary"
                radius="sm"
                variant="light"
              >
                {link.name}
              </Button>
            </Link>
          </NavbarItem>
        ))}

        {/* Contact Us Link */}
        <NavbarItem>
          <Link href="/contact">
            <Button
              className="rounded bg-primary px-4 py-0.5 text-sm font-semibold text-white data-[hover=true]:bg-primary/90"
              variant="light"
            >
              Contact Us
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu: Visible on Small Screens */}
      <NavbarMenu>
        {[...navLinks, { name: "Contact Us", href: "/contact" }].map(
          (item, index, all) => (
            <NavbarMenuItem key={index}>
              <div
                onClick={() => {
                  handleMenuItemClick(); // Close the menu
                }}
                className={`mt-4 w-fit rounded  ${
                  index == all.length - 1 ? "text-primary" : ""
                }`}
              >
                <Link href={item.href} className="block w-full">
                  {item.name}
                </Link>
              </div>
            </NavbarMenuItem>
          ),
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
