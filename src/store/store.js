import { makeAutoObservable } from 'mobx'
import { createContext, useContext } from 'react'

class Store {
  constructor() {
    makeAutoObservable(this)
  }
  select = null
  roadName = '國道1號'
  mode = 'light'
  token = null
  setSelect  = act => this.select = act
  setToken = act => this.token = act
  setMode = act => this.mode = act
  setRoadName = act => this.roadName = act
}

const store = new Store()
const context = createContext(store)
export const useStore = () => useContext(context)