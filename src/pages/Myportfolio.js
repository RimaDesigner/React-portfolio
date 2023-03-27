import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from "../components/footer";
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import img from '../img/icon.svg'; 
import 'react-tabs/style/react-tabs.css';
import port1 from '../img/portfolio/Pika.png'
import port2 from '../img/portfolio/Nexit.png'
import port3 from '../img/portfolio/iptex.png'
import port4 from '../img/portfolio/bakery.png'
import port5 from '../img/portfolio/Tornado.png'
import port6 from '../img/portfolio/TFood.png'
import port7 from '../img/portfolio/YallaGo.png'
import port8 from '../img/portfolio/Graphix.png'
import port9 from '../img/portfolio/Diamond.png'
import port10 from '../img/portfolio/CBST.png'
import { useTranslation } from 'react-i18next';
import {Button} from 'react-bootstrap';
import { motion } from "framer-motion"; 

import Loader from '../loader'; 
const text6 =" Let Talk ";  
const spanVariants = {
  visible : { y: 0, scaleY: 1 },
  
  hover : {
      y:[-1, -2, -2.8, 0.9, 0],
      scaleY :[1, 1.3, 0.8, 1, 1.2],
      color:"#BDAFD2",
    },
  }
function Myportfolio() {
  
  const [ t , i18n ] = useTranslation();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
   
    setTimeout(() =>{
      setLoader(false);
    }, 3000)
  },[])
    return loader ? 
    (
      <Loader />
    )
   :(
    <div >
        <Navbar>  </Navbar>
        <main className='portfolio'>        
          <Animation />
          <div class="hb-lang btn-color-2">
                                <ul class="nav"><li class="active"> 
                                {i18n.language === 'fr' && <button href="#" onClick={() => {i18n.changeLanguage('en');}} >EN</button>}</li>
                                <li>  {i18n.language === 'en' &&<button onClick={() => {i18n.changeLanguage('fr');}} >FR</button>}</li></ul>
                                </div>
          <div className='Background'>
            <div className='image'>
              <img src={img} alt="banner" />
            </div>
          </div>
          <section className='section1'>
              <Container>
                        <div className='textcenter'>
                            <h1> Portfolio </h1>
                          
                        </div>            
              </Container>
          </section>
          <section className="Galery">
            <Container>
         
            <div className="Cards">
                                                  <a className="card"  href="/Nexit">
                                                  <div class="avatar img2"><img src={port2} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Nexit Construction LTD </h3>
                                                    <p> Brand Identity & showcase website </p>
                                                    </div>
                                                  
                                                 </a>
                                                 <a className="card"  href="/Tornado">
                                                  <div class="avatar img2"><img src={port5} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Tornado Store </h3>
                                                    <p> Brand Identity & E-commerce Website</p>
                                                    </div>
                                                  
                                                 </a>
                                                 <a className="card" href="/Graphix" >
                                                  <div class="avatar img2"><img src={port8} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Graphix Store </h3>
                                                    <p> Brand Identity & E-commerce Website </p>
                                                    </div>
                                                  
                                                 </a>
                                                  <a className="card" href="/Pika" >
                                                  <div class="avatar img2"><img src={port1} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> PikaHouse </h3>
                                                    <p> Brand Identity & Pet Online Store </p>
                                                    </div>
                                                  </a>
                                                  <a className="card" href="/FoodT" >
                                                  <div class="avatar img2"><img src={port6} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Tornado Food </h3>
                                                    <p> Brand Identity</p>
                                                    </div>
                                                  
                                                  </a>
                                                  <a className="card" href="/Yalla">
                                                  <div class="avatar img2"><img src={port7} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Yalla Go </h3>
                                                    <p> Branding</p>
                                                    </div>
                                                  
                                                  </a>
                                                  <a className="card" href="/">
                                                  <div class="avatar img2"><img src={port4} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Bakers Kitchen  </h3>
                                                    <p> Brand Identity</p>
                                                    </div>
                                                  
                                                 </a>
                                                
                                                 <a className="card" href="/" >
                                                  <div class="avatar img2"><img src={port10} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3>CBST tunisie </h3>
                                                    <p> Brand Identity  & showcase website Design  </p>
                                                    </div>
                                                  
                                                 </a>

                                                 <a className="card" href="/">
                                                  <div class="avatar img2"><img src={port3} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Iptex studios </h3>
                                                    <p> Brand Identity </p>
                                                    </div>
                                                  
                                                 </a>
                                                 <a className="card" href="/">
                                                  <div class="avatar img2"><img src={port9} alt="review comments" />

                                                    </div>
                                                    <div class="media-body">
                                                    <h3> Diamond Box -Jewellery boutique </h3>
                                                    <p> Brand Identity </p>
                                                    </div>
                                                  
                                                 </a>


                                           
                                  
            </div>

            </Container> 

          </section>
          <section className='info info2'>
                                <Container>
                                  
                                           
                                    <div className='contact-text'>
                                                        <h1> {text6.split("").map((letter,id)=>(<motion.span 
                                                    key={id} 
                                                    variants={spanVariants} 
                                                    initial="visible" 
                                                    whileHover="hover">{letter}</motion.span>))} </h1>
                                                        <h3>
                                                            Your business baby deserves an experience 
                                                        </h3>
                                                        <p>{t('title10')}</p>
                                                            <a href="/Contact"><Button variant="contained"  className="btn">{t('title23')} </Button></a>
                                                        </div>
                                   
                                </Container>
                            </section>
        </main>
        <Footer1 />
    </div>
  )
}

export default Myportfolio