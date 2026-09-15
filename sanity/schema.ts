import { type SchemaTypeDefinition } from "sanity";

import profileImage from "./profileImage";
import person from "./person";
import category from "./category";
import album from "./album";
import service from "./service";
import faq from "./faq";
import aboutPage from "./aboutPage";
import siteSettings from "./siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    profileImage,
    person,
    category,
    album,
    service,
    faq,
    aboutPage,
    siteSettings,
  ], // Add your types to this array
};
