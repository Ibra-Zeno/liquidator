import React, { useState } from "react";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps } from "next";
import { client } from "@/sanity/lib/client";
import { ArrowLeft, Expand } from "lucide-react";
import Lightbox from "@/components/ui/gallery/Lightbox";
import Seo from "@/components/Seo";
import { sanityImageUrl } from "@/lib/sanityImage";

type ImageWithDescription = {
  _key: string;
  description: string;
  asset: {
    url: string;
  };
};

type Album = {
  title: string;
  date: string;
  images: ImageWithDescription[];
};

const fetchAlbum = async (albumId: string) => {
  const query = `*[_type == "album" && _id == $albumId][0]{
      title,
      date,
      images[]{
        ...,
        asset->{
          id,
          url
        }
      }
    }`;

  const result = await client.fetch<Album>(query, { albumId });
  return result;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const albumId = params?.id as string;
  const album = await fetchAlbum(albumId);

  if (!album) {
    return { notFound: true };
  }

  return {
    props: { album, albumId },
    revalidate: 3600,
  };
};

interface AlbumPageProps {
  album: Album;
  albumId: string;
}

const AlbumPage: React.FC<AlbumPageProps> = ({ album, albumId }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const images = album.images
    .filter((image) => image.asset && image.asset.url)
    .map((image) => ({
      src: sanityImageUrl(image.asset.url, 1600),
      thumbSrc: sanityImageUrl(image.asset.url, 500),
      alt: image.description,
    }));

  return (
    <main>
      <Seo
        title={album.title}
        description={`Photos from ${album.title}${album.date ? ` (${album.date})` : ""} — part of The Liquidator's gallery.`}
        path={`/gallery/${albumId}`}
      />
      <header className="hero-wash py-16 sm:py-20">
        <div className="container mx-auto max-w-[1120px] px-4 lg:px-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-primary/70 hover:text-primary"
          >
            <ArrowLeft size={14} /> Gallery
          </Link>
          <h1 className="mt-4 font-serif text-3xl font-medium text-text sm:text-4xl">
            {album.title}
          </h1>
          <p className="mt-2 text-sm italic text-text/50">{album.date}</p>
        </div>
      </header>

      <div className="container mx-auto max-w-[1120px] px-4 py-14 lg:px-8">
        {images.length === 0 && (
          <p className="text-sm text-text/50">
            No photos have been added to this album yet.
          </p>
        )}
        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setOpenIndex(index)}
              className="group relative mb-3 block w-full break-inside-avoid overflow-hidden rounded border border-black/10 bg-secondary/40"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={image.thumbSrc}
                alt={image.alt}
                loading="lazy"
                className="block h-auto w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-text/0 opacity-0 transition-all duration-200 ease-out group-hover:bg-text/30 group-hover:opacity-100">
                <Expand size={22} className="text-white" strokeWidth={1.6} />
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={images}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onPrev={() => setOpenIndex((i) => (i !== null ? i - 1 : i))}
          onNext={() => setOpenIndex((i) => (i !== null ? i + 1 : i))}
        />
      )}
    </main>
  );
};

export default AlbumPage;
