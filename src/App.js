import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { dark, light } from "./theme/theme.js";
import { useLoadScript } from '@react-google-maps/api'
import { observer } from "mobx-react-lite";
import Map from './views/Map.js'
import PopupCam from "./components/PopupCam.js";
import Menubar from "./components/Menubar.js";
import Fabs from "./components/Fabs.js"
import { useStore } from "./store/store.js";



const App = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_MAP_KEY
  })
  
  const { select, mode } = useStore()
  const theme = createTheme(mode === 'light'? light : dark)

  return(
    <ThemeProvider theme={theme}>
      {isLoaded && <Map/>}
      <Menubar>
        {select && <PopupCam />}
      </Menubar>
      <Fabs/>
    </ThemeProvider>
  )
}

export default observer(App)