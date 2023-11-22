import React, { useState, useEffect, Suspense } from "react";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Skeleton } from "@/components/shadcn/ui/skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

  const results = await client.fetch<Album[]>(query);
  return results;
};

const Albums = async () => {
  const albums = await fetchAlbums();

  return (
    <div>
      <ul className="mt-12 flex flex-wrap gap-x-4 gap-y-4 md:grid md:grid-cols-2 xl:grid-cols-3">
        {albums.map((album) => (
          <li
            key={album._id}
            className="w-full transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Link href={`/gallery/${album._id}`}>
              {/* <Image
                src={album.coverImage.asset.url}
                alt={`Cover for ${album.title}`}
                width={300} // Set your desired styles
                height={300} // Set your desired styles
                className="rounded-md object-cover"
              />
              <p className="py-3 text-base font-semibold leading-7 tracking-tight text-gray-200">
                {album.title}
              </p> */}
              <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center">
                <div
                  className="h-64 w-full rounded bg-gray-300 bg-cover bg-center shadow-md"
                  style={{
                    backgroundImage: `url(${album.coverImage.asset.url})`,
                  }}
                ></div>

                <div className="-mt-10 w-56 overflow-hidden rounded bg-white shadow-lg dark:bg-gray-800 md:w-64">
                  <h3 className="py-2 text-center font-bold uppercase tracking-wide text-gray-800 dark:text-white">
                    {album.title}
                  </h3>

                  <div className="flex items-center justify-between bg-gray-200 px-3 py-2 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">
                      $129
                    </span>
                    <button className="transform rounded bg-gray-800 px-2 py-1 text-xs font-semibold uppercase text-white transition-colors duration-300 hover:bg-gray-700 focus:bg-gray-700 focus:outline-none dark:hover:bg-gray-600 dark:focus:bg-gray-600">
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;

/*  */
