import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { getClassName, isTime } from '../../helpers'
import { CustomBlockTime } from '../CustomBlockTime'

export const CustomBoxTime = (props) => {
  const { title, tables, classname, guid } = props
  const classes = useStyles()
  let counter = 0

  return (
    <Box id={guid}>
      <h2 className={classes.subtitle}><span>Розклад руху маршутного таксі <br/></span> {title}</h2>
      <Box className={classes.box}>
        {(tables || []).map((value, index) => {
          let newClassname = classname
          if (isTime(value.time)) {
            if (counter < 3) {
              counter++
              newClassname = getClassName(counter)
            }
          }
          return (
            <CustomBlockTime
              key={`td-${index}`}
              time={value.time}
              text={value.text}
              classname={newClassname}
            />
          )
        })}
      </Box>
    </Box>
  )
}

const useStyles = makeStyles({
  subtitle: {
    fontSize: 27,
    marginTop: 22,
    marginBottom: 0,
    padding: '0 14px',
    textAlign: 'center',
    ['@media (max-width: 500px)']: {
      fontSize: 17,
      position: 'sticky',
      top: 56,
      zIndex: 1,
      background: '#ffffff',
      '& span': {
        display: 'none',
      },
    },
  },
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    justifyContent: 'center',
  },
})