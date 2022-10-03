export default {
  name: 'upcomingEvents',
  title: 'Upcoming Events Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      description:
        'Example: InterUrban ArtHouse Friday, October 1st (9-6pm) & Sat, October 2nd, (9-3pm) ',
      title: 'Title and Date of the event for the viewer',
      type: 'string',
    },
    {
      name: 'main_image',
      title: 'Main Image',
      description: 'Optional: If you would like to, you can add an image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Website link for the event',
      description: 'Optional: You can add a link to the event here',
      name: 'linkUrl',
      type: 'url',
    },
    {
      title: 'First date of event',
      description: 'This is to sort the events for the website',
      name: 'eventDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'main_image',
    },
  },
}
