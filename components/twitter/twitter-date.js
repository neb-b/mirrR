// Function from stackoverflow http://stackoverflow.com/questions/6549223/javascript-code-to-display-twitter-created-at-as-xxxx-ago
// to change date received from Twitter into message
// "x minutes ago"

export default (tDate) => {
  const userDate = new Date()
  const tweetDate = new Date(Date.parse(tDate))
  const diff = Math.floor((userDate - tweetDate) / 1000)

  if (diff <= 1) {return "just now"}
  if (diff < 20) {return diff + " seconds ago"}
  if (diff < 40) {return "half a minute ago"}
  if (diff < 60) {return "less than a minute ago"}
  if (diff <= 90) {return "one minute ago"}
  if (diff <= 3540) {return Math.round(diff / 60) + " min ago"}
  if (diff <= 5400) {return "1 hour ago"}
  if (diff <= 86400) {return Math.round(diff / 3600) + " hours ago"}

  return "on " + tweetDate;
}

const months = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12'
}
