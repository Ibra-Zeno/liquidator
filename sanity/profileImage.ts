// profileImage.ts

import { SchemaTypeDefinition } from "sanity";

const profileImage: SchemaTypeDefinition = {
  name: "profileImage",
  title: "Profile Image",
  type: "image",
  fields: [
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
      description: "Important for SEO and accessibility.",
      options: {
        isHighlighted: true,
      },
    },
  ],
  options: {
    hotspot: true, // Enables hotspot for better image cropping
  },
};

export default profileImage;
