// faq.ts

import { SchemaTypeDefinition } from "sanity";

const richText = [
  {
    type: "block",
    styles: [{ title: "Normal", value: "normal" }],
    lists: [{ title: "Bullet", value: "bullet" }],
    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
      ],
    },
  },
];

const faq: SchemaTypeDefinition = {
  name: "faq",
  title: "FAQ",
  type: "document",
  fields: [
    {
      name: "category",
      type: "string",
      title: "Category (English)",
      description:
        "Groups questions under a shared heading, e.g. \"Insolvency Procedures and Liquidation Processes\". Used to group items together, so keep it identical across every question in the same category.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "categoryMs",
      type: "string",
      title: "Category (Bahasa Malaysia)",
    },
    {
      name: "order",
      type: "number",
      title: "Order",
      description: "Controls display order within its category.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "question",
      type: "string",
      title: "Question (English)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "answer",
      type: "array",
      title: "Answer (English)",
      of: richText as any,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "questionMs",
      type: "string",
      title: "Question (Bahasa Malaysia)",
    },
    {
      name: "answerMs",
      type: "array",
      title: "Answer (Bahasa Malaysia)",
      of: richText as any,
    },
  ],
  orderings: [
    {
      title: "Category, then order",
      name: "categoryOrder",
      by: [
        { field: "category", direction: "asc" },
        { field: "order", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
  },
};

export default faq;
