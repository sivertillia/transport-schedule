import data from '../../assets/data.json'
import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { getClassColorBox } from '../../helpers'
import { CustomBoxTime } from '../../components/CustomBoxTime'

export const Home = () => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      {(data || []).map((value, index) => {
        const classname = getClassColorBox(index)
        return (
          <CustomBoxTime
            guid={value.guid}
            key={`table-${index}`}
            title={value.title}
            tables={value.table}
            classname={classname}
          />
        )
      })}
    </Box>
  )
}

const useStyles = makeStyles({
  container: {
    margin: '0 auto',
    maxWidth: 780,
  },
})