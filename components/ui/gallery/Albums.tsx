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
      <ul>
        {albums.map((album) => (
          <li key={album._id} className="w-fit">
            <Link href={`/gallery/${album._id}`}>
              <Image
                src={album.coverImage.asset.url}
                alt={`Cover for ${album.title}`}
                width={300} // Set your desired styles
                height={300} // Set your desired styles
              />
              {album.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Albums;
