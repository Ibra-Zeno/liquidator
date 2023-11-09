// person.ts

import { SchemaTypeDefinition } from "sanity";

const person: SchemaTypeDefinition = {
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    {
      name: "nickname",
      type: "string",
      title: "Nickname",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true, // Enables the hotspot feature for image crops
      },
    },
    {
      name: "position",
      type: "string",
      title: "Position",
    },
    {
      name: "biography",
      type: "text",
      title: "Biography",
    },
    {
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      title: "Category",
    },
    {
      name: "qualifications",
      type: "array",
      title: "Qualifications",
      of: [{ type: "string" }],
      description: "List of qualifications for the person",
    },
    // You can add more fields like email, phone, etc.
  ],
};

export default person;
