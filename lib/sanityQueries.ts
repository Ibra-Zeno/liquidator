import { client } from "@/sanity/lib/client";

export interface Service {
  _id: string;
  title: string;
  description: string;
  order: number;
}

export async function fetchServices(): Promise<Service[]> {
  return client.fetch<Service[]>(`*[_type == "service"] | order(order asc)`);
}

export interface AboutPageContent {
  eyebrow?: string;
  intro?: string;
  body?: string;
  values?: { title: string; description: string }[];
  strategies?: { title: string; description: string }[];
}

export async function fetchAboutPage(): Promise<AboutPageContent | null> {
  return client.fetch<AboutPageContent | null>(
    `*[_type == "aboutPage"][0]`,
  );
}

export interface SiteSettings {
  phone?: string;
  phoneHref?: string;
  fax?: string;
  email?: string;
  address?: string;
  entities?: { name: string; regNo: string }[];
}

export async function fetchSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(`*[_type == "siteSettings"][0]`);
}
