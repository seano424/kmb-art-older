const relevantEvents = (upcomingEvents) => {
  const dates = upcomingEvents.map((ev) => ({
    date: new Date(ev.eventDate),
    ...ev,
  }))
  const sortedDates = dates.sort((a, b) => a.date - b.date)
  return sortedDates.map((d) => d.date > new Date() && d)
}

export default relevantEvents
