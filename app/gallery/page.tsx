"use client";
// Use client for now but fetch on server and pass as prop to page
import React from "react";
import { useState } from "react";
import { client } from "../../sanity/lib/client";

// Define the Album type
type Album = {
  _id: string;
  title: string;
  date: string;
};

const GalleryPage = () => {
  const [albums, setAlbums] = useState<Album[]>([]);

  // Fetch albums when component mounts
  React.useEffect(() => {
    const fetchAlbums = async () => {
      const query = `*[_type == "album"]`;
      const results = await client.fetch<Album[]>(query);
      setAlbums(results);
    };

    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Gallery</h1>
      <ul>
        {albums.map((album) => (
          <li key={album._id}>
            {/* Assuming you have a route set up for each album */}
            <a href={`/gallery/${album._id}`}>{album.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GalleryPage;
