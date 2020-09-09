import icon from "react-icons/lib/md/web";

export default {
  name: "slideshow",
  title: "Hero Slideshow",
  type: "document",
  icon,
  fields: [
    {
      title: "Add, remove and reorder the slides",
      description: "Don't add too many as it will take longer to load.",
      name: "slides",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "heroSlide" }],
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
    prepare(selection) {
      return {
        title: "Edit the slideshow",
      };
    },
  },
};
