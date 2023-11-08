import { FC } from "react";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";

interface AlbumProps {
  albumId: string;
}

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
            url
          }
        }
      }`;

  const result = await client.fetch<Album>(query, { albumId });
  return result;
  // setAlbum(result);
};

const Album: FC<AlbumProps> = async ({ albumId }) => {
  const album = await fetchAlbum(albumId);
  return (
    <div>
      <h1>{album.title}</h1>
      <p>Album date: {album.date}</p>
      <div>
        {album.images.length !== 0 &&
          album.images.map((image) => (
            <figure key={image._key}>
              <Image
                src={image.asset.url}
                width={400}
                height={400}
                alt={image.description}
              />
              <figcaption>{image.description}</figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
};

export default Album;
