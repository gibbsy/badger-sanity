import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Badger's Content")
    .items([
      S.listItem()
        .title("Site Config")
        .child(
          S.editor()
            .schemaType("config")
            .documentId("config")
            .title("Edit the text content of the site")
        ),

      S.documentTypeListItem("heroSlide"),
      S.listItem()
        .title("Hero Slideshow")
        .child(S.editor().schemaType("slideshow").documentId("slideshow")),

      S.documentTypeListItem("product"),
      S.listItem()
        .title("Current Products")
        .child(S.editor().schemaType("productList").documentId("productList")),
      S.documentTypeListItem("instaImage"),
    ]);

/* 
    Keeping for ref
    */
/* S.listItem()
        .title("Hero Slides")
        .child(
          S.documentList()
            .schemaType("heroSlide")
            .title("slides")
            .filter(`_type == "heroSlide"`)
        ), */
// how to display a filtered set of schema types
/* ...S.documentTypeListItems().filter(
        (listItem) => !["productList", "slideshow"].includes(listItem.getId())
      ), */
/* ...S.documentTypeListItems().filter((listItem) =>
        ["config", "heroSlide"].includes(listItem.getId())
      ), */
