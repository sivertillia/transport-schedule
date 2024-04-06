import { useEffect, useState } from 'react'
import { getTimeHMS } from '../../helpers'

export const Time = () => {
  const [time, setTime] = useState('00:00:00')
  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeHMS()), 10)

    return () => {
      clearInterval(timer)
    }
  }, [time])
  return(
    <span>{time}</span>
  )
}