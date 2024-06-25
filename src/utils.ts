import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

export const age = (timestamp: number) => {
  const result = timeAgo.format(new Date(timestamp * 1000), 'mini-now');
  return result === 'now' ? result : `${result} ago`;
};