// category.ts

import { SchemaTypeDefinition } from "sanity";

const category: SchemaTypeDefinition = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // automatically generate the slug from the title field
        maxLength: 200, // Slugs can be at most 200 characters
        // Sanity's default slugify function will be used if you don't provide your own
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Describe what this category is about.",
    },
  ],
};

export default category;
