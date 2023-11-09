import { type SchemaTypeDefinition } from "sanity";

import profileImage from "./profileImage";
import person from "./person";
import category from "./category";
import album from "./album";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [profileImage, person, category, album], // Add your types to this array
};
