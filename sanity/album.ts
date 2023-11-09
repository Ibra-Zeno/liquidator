// album.ts

import { SchemaTypeDefinition } from "sanity";

const album: SchemaTypeDefinition = {
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "date",
      type: "datetime",
      title: "Date of Album",
      description: "When was this album created or the event occurred?",
    },
    {
      name: "coverImage",
      type: "image",
      title: "Cover Image",
      description: "The main image representing the album.",
      options: {
        hotspot: true, // Enables the hotspot feature for image crops
      },
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "profileImage" }], // Referencing the profileImage schema
    },
    // ... add other fields like author, description, etc.
  ],
};

export default album;
