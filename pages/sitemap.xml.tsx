import { GetServerSideProps } from "next";
import { client } from "@/sanity/lib/client";

const SITE_URL = "https://theliquidator.net";

const staticPaths = [
  "",
  "about",
  "services",
  "FAQ",
  "team",
  "gallery",
  "contact",
  "privacy",
];

function generateSitemap(paths: string[]) {
  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${SITE_URL}/${path}</loc>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const albumIds: string[] = await client.fetch(`*[_type == "album"]._id`);

  const paths = [
    ...staticPaths,
    ...albumIds.map((id) => `gallery/${id}`),
  ];

  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap(paths));
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
