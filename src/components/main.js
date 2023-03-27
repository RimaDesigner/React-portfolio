import img3 from "../img/image.svg";
import brand from "../img/brand.jpg";
import brand2 from "../img/brand2.jpg";
import brand3 from "../img/brand3.jpg";
import  Animation from './paralex'; 
import { Container } from '@mui/material';
import {Button} from 'react-bootstrap';
import { motion } from "framer-motion"; 
import gif1 from "../img/gif/create.gif";
import gif2 from "../img/gif/palette.gif";
import gif3 from "../img/gif/edite.gif";
import gif4 from "../img/gif/launch.gif";
import imgg from '../img/port.svg'
import { useTranslation } from 'react-i18next';

const text6 =" Let Talk ";  
const spanVariants = {
  visible : { y: 0, scaleY: 1 },
  
  hover : {
      y:[-1, -2, -2.8, 0.9, 0],
      scaleY :[1, 1.3, 0.8, 1, 1.2],
      color:"#BDAFD2",
    },
  }



export default function LandingPage () {
    const [ t , i18n ] = useTranslation();
    return (
                    <main className="main-index"> 
                            <div class="hb-lang">
                                <ul class="nav"><li class="active"> 
                                {i18n.language === 'fr' && <button href="#" onClick={() => {i18n.changeLanguage('en');}} >EN</button>}</li>
                                <li>  {i18n.language === 'en' &&<button onClick={() => {i18n.changeLanguage('fr');}} >FR</button>}</li></ul>
                                </div>
                            <section className="Section1">
                            <Animation />
                            <div class="background">
                                <div className="image">

                                </div>
                            </div>
                                        <Container>

                                                                <div className="text">
                                                                <h1> {t('title2')}  </h1>
                                                                <div class="welcome"> <h1> {t('title1')}</h1> <h3>{t('title3')} </h3> </div>
                                                                <p> {t('title4')} </p>
                                                
                                                    </div>  
                                                    <h3 className="other">
                                                            Your business baby deserves an experience 
                                                        </h3>
                                                    <div class="scroll-down scroll-down--left">
                <span>scroll down</span>
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg>
                                                     </div>
                                                     <div class="scroll-down scroll-down">
                                                    <span>scroll down</span>
                                                    <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-arrow-down fa-w-14 fa-5x"><path fill="currentColor" d="M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z" class=""></path></svg>
                                                                                        </div>

                                        </Container> 
                            </section>   
                            <section className="Section2">
                            <Container>
                                <div className="Aboutme">
                                                <div className="left-image">
                                                    <img src={img3} alt="imgg" /> 
                                                </div>
                                                <div className="right-text">
                                                            <div className="Title">
                                                                <h1>{t('title5')}</h1>

                                                                <p>  {t('title6')} </p>

                                                                </div>
                                                            <div className="text">
                                                                <p>
                                                                {t('title7')}
                                                                </p>
                                                                <a href="/Aboutus"><Button variant="contained"  className="btn"> {t('title8')}</Button></a>
                                                            </div>

                                                </div>
                                </div>
                            </Container>
                            
                            </section>   
                            <section className="section3">
                                <Container>
                                    <div className="morinfo">
                                    <div className="left">
                                                    <p class="Ptext">
                                                    {t('title9')}
                                                    </p>              
                                    </div>
                                    <div className="right">
                                                    <p>
                                                    {t('title10')}
                                                    </p>
                                                    <p className="Pline">
                                                    {t('title11')}
                                                    </p>
                                    </div>
                                    </div>                              
                                </Container>                                  
                            </section>
                           
                            <section className="section4">
                            <Container>
                                <div className='services'>
                                <h1> {t('title14')}</h1>
                                    <div className="card-services">
                                                <div className="card">
                                                        
                                                                    <div className="back-hover">
                                                                </div>
                                                                <img src={brand} alt="brand indentiy" />
                                                                
                                                                    <div className="text-hover text-2">
                                                                <h2 className="title2">{t('title12')}</h2>
                                                                <p>{t('title13')}</p>
                                                        </div>
                                                        
                                                        
                                                </div>
                                                <div className="card">
                                                        
                                                                    <div className="back-hover">
                                                                </div>
                                                                <img src={brand2} alt="brand indentiy" />
                                                                
                                                                
                                                        <div className="text-hover">
                                                                <h2 className="title2">{t('title15')}</h2>
                                                                <p>{t('title16')}</p>
                                                        </div>
                                                </div>
                                                <div className="card">
                                                        
                                                                    <div className="back-hover">
                                                                </div>
                                                                <img src={brand3} alt="brand indentiy" />
                                                                
                                                                
                                                        
                                                        <div className="text-hover">
                                                                <h2 className="title2">Web Developement</h2>
                                                                <p>{t('title17')}</p>
                                                        </div>
                                                </div>

                                    </div> 
                                    <div class="explore">
                                    <a href="/Services"><Button variant="contained" class="btn"> {t('title18')} </Button> </a>  
                                    </div>
                                         </div>           
                                         </Container>
                            </section>
                            <section className="howitwork">
                                <Container>
                                    <div className="text">
                                        <h1>{t('title24')}</h1>
                                    </div>
                                    <div className="cards">
                                        <div className="card">
                                            <div className="text">
                                                <span>{t('title25')}</span>
                                                <p>{t('title26')}</p>
                                            </div>
                                            <div className="image">
                                                <img src={gif1}  alt="brand"/>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="text">
                                                <span>{t('title27')}</span>
                                                <p>{t('title28')}</p>
                                            </div>
                                            <div className="image">
                                                <img src={gif2}  alt="brand"/>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="text">
                                                <span>{t('title29')}</span>
                                                <p>{t('title30')}</p>
                                            </div>
                                            <div className="image">
                                                <img src={gif3}  alt="brand"/>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="text">
                                                <span>{t('title31')}</span>
                                                <p> {t('title32')}</p>
                                            </div>
                                            <div className="image">
                                                <img src={gif4}  alt="brand"/>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </section>
                            <section className='section5'>
                                <Container>
                            {/* <div className='hover-img'></div> */}
                                                            {/* <Swiper className='items '
                                                            slidesPerView={1}
                                                            scrollbar={{ draggable: true }}
                                                            autoplay={{
                                                                delay: 2500,
                                                                disableOnInteraction: false,
                                                            }}
                                                            modules={[Autoplay]}
                                                            onSlideChange={() => console.log('slide change')}
                                                            onSwiper={(swiper) => console.log(swiper)}
                                                            
                                                            
                                                            
                                                    >
                                                    <SwiperSlide className="item"> <img src={image1} alt="image1" className='img-fluid'/></SwiperSlide>
                                                    <SwiperSlide className="item">  <img src={image1} alt="image2" className='img-fluid' /></SwiperSlide>
                                                    <SwiperSlide className="item"> <img src={image1} alt="image3" className='img-fluid'/></SwiperSlide>
                                                    <SwiperSlide className="item"> <img src={image1} alt="imag4" className='img-fluid' /></SwiperSlide>
                                                    ...
                                                            </Swiper> */}
                                                            <div className="Pastwork">
                                                                <div className="image">
                                                                        <img src={imgg} alt="pastwork" />
                                                                </div>
                                                                <div class="text"> 
                                                                    <div>
                                                                        <h1> {t('title19')}</h1>
                                                                        
                                                                        <span>{t('title20')}</span>
                                                                        <p> {t('title21')}</p>
                                                                        </div>
                                                                        <a href="/Portfolio"> <Button className='btn'>{t('title22')}</Button></a>
                                                                    
                                                                         </div>
                                                            </div>


                                                            </Container>

                            </section>
                            <section className='info'>
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
                                                        <p> {t('title10')}</p>
                                                            <a href="/Contact"><Button variant="contained"  className="btn">{t('title23')} </Button></a>
                                                        </div>
                                   
                                </Container>
                            </section>
                    </main>
    )
}