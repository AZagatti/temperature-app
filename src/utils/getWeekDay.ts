export const getWeekDay = (date: Date) => {
  const weekDay = date.toLocaleTimeString('pt-br', { weekday: 'long'}).split(',')[0]

  return `${weekDay[0].toUpperCase()}${weekDay.slice(1)}`
}