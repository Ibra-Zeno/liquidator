import { type SchemaTypeDefinition } from "sanity";

const imageWithDescription: SchemaTypeDefinition = {
  name: "imageWithDescription",
  title: "Image with Description",
  type: "image",
  fields: [
    {
      name: "description",
      type: "text",
      title: "Description",
      options: {
        isHighlighted: true, // `isHighlighted` makes this field stand out in the Sanity Studio
      },
    },
    // ... you can add more fields here if needed
  ],
  options: {
    hotspot: true, // Enables the hotspot feature for image crops
  },
};

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
      type: "date",
      title: "Date of Album",
      description: "When was this album created or the event occurred?",
    },
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "imageWithDescription" }],
    },
    // ... add other fields like author, description, etc.
  ],
};

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [album, imageWithDescription], // Add your types to this array
};
