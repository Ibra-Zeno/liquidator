import { GetStaticProps } from "next";
import { client } from "@/sanity/lib/client";
import Seo from "@/components/Seo";
import Albums, { Album } from "@/components/ui/gallery/Albums";
import CTA from "@/components/ui/CTA";

interface GalleryPageProps {
  albums: Album[];
}

export const getStaticProps: GetStaticProps<GalleryPageProps> = async () => {
  const query = `
    *[_type == "album"] {
      _id,
      title,
      date,
      "coverImage": coverImage {
        asset-> {
          _id,
          url
        }
      }
    }
  `;
  const albums = await client.fetch<Album[]>(query);
  return {
    props: { albums },
    revalidate: 3600,
  };
};

const GalleryPage: React.FC<GalleryPageProps> = ({ albums }) => {
  return (
    <main>
      <Seo
        title="Gallery"
        description="A look at The Liquidator's team, events and milestones over the years."
        path="/gallery"
      />
      <header className="hero-wash py-20 sm:py-24">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <span className="mb-2.5 block text-xs font-semibold uppercase tracking-[0.1em] text-primary/70">
            Our Adventures
          </span>
          <h1 className="font-serif text-3xl font-medium text-text sm:text-4xl">
            Gallery
          </h1>
          <p className="mt-5 max-w-[56ch] text-base text-text/70">
            A look at our team, events and milestones over the years.
          </p>
        </div>
      </header>
      <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
        <div className="motif" />
      </div>
      <Albums albums={albums} />
      <CTA />
    </main>
  );
};

export default GalleryPage;
