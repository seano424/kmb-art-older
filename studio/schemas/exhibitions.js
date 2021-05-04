export default {
  title: "Exhibitions",
  name: "exhibitions",
  type: "document",
  fields: [
    // ... lots of fields, probably ...
    {
      title: "Exhibition Title",
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category of Art Work",
      description:
        "Please choose one of the three: ink work, paintings, or charcoals",
      type: "string",
      options: {
        list: [
          { title: "Ink Works", value: "ink-works" },
          { title: "Paintings", value: "paintings" },
          { title: "Charcoals", value: "charcoals" },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Feature Image",
      name: "featureImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Art Work",
      name: "artWork",
      type: "array",
      of: [{ type: "artwork" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "featureImage",
    },
  },
};
