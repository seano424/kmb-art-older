export default {
  name: 'featureImage',
  title: 'Feature Image',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'This field is optional for Google SEO',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
