import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from "../components/footer";
import image from '../img/Image1.svg'; 
import img from '../img/icon.svg'; 
// import img2 from '../img/icon2.svg'; 
import img3 from '../img/item.svg'; 
// import img3 from '../img/icon3.png'; 
import icon1 from '../img/icons/creative.png';
import icon2 from '../img/icons/design.png';
import icon3 from '../img/icons/quality.png';
import icon4 from '../img/icons/integ.png';
// import  Animation from './paralex'; 
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import {Button} from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation } from "swiper";
import Typewriter from 'typewriter-effect';
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import Loader from '../loader'; 
import { EffectFlip} from "swiper";
import { useTranslation } from 'react-i18next';
function Aboutus() {
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
    <div className="aboutus" >
        <Navbar></Navbar>
        <main className='Right-side'>
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
                            <h1>  {t('title39')}</h1>
                            <h3>{t('title48')}</h3>
                        </div>            
              </Container>
          </section>
            <section className='section2'> 
         
                           <Container>
                            <div className="MoreAboutMe"> 
                            <div className="Aboutme">
                                                      
                                                      <div className="left-text">
                                                                  <div className="Title">
                                                                  <Typewriter
                                                                      onInit={(typewriter) => {
                                                                          typewriter
                                                                          .pauseFor(2500)
                                                                          .typeString('<h1> Me , Myself and I   </h1>')
                                                                          .pauseFor(1000)
                                                                          .start();

                                                                      }}
                                                                      />
                                                                      </div>
                                                                  <div className="text">
                                                                      <p>
                                                                      {t('title33')}

                                                                      </p>
                                                                      <p className="Pline"> {t('title34')}</p>
                                                                  </div>
                                                                  <a  href="/posts"><Button variant="contained"  className="btn"> {t('title35')} </Button></a>
                                                      </div>
                                                      <div className="right-image">
                                                          <img src={image} alt="about me " /> 
                                                      </div>
                                      </div>

                            </div>
                          </Container>                                         
          </section>
     
          <section className='section3'>
                                                                      
            < Container className="brandValue">
         
              <h1>{t('title49')}</h1>
                            <div className="brands">
                                  <div className='brand'>
                                  <div className="image">
                                    <img src={icon1} alt="image1" />
                                </div> 
                                <div className='text'>
                                    <p>{t('title52')}</p>
                                  </div>   
                                    </div>                                    
                                    <div className='brand'>
                                  <div className="image">
                                    <img src={icon2} alt="image2" />
                                </div> 
                                <div className='text'>
                                    <p> {t('title50')}</p>
                                  </div>   
                                    </div>    
                                    <div className='brand'>
                                  <div className="image">
                                    <img src={icon3} alt="image3" />
                                </div> 
                                <div className='text'>
                                    <p>{t('title51')}</p>
                                  </div>   
                                    </div>    
                                    <div className='brand'>
                                  <div className="image">
                                    <img src={icon4} alt="image4" />
                                </div> 
                                <div className='text'>
                                    <p>{t('title52')}</p>
                                  </div>   
                                    </div>    
                        </div>                                               
            </Container>
            {/* <div className='Background2'>
            <div className='image2'>
              <img src={img2} alt="banner" />
            </div>
          </div>  */}
          </section>  
                                                       
          <section className="sectionB">
      
                      <Container>
                    
                        <div className='skills'>
                                   <div className="text">
                                    <h1> {t('title54')} </h1>
                                    </div> 
                                    <div className="knowme">
                                             <div className="text">
                                                                      <h3>{t('title55')}</h3>
                                                                      <span> {t('title56')} </span>

                                              </div>
                                              <div className="text">
                                                                      <h3>{t('title58')}</h3>
                                                                      <span> Multimedia <p classname="icon">& </p> Marketing <p classname="icon">/ </p>  {t('title57')} </span>

                                              </div>
                                              <div className="text">
                                                                      <h3>{t('title59')} </h3>
                                                                      <span> Cycling <p classname="icon">&</p>  {t('title60')}  </span>

                                              </div>

                                    </div>
                                     
                    </div>                                   
                    {/* <div className="content">   <img src={img3} alt="banner" />
                    </div> */}

                      </Container>                                               
          </section>
        
          <section className='section6'>
            <Container>
              <div className='swipersection'>
                          <h1> {t('title61')}  </h1>
                                            <Swiper
                                    // spaceBetween={50}
                                    Navigation
                                    slidesPerView={1}
                                    pagination={true}
                                    effect={"flip"}
                                    grabCursor={true}
                                    modules={[EffectFlip,Navigation]}
                                    className="mySwiper"
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                  >
                                    <SwiperSlide>
                                      
                                                                    <div class="avatar"><img src={img3} alt="review comments" />

                                                                    </div>
                                                                  <div class="media-body">
                                                                    <p>  {t('title56')} </p>
                                                                    <h6> Saigal David </h6>
                                                                        </div></SwiperSlide>
                                    <SwiperSlide>     
                                                                    <div class="avatar"><img src={img3} alt="review comments" />

                                                                    </div>
                                                                  <div class="media-body">
                                                                    <p> {t('title63')} </p>
                                                                    <h6> Amira Jabeur </h6></div>
                                                                       </SwiperSlide>
                                                                       <SwiperSlide>        
                                                                    <div class="avatar"><img src={img3} alt="review comments" />

                                                                    </div>
                                                                  <div class="media-body">
                                                                    <p> {t('title65')}  </p>
                                                                    <h6> Mohamed Emir </h6></div>
                                                                      </SwiperSlide>
                                    <SwiperSlide>      
                                                                    <div class="avatar"><img src={img3} alt="review comments" />

                                                                    </div>
                                                                  <div class="media-body">
                                                                    <p> {t('title64')}</p>
                                                                    <h6> Marwa Bouaouina </h6></div>
                                                                      </SwiperSlide>

                                      <SwiperSlide>      
                                                                    <div class="avatar"><img src={img3} alt="review comments" />

                                                                    </div>
                                                                  <div class="media-body">
                                                                    <p> "{t('title66')}</p>
                                                                    <h6> Saigal David </h6></div>
                                                                       </SwiperSlide>
                                    ...
                                          </Swiper>
               </div>
            </Container>
                             
          </section>
        
    </main> 
    <Footer1 />
    </div>
  )
}

export default Aboutus