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
      name: "front_image",
      title: "Front Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "back_image",
      title: "Back Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "front_image",
    },
  },
};
