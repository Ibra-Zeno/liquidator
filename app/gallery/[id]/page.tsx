"use client";
import React from "react";
import { useState, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import "lightgallery.js/dist/css/lightgallery.css";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";

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
  const albumId = params.id as string;

  useEffect(() => {
    const fetchAlbums = async () => {
      const result = await fetchAlbum(albumId);
      setAlbum(result);
    };

    fetchAlbums();
  }, [albumId]);

  // Log for debugging purposes

  if (!album) return <div>Loading...</div>;

  return (
    <LightgalleryProvider>
      <div>
        <h1>{album.title}</h1>
        <p>Album date: {album.date}</p>
        <div>
          {album.images.length !== 0 &&
            album.images.map((image) => {
              // Check if the asset and url exists before rendering the LightgalleryItem component
              if (image.asset && image.asset.url) {
                return (
                  <LightgalleryItem
                    key={image._key}
                    group="group-1"
                    src={image.asset.url}
                  >
                    <Image
                      src={image.asset.url}
                      width={400}
                      height={400}
                      alt={image.description}
                      style={{ cursor: "pointer" }} // Make the image act as a clickable item
                    />
                  </LightgalleryItem>
                );
              } else {
                return <div key={image._key}>Image not available</div>;
              }
            })}
        </div>
      </div>
    </LightgalleryProvider>
  );
};

export default AlbumPage;
