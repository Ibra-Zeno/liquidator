import React from "react";
import Link from "next/link";
import { sanityImageUrl } from "@/lib/sanityImage";

export type Album = {
  _id: string;
  title: string;
  date: string;
  coverImage: {
    asset: {
      _ref: string;
      url: string;
    };
  };
};

interface AlbumsProps {
  albums: Album[];
}

const Albums: React.FC<AlbumsProps> = ({ albums }) => {
  return (
    <div>
      <div className="container mx-auto max-w-[1120px] px-4 py-16 sm:py-20 lg:px-8">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-medium text-text">
            Albums
          </h2>
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-text/40">
            {albums.length} {albums.length === 1 ? "album" : "albums"}
          </span>
        </div>

        {albums.length === 0 && (
          <p className="py-8 text-sm text-text/50">
            No albums have been added yet.
          </p>
        )}

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:gap-8">
          {albums.map((album) => (
            <Link
              key={album._id}
              href={`/gallery/${album._id}`}
              className="group relative mb-6 block break-inside-avoid overflow-hidden rounded border border-black/10 bg-secondary/40 xl:mb-8"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={album.title}
                src={sanityImageUrl(album.coverImage.asset.url, 700)}
                loading="lazy"
                className="block h-auto w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-text/40 px-4 py-3 backdrop-blur-sm">
                <h3 className="font-serif text-base font-medium text-white sm:text-lg">
                  {album.title}
                </h3>
                <p className="mt-0.5 text-xs text-white/75">{album.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;
