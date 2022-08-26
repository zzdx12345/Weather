import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import { AppBar, styled, IconButton } from "@mui/material";
import { 
  Search, DarkMode, VideoCameraBack, AccountCircle 
} from '@mui/icons-material'


const Menubar = (props) => {

  const {setSelect} = useStore()

  return(
    <RootBox>
      <IconButton>
        <Search/>
      </IconButton>
      <IconButton 
        className='videobar'
        onClick={()=>setSelect(null)}
      >
        <VideoCameraBack/>
        {props.children}
      </IconButton>
      <IconButton>
        <DarkMode/>
      </IconButton>
      <IconButton>
        <AccountCircle/>
      </IconButton>
    </RootBox>
  )
}

const RootBox = styled(AppBar)(({theme}) => `
  width: 4%;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0 20px 0;
  left: 0;
  background: ${theme.palette.menubar.main};
    .videobar{
      position: relative;
    }
`)

export default observer(Menubar)