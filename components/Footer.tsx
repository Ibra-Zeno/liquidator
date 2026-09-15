"use client";

import { FC, useEffect, useState } from "react";
import {
  Landmark,
  Phone,
  Linkedin,
  Printer,
  AtSign,
  Mail,
  Facebook,
} from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { SiteSettings } from "@/lib/sanityQueries";
import imageData from "@/public/images/imageData";

interface FooterProps {}

// Short display labels for the regulatory bodies/associations listed in
// imageData, keyed by their full name there.
const shortLabels: Record<string, string> = {
  "The Malaysian Bar": "Bar Council",
  "Department of Director General of Land and Mines (Federal)": "JKPTG",
  "Department of Surveys and Mapping Malaysia": "JUPEM",
  "Ministry of Housing and Local Government": "KPKT",
  "Malaysia Department of Insolvency (MDI)": "MDI",
  "Malaysia Institute of Accountants": "MIA",
  "Myeg Services Berhad": "MyEG",
  "Real Estate and Housing Developers Association Malaysia": "REHDA",
  "Companies Commission of Malaysia": "SSM",
  "The Board of Valuers, Appraisers and Estate Agents Malaysia": "Valuers",
};

const defaultSettings: Required<SiteSettings> = {
  phone: "+6 03 2282 4558",
  phoneHref: "60322824558",
  fax: "+6 03 2282 1558",
  email: "info@theliquidator.net",
  address:
    "Suite 8-11-4, Menara Mutiara Bangsar, Jalan Liku, Off Jalan Riong, 59100 Kuala Lumpur, Malaysia",
  entities: [
    { name: "MJ Insolvency", regNo: "(LLP0037224-LAL) (NF 2776)" },
    { name: "Radiant Consulting Asia Sdn Bhd", regNo: "(773117-T)" },
    { name: "TS Insolvency", regNo: "(NF 2776)" },
    { name: "Chilterns Insolvency Sdn Bhd", regNo: "(822208-U)" },
    { name: "Radiant Corporate Solutions Sdn Bhd", regNo: "(1005821-D)" },
  ],
};

const SocialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/theliquidator.net/",
    logo: <Facebook size={17} strokeWidth={1.5} />,
  },
  {
    name: "Linkedin",
    href: "https://www.theliquidator.net/",
    logo: <Linkedin size={17} strokeWidth={1.5} />,
  },
  {
    name: "Email",
    href: "mailto:info@theliquidator.net",
    logo: <Mail size={17} strokeWidth={1.5} />,
  },
];

const practiceLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "FAQs", href: "/FAQ" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

const teamLinks = [
  { name: "Liquidators", href: "/team#liquidators" },
  { name: "Liquidation", href: "/team#liquidation" },
  { name: "Senior Management", href: "/team#senior-management" },
  { name: "Conveyancing & Subsale", href: "/team#conveyancing-subsale" },
  { name: "Accounts", href: "/team#accounts" },
  { name: "Admin", href: "/team#admin" },
  { name: "Consultants", href: "/team#consultants" },
];

const Footer: FC<FooterProps> = ({}) => {
  const [settings, setSettings] =
    useState<Required<SiteSettings>>(defaultSettings);

  useEffect(() => {
    client
      .fetch<SiteSettings | null>(`*[_type == "siteSettings"][0]`)
      .then((data) => {
        if (!data) return;
        setSettings({
          phone: data.phone || defaultSettings.phone,
          phoneHref: data.phoneHref || defaultSettings.phoneHref,
          fax: data.fax || defaultSettings.fax,
          email: data.email || defaultSettings.email,
          address: data.address || defaultSettings.address,
          entities: data.entities?.length
            ? data.entities
            : defaultSettings.entities,
        });
      })
      .catch(() => {
        // Keep the hardcoded defaults if Sanity is unreachable.
      });
  }, []);

  return (
    <footer className="pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Songket motif divider */}
        <div aria-hidden="true" className="motif" />

        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="flex items-center gap-2 font-serif text-lg font-medium text-text">
              <span className="text-accent">✦</span>The Liquidator
            </p>
            <p className="mt-4 max-w-[16rem] text-sm text-text/70">
              {settings.address}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-text/70">
              <div className="flex items-center gap-2">
                <Phone size={15} />
                <Link href={`tel:${settings.phoneHref}`}>
                  {settings.phone}
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <Printer size={15} />
                <p>{settings.fax}</p>
              </div>
              <div className="flex items-center gap-2">
                <AtSign size={15} />
                <Link href={`mailto:${settings.email}`}>
                  {settings.email}
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text/50">
              Practice
            </h4>
            <ul className="space-y-2.5 text-sm">
              {practiceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text/80 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-text/50">
              Our Team
            </h4>
            <ul className="space-y-2.5 text-sm">
              {teamLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text/80 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1 text-xs font-semibold uppercase tracking-wider text-text/50">
              Registered Entities
            </h4>
            <p className="mb-4 text-[11px] italic text-text/40">
              Entiti Berdaftar
            </p>
            <ul className="space-y-2.5 text-xs text-text/70">
              {settings.entities.map((entity) => (
                <li key={entity.name} className="flex items-start gap-2">
                  <Landmark size={14} className="mt-0.5 shrink-0 text-accent" />
                  <span>
                    {entity.name}
                    <span className="block text-text/45">{entity.regNo}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 py-6">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text/50">
            Useful Links
          </h4>
          <div className="flex flex-wrap gap-2">
            {imageData.map((body) => (
              <Link
                key={body.name}
                href={body.link}
                target="_blank"
                rel="noreferrer"
                title={body.name}
                className="rounded border border-black/10 px-2.5 py-1 text-xs text-text/60 transition-colors hover:border-primary/30 hover:text-primary"
              >
                {shortLabels[body.name] || body.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-black/10 py-6 text-xs text-text/60 sm:flex-row">
          <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
            <span>
              © 2026 theliquidator.net. All rights reserved. ·{" "}
              <Link href="/privacy" className="underline hover:text-primary">
                Privacy Policy
              </Link>
            </span>
            <span className="italic text-text/40">
              Diperbadankan di Malaysia · Incorporated in Malaysia
            </span>
          </div>
          <div className="flex flex-row gap-x-3">
            {SocialMediaLinks.map((media) => (
              <Link
                key={media.name}
                href={media.href}
                className="rounded-full p-1.5 text-text/60 transition-colors hover:bg-secondary hover:text-primary"
              >
                {media.logo}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
