"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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

  return (
    <header className="border-b border-black/10 bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-3 py-2 text-sm text-text/70 transition-colors hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded bg-primary px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="p-1 text-text md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-black/10 px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {[...navLinks, { name: "Contact Us", href: "/contact" }].map(
              (item, index, all) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded px-2 py-2.5 text-sm font-medium ${
                      index === all.length - 1 ? "text-primary" : "text-text/80"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Nav;
