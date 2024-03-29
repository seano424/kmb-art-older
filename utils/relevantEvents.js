function isBeforeToday(date) {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date < today
}

const relevantEvents = (upcomingEvents) => {
  const dates = upcomingEvents.map((ev) => ({
    date: new Date(ev.eventDate),
    ...ev,
  }))
  const filteredDates = dates.filter((d) => !isBeforeToday(d.date))
  const sortedDates = filteredDates.sort((a, b) => a.date - b.date)
  return sortedDates
}

export default relevantEvents
