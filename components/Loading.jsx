import React from 'react'
import image from '../assets/logo.png'
import { CircleLoader } from 'react-spinners'
const Loading = () => {
  return (
 <center style={{display:'grid', placeItems:'center', height:'100vh' }}>
    {/* <div>
        <img src={image} alt='' height={200} style={{marginBottom:10}}/>
    </div> */}
    <CircleLoader color='#3CBC28' size={60}/>
 </center>
  )
}

export default Loading