import icon from "react-icons/lib/md/web";

export default {
  name: "instaImage",
  title: "Insta images",
  description: "Add images here then add them to the collection in Config.",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Just to make organising images easier (won't appear on the site).",
    },
    {
      name: "alt",
      title: "Alt text",
      type: "string",
      description: "Alt text for the image.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      description:
        "Click edit to play around with the crop - hotspot will influence how the image appears.",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
        crop: true,
      },
    },
  ],
  initialValue: {
    title: "Untitled slide",
  },
  preview: {
    select: { title: "title", media: "image" },
  },
};
