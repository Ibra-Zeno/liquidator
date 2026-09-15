/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/yd0p4ozm/production/**/*",
      },
    ],
  },
  webpack: (config) => {
    // @portabletext/react ships a bare ".cjs" require entry, which isn't in
    // webpack's default resolve.extensions list.
    config.resolve.extensions.push(".cjs");
    return config;
  },
  async redirects() {
    return [
      // The 7 per-category team pages were consolidated into one /team page
      // with in-page anchors, so old links jump straight to their section.
      {
        source: "/team/:slug",
        destination: "/team#:slug",
        permanent: true,
      },
      // Useful Links was folded into the Footer.
      {
        source: "/useful",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
