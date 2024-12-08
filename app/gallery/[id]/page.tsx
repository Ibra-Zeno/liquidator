"use client";
import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../../components/Loading";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Lightbox from "react-spring-lightbox";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

// Define the Album and ImageWithDescription types
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
  // setAlbum(result);
};

// Rest of the imports and code

const AlbumPage = () => {
  const [album, setAlbum] = useState<Album | null>(null);
  const params = useParams();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const albumId = params.id as string;

  useEffect(() => {
    const fetchAlbums = async () => {
      // Add a delay of 1000 milliseconds (1 second)
      const result = await fetchAlbum(albumId);
      setAlbum(result);
    };

    fetchAlbums();
  }, [albumId]);

  // Log for debugging purposes

  if (!album) {
    return <Loading />;
  }

  const images = album.images
    .filter((image) => image.asset && image.asset.url)
    .map((image) => ({
      src: image.asset.url,
      alt: image.description,
      style: { borderRadius: "4px", shadow: "0 0 10px #000" },
    }));

  const openLightboxOnIndex = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentImageIndex(currentImageIndex + 1);

  return (
    <main className="mx-auto max-w-8xl px-4 pb-24 pt-12 lg:px-8">
      <h2 className="pt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {album.title}
      </h2>
      <p className="mb-6 mt-3 text-sm italic text-gray-700">{album.date}</p>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <a
            key={index}
            className="group relative block cursor-pointer overflow-hidden rounded-lg"
            onClick={() => openLightboxOnIndex(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              height={150}
              width={275}
              className="h-auto w-full rounded border-2 border-gray-700/25 bg-gray-100 object-cover shadow-lg"
            />
            <div className="absolute bottom-1 end-1 opacity-0 transition group-hover:opacity-100">
              <div className="flex items-center gap-x-1 rounded border border-gray-200 bg-white px-2 py-1 text-gray-800">
                <svg
                  className="h-4 w-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.3-4.3" />
                </svg>
                <span className="text-xs">View</span>
              </div>
            </div>
          </a>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          renderHeader={() => <div className="lightbox-header">header</div>}
          className="absolute z-10 h-full w-full bg-gradient-to-br from-stone-950/95 to-slate-900/95"
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          renderPrevButton={() => (
            <button onClick={gotoPrevious} className="z-20 p-12">
              <ArrowLeftCircle size={45} className="text-slate-100" />
            </button>
          )}
          renderNextButton={() => (
            <button onClick={gotoNext} className="z-20 p-12">
              <ArrowRightCircle size={45} className="text-slate-100" />
            </button>
          )}
          isOpen={lightboxOpen} // This should reflect the state of lightboxOpen
        />
      )}
    </main>
  );
};

export default AlbumPage;
