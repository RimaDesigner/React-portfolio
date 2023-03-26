import React from 'react'
// import Load from "./img/gif/load.gif";
import RingLoader from "react-spinners/RingLoader";
export default function Loader(){
return(
    <div className="loading">
       
<RingLoader
  color="#F8C0C8"
  size={40}
/>
    </div>
)

}