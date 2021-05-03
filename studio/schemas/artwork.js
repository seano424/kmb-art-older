// The schema of the Milestone object-type
export default {
  name: "artwork",
  title: "Artwork",
  type: "object",
  fields: [
    {
      name: "artworkImage",
      title: "Artwork Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "caption",
      type: "string",
      title: "Caption",
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
  ],
};
