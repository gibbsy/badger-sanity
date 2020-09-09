import icon from "react-icons/lib/md/web";

export default {
  name: "productList",
  title: "Current Products",
  type: "document",
  icon,
  fields: [
    {
      name: "currentProducts",
      title: "Bang in season",
      description:
        "Add, delete or reorder products to the site. To add a new one, first create it in the products section on the left hand side.",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "product" }],
        },
      ],
    },
  ],
  preview: {
    select: { title: "title" },
    prepare(selection) {
      return {
        title: "Edit the product list »",
      };
    },
  },
};

/* export default {
  name: "projectList",
  title: "Featured projects",
  description: "Projects featured on homepage",
  type: "document",
  icon,
  fields: [
    {
      name: "projects",
      title: "Add, delete or reorder",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "project" }],
          description: "Only published projects will be listed",
          options: {
            filter: "published == true",
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: "title" },
    prepare(selection) {
      return {
        title: "Edit the project list",
      };
    },
  },
};
 */
