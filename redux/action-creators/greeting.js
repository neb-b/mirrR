import { GET_GREETING } from '../constants'
import moment from 'moment'

export default async function fetchGreeting () {
  const message = getMessage()

  return {
    type: GET_GREETING,
    payload: { message }
  }
}

const getMessage = () => {
  const time = Number(moment().format('HH').split(' ')[0])
  if (time < 4) return "Good night"
  if (time < 10) return "Good morning"
  if (time < 16) return "Good afternoon"
  return "Good evening"
}
