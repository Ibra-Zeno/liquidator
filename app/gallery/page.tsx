"use client";
// Use client for now but fetch on server and pass as prop to page
import React from "react";
import { useState } from "react";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

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

const GalleryPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  // Fetch albums when component mounts
  React.useEffect(() => {
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
      setAlbums(results);
      // console.log(albums[0].coverImage.asset.url);
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {albums.map((album) => (
          <li key={album._id} className="w-fit">
            <a href={`/gallery/${album._id}`}>
              {album.coverImage && (
                <Image
                  src={album.coverImage.asset.url}
                  alt={`Cover for ${album.title}`}
                  width={400} // Set your desired styles
                  height={400} // Set your desired styles
                  layout="responsive" // or fixed, intrinsic, etc., depending on your design needs
                />
              )}
              {album.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryPage;
