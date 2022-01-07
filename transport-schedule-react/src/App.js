import { useRef, useState } from 'react'
import { CssBaseline, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Home } from './pages/Home'

import { ScrollTop } from './components/Buttom'
import { CustomMenu } from './components/CustomMenu'
import { makeStyles } from '@mui/styles'


function App() {
  const classes = useStyles()
  const [stateMenu, setStateMenu] = useState(false)
  const [stateCurrentTitle, setStateCurrentTitle] = useState('Розклад руху:')
  const openMenu = () => setStateMenu(true)
  const closeMenu = () => setStateMenu(false)

  const ref = useRef(null)
  const scrollingToTop = () => {
    const element = ref.current
    element.scrollIntoView({
      behavior: 'smooth'
    })
  }
  return (
    <>
      <CssBaseline/>
      <div ref={ref}/>
      <CustomMenu
        stateMenu={stateMenu}
        openMenu={openMenu}
        closeMenu={closeMenu}
        title={stateCurrentTitle}
      />
      <Home />
      <ScrollTop handleClick={scrollingToTop}>
        <Fab color={'primary'} style={{zIndex: 2}} size="small">
          <KeyboardArrowUpIcon/>
        </Fab>
      </ScrollTop>
    </>
  )
}

const useStyles = makeStyles({
})

export default App
