import { makeStyles } from '@mui/styles'

export const globalClass = makeStyles({
  mark_time_1: {
    fontWeight: 700,
    '& span': {
      fontWeight: 400,
    },
    background: 'linear-gradient(to right, #f90409 0%,#ed9304 100%)',
    ['@media (max-width: 500px)']: {
      background: 'linear-gradient(to bottom, #f90409 0%,#ed9304 100%)',
    }
  },
  mark_time_2: {
    fontWeight: 700,
    '& span': {
      fontWeight: 400,
    },
    background: 'linear-gradient(to right, rgba(237,147,4,1) 0%,rgba(149,187,0,1) 100%)',
    ['@media (max-width: 500px)']: {
      background: 'linear-gradient(to bottom, rgba(237,147,4,1) 0%,rgba(149,187,0,1) 100%)',
    }
  },
  mark_time_3: {
    fontWeight: 700,
    '& span': {
      fontWeight: 400,
    },
    background: 'linear-gradient(to right, rgba(149,187,0,1) 0%,rgba(5,104,0,1) 100%)',
    ['@media (max-width: 500px)']: {
      background: 'linear-gradient(to bottom, rgba(149,187,0,1) 0%,rgba(5,104,0,1) 100%)',
    }
  },
  bgBlue: {
    background: '#aeddf9',
  },
  bgPink: {
    background: '#dfcae1',
  },
})