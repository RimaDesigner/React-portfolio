import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from "../components/footer";
import img from '../img/icon.svg'; 
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import ContactForm from "../components/contact"; 
// import image2 from '../img/contact.svg'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Loader from '../loader'; 
import { useTranslation } from 'react-i18next';
// const text6 =" Let's elevate your biz";  
// const spanVariants = {
//     visible : { y: 0, scaleY: 1 },
    
//     hover : {
//         y:[-1, -2, -2.8, 0.9, 0],
//         scaleY :[1, 1.3, 0.8, 1, 1.2],
//         color:"#BDAFD2",
//       },
//     }
    
function Contact () {
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
    <div >
        <Navbar></Navbar>
        <main className="Contactus" >
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
                        <div className='textcenter'>
                            <h1>{t('title40')}</h1>
                            {/* <h3>Tell me Your Story </h3> */}
                        </div>            
              </Container>
          </section>
          <section className='info'>
                                <Container>
                                <div className='contact-form'>
                                <div className='right-side'>
                                              <div className='text'>
                                                    <div className='contact-text'>
                                                            
                                                            <h1> {t('title46')}  </h1>
                                                            <p>{t('title37')}</p>
                                                            </div>
                                                                <ul>
                                                                  <li><a className="nav-link" href="mailto:rimadesigner.tn@gmail.com"> <AttachEmailIcon /> E-mail  </a></li>
                                                                  <li><a className="nav-link" href="https://wa.link/lczouk"> <WhatsAppIcon /> WhatsApp </a></li>
                                                                 
                                                                            <li><a className="nav-link" href="www.facebook.com/rimadesigner1"> <FacebookIcon /> Facebook </a></li>
                                                                            <li><a className="nav-link" href="https://www.instagram.com/rimadesigner20/"> <InstagramIcon /> Instagram </a></li>
                                                                            <li><a className="nav-link" href="https://www.linkedin.com/in/rimamri27/"> <LinkedInIcon /> LinkedIn </a></li>
                                                                            
                                                                </ul>
                                                </div>
                                                      {/* <div className='image'>
                                                        <img src={image2} alt="contact" />
                                                      </div> */}
                                            </div>
                                            <div className="form">
                                               
                                                       
                                                      
                                                    <ContactForm />
                                            </div>
                                        
                                    </div>
                                </Container>
          </section>

       
        </main> 
    <Footer1 />
    </div>
  )
}

export default Contact