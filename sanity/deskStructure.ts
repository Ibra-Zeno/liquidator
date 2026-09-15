import type { StructureResolver } from "sanity/desk";

// Custom desk structure: "aboutPage" and "siteSettings" are singletons (there
// should only ever be one of each), so they get their own single-document
// editor instead of a list an editor could accidentally add duplicates to.
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("About Page")
        .id("aboutPage")
        .child(
          S.document().schemaType("aboutPage").documentId("aboutPage"),
        ),
      S.listItem()
        .title("Site Settings")
        .id("siteSettings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings"),
        ),
      S.divider(),
      S.documentTypeListItem("service").title("Services"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.divider(),
      S.documentTypeListItem("person").title("Team Members"),
      S.documentTypeListItem("category").title("Team Categories"),
      S.divider(),
      S.documentTypeListItem("album").title("Gallery Albums"),
      S.documentTypeListItem("profileImage").title("Profile Images"),
    ]);
