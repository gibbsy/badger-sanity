import icon from "react-icons/lib/md/web";

export default {
  name: "heroSlide",
  title: "All Slides",
  description: "Add slides here then add them to the slideshow.",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description:
        "Just to make organising slides easier (won't appear on the site).",
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
