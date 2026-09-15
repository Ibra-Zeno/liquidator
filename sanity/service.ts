// service.ts

import { SchemaTypeDefinition } from "sanity";

const service: SchemaTypeDefinition = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      description: "Controls display order — lower numbers show first.",
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
};

export default service;
