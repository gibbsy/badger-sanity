import icon from "react-icons/lib/md/web";

export default {
  name: "product",
  title: "All Products",
  description:
    "Add all products here then add them to the list of Current Products to see them on the site",
  type: "document",
  icon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Enter the product title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
        crop: true,
      },
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Price and weight",
      name: "price",
      type: "string",
      description: "Please use the format: £2.5 / 500g",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
};
