import React from "react";
import { Fab, styled, useMediaQuery, useTheme } from "@mui/material";
import { useStore } from "../store/store";
import { observer } from "mobx-react-lite";
import { Close } from "@mui/icons-material";



const PopupCam = () => {

  const { select, setSelect } = useStore()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return(
    <RootBox>
      <div style={{position: 'relative'}}>
        <img src={select.VideoStreamURL} alt=''/>
        <Fab size="small" onClick={() => setSelect(null)}>
          <Close/>
        </Fab>
      </div>
    </RootBox>
  )
}

export default observer(PopupCam)

const RootBox = styled('div')`
  z-index: 2000;
  position: absolute;
  left: 130%;
    img {
      width: 450px;
      height: 350px;
      background-size: cover;
    }
    button {
      position: absolute;
      top: -7%;
      right: -4%;
      background: rgba(220,220,220,0.6)
    }
`