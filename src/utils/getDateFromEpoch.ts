export const getDateFromEpoch = (date: number | string) => {
  return new Date(+`${date}`.padEnd(13, '0'))
}