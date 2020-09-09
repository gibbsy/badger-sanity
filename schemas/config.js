import icon from "react-icons/lib/md/web";

const fieldsetOptions = {
  collapsible: true,
  collapsed: false,
};

export default {
  name: "config",
  title: "Site Config",
  description: "Edit the main copy elements here",
  type: "document",
  icon,
  fieldsets: [
    {
      name: "hero",
      title: "Page intro",
      options: fieldsetOptions,
    },
    {
      name: "grow",
      title: "How we grow section",
      options: fieldsetOptions,
    },
    {
      name: "cta",
      title: "Bottom CTA",
      options: fieldsetOptions,
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "The main site header.",
      fieldset: "hero",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Page intro",
      name: "intro",
      type: "text",
      description: "Text under the main header.",
      fieldset: "hero",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "growTxt",
      title: "How we grow",
      type: "text",
      description: "How we grow text content",
      fieldset: "grow",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Add, remove and reorder the insta style images",
      description: "Don't add more than 3 images.",
      name: "insta",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "instaImage" }],
        },
      ],
      validation: (Rule) => Rule.required().length(3),
    },
    {
      name: "ctaTxt",
      title: "Order now",
      type: "text",
      description: "How we grow text content",
      fieldset: "cta",
      validation: (Rule) => Rule.required(),
    },
  ],
};
