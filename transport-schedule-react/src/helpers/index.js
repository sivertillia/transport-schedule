import { globalClass } from '../styles'
import moment from 'moment'

export const getTimeHMS = () => moment().format('HH:mm:ss')

export const isObb = x => !(x % 2)
export const getClassName = (x) => {
  const classes = globalClass()
  return classes[`mark_time_${x}`]
}

export const getClassColorBox = (x) => {
  const classes = globalClass()
  return isObb(x) ? classes.bgBlue : classes.bgPink
}

export const isTime = (tableTime) => {
  tableTime = tableTime.length < 5 ? '0' + tableTime : tableTime
  const nowTimeHM = moment().format('HH:mm')
  return tableTime > nowTimeHM
}