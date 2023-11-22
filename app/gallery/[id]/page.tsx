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
    <main className="mx-auto max-w-7xl px-4 lg:px-8">
      <h2 className="pt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {album.title}
      </h2>
      <p className="mb-6 mt-3 text-sm italic text-gray-700">{album.date}</p>
      <div className="mx-auto flex flex-wrap justify-center gap-x-6 rounded-sm lg:justify-start">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            height={150}
            width={275}
            className="my-3 border-spacing-10 cursor-pointer rounded border-2 border-gray-800/60 object-cover p-1.5 shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            onClick={() => openLightboxOnIndex(index)}
          />
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          className="absolute z-10 h-full w-full bg-slate-900/75"
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          /* Add custom UI components and styling here */
          // renderHeader={() => <div className="lightbox-header">header</div>}
          // renderFooter={() => <div className="lightbox-footer">footer</div>}
          renderPrevButton={() => (
            <button onClick={gotoPrevious} className="z-20 p-12">
              <ArrowLeftCircle size={45} className="text-slate-800" />
            </button>
          )}
          renderNextButton={() => (
            <button onClick={gotoNext} className="z-20 p-12">
              <ArrowRightCircle size={45} className="text-slate-800" />
            </button>
          )}
          isOpen={lightboxOpen} // This should reflect the state of lightboxOpen
        />
      )}
    </main>
  );
};

export default AlbumPage;
