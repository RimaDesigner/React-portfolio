import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from '../components/footer'
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import img from '../img/icon.svg'; 
import img2 from '../img/gif/logodesign.gif'; 
import img3 from '../img/gif/commerce.gif';
import img4 from '../img/gif/branding.gif';
import img5 from '../img/gif/showcase.gif';
import img6 from '../img/gif/videoAD.gif';
import img7 from '../img/gif/socialmedia.gif';
import {Button} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import Loader from '../loader'; 
function Services() {
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
   :
  
  (
    <div>
        <Navbar>   </Navbar>
      <main className='services'>
        <Animation />
        <div class="hb-lang">
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
                  <div className='text'>
                  <h1>Services </h1>
                  <span>{t('title71')} </span>
                  </div>
                  <div className='cards'> 
                  <div className="card" >
                          <div class="avatar "><img src={img5} alt="review comments" />

                            </div>
                            <div class="media-body">
                            <h3>{t('title67')}</h3>
                            <p>Portfolio web</p>
                            <p>professional web...</p>
                            </div>
                          </div>  
                          <div className="card" >
                          <div class="avatar img2"><img src={img3} alt="review comments" />

                            </div>
                            <div class="media-body">
                            <h3> {t('title68')} </h3>
                            <p>E-commerce  </p>
                            <p>E Catalogue  </p>
                            <p>e learning ..... </p>
                            
                                    
                                    
                            </div>
                          </div>
                          <div className="card" >
                          <div class="avatar"><img src={img4} alt="review comments" />

                            </div>
                            <div class="media-body">
                            <h3> {t('title69')}</h3>
                              
                                    
                            </div>
                          </div>  
                          <div className="card" >
                          <div class="avatar"><img src={img2} alt="review comments" />

                            </div>
                            <div class="media-body">
                         
                            <h3> Logo Design  </h3>
                            
                                    
                                    
                            </div>
                          </div>
                          <div className="card" >
                          <div class="avatar"><img src={img7} alt="review comments" />

                            </div>
                            <div class="media-body">
                            <h3> Social Media posts </h3>
                        
                          
                                    
                                    
                            </div>
                          </div>  
                          <div className="card" >
                          <div class="avatar"><img src={img6} alt="review comments" />

                            </div>
                            <div class="media-body">
                            <h3> Video AD </h3>
                            <p>  Video motion AD / Video intro </p>
                           
                                    
                                    
                            </div>
                          </div>  
                         
                         
                  </div>
                  <a href="/Contact"><Button variant="contained"  className="btn">{t('title70')} </Button></a>
                  </Container>
                
              
                </section>
                {/* <div className='Background2'>
            <div className='image2'>
              <img src={img2} alt="banner" />
            </div>
          </div> */}
                       
        
        </main>

        
        <Footer1 />
    </div>
  )
}

export default Services