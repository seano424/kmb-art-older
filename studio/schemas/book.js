export default {
  name: "book",
  title: "Book",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Book Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
};
