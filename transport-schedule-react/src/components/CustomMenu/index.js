import {
  AppBar, Box, Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import data from '../../assets/data.json'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle'
import { isObb } from '../../helpers'
import { makeStyles } from '@mui/styles'
import { Time } from '../Time'

export const CustomMenu = (props) => {
  const classes = useStyles()
  const sx = useSxStyles
  const { openMenu, title, stateMenu, closeMenu } = props

  const handleClick = (id) => {
    const yOffset = -56;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});
    let timer
    document.addEventListener('scroll', () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        closeMenu()
      }, 100)
    })
  }
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={openMenu}
          >
            <MenuIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <Box sx={sx.time}>
            Поточний час: <Time/>
          </Box>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        open={stateMenu}
        onClose={closeMenu}
        onOpen={openMenu}
        anchor={'left'}
      >
        <List>
          {(data || []).map((value, index) => {
            return (
              <Box key={value.guid}>
                <ListItem button onClick={() => handleClick(value.guid)}>
                  <ListItemIcon>
                    <AirportShuttleIcon className={isObb(index) ? null : classes.reverseIcon}/>
                  </ListItemIcon>
                  <ListItemText primary={value.nav_title}/>
                </ListItem>
                {!isObb(index) ? <Divider /> : null}
              </Box>
            )
          })}
        </List>
      </SwipeableDrawer>
    </>
  )

}

const useSxStyles = {
  time: {
    fontSize: { xs: 12, sm: 16 },
  },
}

const useStyles = makeStyles({
  reverseIcon: {
    transform: 'scale(-1, 1)',
  },
})