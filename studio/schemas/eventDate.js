// The schema of the Milestone object-type
export default {
  name: 'eventDate',
  title: 'Event Date',
  type: 'datetime',
  options: {
    dateFormat: 'YYYY-MM-DD',
    timeFormat: 'HH:mm',
    timeStep: 15,
    calendarTodayLabel: 'Today',
  },
}
