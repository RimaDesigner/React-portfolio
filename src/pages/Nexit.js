import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from "../components/footer";
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import img2 from '../img/portfolio/icon4.png'; 
import temp1 from "../img/portfolio/template5.png";
import temp2 from "../img/portfolio/Landing2.png";
import 'react-tabs/style/react-tabs.css';
import Loader from '../loader'; 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Tornado() {
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
        <main className='pikastore'>        
          <Animation />
          <div className='Background'>
            <div className='image'>
              <img src={img2} alt="banner" />
            </div>
          </div>
          <section className='section1'>
              <Container>
                        <div className='textcenter'>
                            <h1> Nexit Construction LTD  </h1>
                          
                        </div>            
              </Container>
          </section>
   
          <section className='section3'>
                <Container>
                    <div className="text">
                        <h1>Brand Identity Design</h1>
                    </div>
                    <div className="image">
                            <img src={temp1} alt="pika-project" />
                    </div>
                </Container>
          </section>
          <section className='section3'>
                <Container>
                    <div className="text">
                        <h1>Web Design </h1>
                    </div>
                    <div className="image">
                            <img src={temp2} alt="pika-project" />
                            <span>Full Project : <a href="https://www.behance.net/gallery/161257773/Nexit-Web-Design" > Here  </a></span>
                    </div>
                </Container>
          </section>
        <section>
            <Container>
                <div className="next">
                    <a href="/Portfolio"> <KeyboardArrowLeftIcon /> Back </a>
                    <a href="/Tornado">  Next <KeyboardArrowRightIcon />  </a>
                </div>
                </Container>
        </section>

        </main>
        <Footer1 />
    </div>
  )
}

export default Tornado