const relevantEvents = (upcomingEvents) => {
  const dates = upcomingEvents.map((ev) => ({
    date: new Date(ev.eventDate),
    ...ev,
  }))
  const sortedDates = dates.sort((a, b) => b.date - a.date)
  return sortedDates
}

export default relevantEvents
