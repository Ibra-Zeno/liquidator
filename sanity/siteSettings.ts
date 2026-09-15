// siteSettings.ts
// A singleton document — there should only ever be one "siteSettings" entry.
// Holds contact details and registered entities shared across the Footer
// and Contact page, so they only need to be edited in one place.

import { SchemaTypeDefinition } from "sanity";

const siteSettings: SchemaTypeDefinition = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    {
      name: "phone",
      type: "string",
      title: "Phone (display)",
      description: "e.g. \"+6 03 2282 4558\"",
    },
    {
      name: "phoneHref",
      type: "string",
      title: "Phone (tel: link)",
      description: "Digits only, e.g. \"60322824558\"",
    },
    {
      name: "fax",
      type: "string",
      title: "Fax",
    },
    {
      name: "email",
      type: "string",
      title: "Email",
    },
    {
      name: "address",
      type: "text",
      title: "Address",
      rows: 3,
    },
    {
      name: "entities",
      title: "Registered Entities",
      type: "array",
      of: [
        {
          type: "object",
          name: "entity",
          fields: [
            { name: "name", type: "string", title: "Name" },
            { name: "regNo", type: "string", title: "Registration Number" },
          ],
          preview: {
            select: { title: "name", subtitle: "regNo" },
          },
        },
      ],
    },
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
};

export default siteSettings;
