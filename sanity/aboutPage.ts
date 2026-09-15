// aboutPage.ts
// A singleton document — there should only ever be one "aboutPage" entry.

import { SchemaTypeDefinition } from "sanity";

const aboutPage: SchemaTypeDefinition = {
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    {
      name: "eyebrow",
      type: "string",
      title: "Eyebrow label",
      initialValue: "Business Support, Redefined",
    },
    {
      name: "intro",
      type: "text",
      title: "Intro (short)",
      rows: 3,
      description: "The larger lead sentence under \"Who We Are\".",
    },
    {
      name: "body",
      type: "text",
      title: "Body paragraph",
      rows: 5,
    },
    {
      name: "values",
      title: "What Sets Us Apart",
      type: "array",
      of: [
        {
          type: "object",
          name: "valueItem",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    },
    {
      name: "strategies",
      title: "Strategies and Solutions",
      type: "array",
      of: [
        {
          type: "object",
          name: "strategyItem",
          fields: [
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
          ],
          preview: {
            select: { title: "title", subtitle: "description" },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: "About Page" }),
  },
};

export default aboutPage;
