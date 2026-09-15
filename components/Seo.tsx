import Head from "next/head";

const SITE_NAME = "The Liquidator";
const SITE_URL = "https://theliquidator.net";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/about/meeting-room1.jpg`;

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path = "",
  image = DEFAULT_OG_IMAGE,
}) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
