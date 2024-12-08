import React, { useState, useEffect, Suspense } from "react";
import { client } from "../../../sanity/lib/client";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/components/Loading";

// Define the Album type
type Album = {
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

// Fetch albums when component mounts
const fetchAlbums = async () => {
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

  const results = await client.fetch<Album[]>(query, {
    next: { revalidate: 3600 },
  });
  return results;
};

const Albums = async () => {
  const albums = await fetchAlbums();

  if (!albums) {
    return <Loading />;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Gallery Albums
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {albums.map((album) => (
            <div key={album._id} className="group relative">
              <Link href={`/gallery/${album._id}`}>
                <img
                  alt={album.title}
                  src={album.coverImage.asset.url}
                  className="aspect-square w-full rounded border-b-5 border-l-5 border-gray-300/60 bg-gray-200 object-cover shadow-xl transition-all duration-200 ease-in-out group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium italic tracking-wide text-gray-800">
                      <span aria-hidden="true" className="absolute inset-0 " />
                      {album.title}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Albums;

/*  */
