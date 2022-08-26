import React, { useEffect, useMemo, useState } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";
import axios from "axios";
import * as qs from 'qs'


const Map = () => {

  const [center, setCenter] = useState(null)
  const [data, setData] = useState([])
  const { setSelect, token, setToken, roadName } = useStore()
  
  
  const options = useMemo(()=>({
    disableDefaultUI: true,
    gestureHandling: "greedy"
  }),[])

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({ coords })=>{
      setCenter({lat: coords.latitude, lng: coords.longitude})
    })
  },[])

  useEffect(() => {
    !token && axios({
      method: 'POST',
      url: 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify({
        grant_type:"client_credentials",
        client_id: process.env.REACT_APP_TDX_KEY,
        client_secret: process.env.REACT_APP_TDX_VAL
      }),
    }).then(res => setToken(res.data.access_token))

    token && axios({
      url: `https://tdx.transportdata.tw/api/advanced/v2/Road/Traffic/CCTV/Freeway/RoadName/${roadName}?%24top=1000&%24format=JSON`,
      headers: {
        "authorization": `Bearer ${token}`
      }
    }).then(res => {
      console.log(res)
      setData(res.data.CCTVs)
    })
  },[token, setToken, roadName])


  return(
    <GoogleMap 
      mapContainerStyle={{width: '100vw', height: '100vh'}}
      center={center}
      zoom={12}
      options={options}
    >
      {data?.map(item =>
        <Marker
          key={item.CCTVID}
          position={{lat: Number(item.PositionLat), lng: Number(item.PositionLon)}}
          onClick={() => setSelect(item)}
        />
      )}

    </GoogleMap>
  )
}

export default observer(Map)
