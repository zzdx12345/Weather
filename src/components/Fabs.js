import React from 'react'
import { Fab, styled } from '@mui/material'
import { Navigation } from '@mui/icons-material'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store/store'


const Fabs = () => {

  const { setRoadName } = useStore()
  
  return (
    <RootBox>
      <Fab variant='extended' onClick={() => setRoadName('國道1號')}>
        <Navigation/>
        國道1號
      </Fab>
      <Fab variant='extended' onClick={() => setRoadName('國道2號')}>
        <Navigation/>
        國道2號
      </Fab>
      <Fab variant='extended' onClick={() => setRoadName('國道3號')}>
        <Navigation/>
        國道3號
      </Fab>
      <Fab variant='extended' onClick={() => setRoadName('國道5號')}>
        <Navigation/>
        國道5號
      </Fab>
    </RootBox>
  )
}

export default observer(Fabs)

const RootBox = styled('div')`
  z-index: 2000;
  position: fixed;
  top: 5%;
  right: 3%;
  display: flex;
  flex-direction: column;
  gap: 10px;
    svg {
      margin-right: 10px;
      transform: rotate(30deg);
    }
`