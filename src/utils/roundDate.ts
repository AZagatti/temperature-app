export const roundDate = (date: Date) => {
  date.setHours(date.getHours() + Math.round(date.getMinutes() / 60))
  date.setMinutes(0, 0, 0)

  return date.getTime()
}
