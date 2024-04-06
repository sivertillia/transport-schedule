import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const CustomBlockTime = (props) => {
  const { time, text, classname } = props
  const classes = useStyles()
  return (
    <Box className={`${classes.box} ${classname}`}>{time}
      <span className={classes.miniText}>
        {text}
      </span>
    </Box>
  )
}

const useStyles = makeStyles({
  box: {
    width: 110,
    height: 55,
    border: '1px solid #ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 14px',
    ['@media (max-width: 500px)']: {
      width: '100%',
      border: 'none',
      borderBottom: '1px solid rgb(230, 245, 229)',
    },
  },
  miniText: {
    fontSize: 10,
  },
})