import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';


function Effecti(){
const about = useRef(null)

useEffect(() => {
  lottie.loadAnimation({
    container: about.current,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: require('../about.json')
  })
}, [])



}
export default Effecti
