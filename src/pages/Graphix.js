import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from "../components/footer";
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import img2 from '../img/portfolio/icon5.png'; 
import temp1 from "../img/portfolio/template4.png";
import temp2 from "../img/portfolio/Landing3.jpeg";

import 'react-tabs/style/react-tabs.css';
import Loader from '../loader'; 
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function Graphix() {
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
                            <h1> Graphix  </h1>
                          
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
                    </div>
                </Container>
          </section>
        <section>
            <Container>
                <div className="next">
                    <a href="/Tornado"> <KeyboardArrowLeftIcon /> Back </a>
                    <a href="/Pika">  Next <KeyboardArrowRightIcon />  </a>
                </div>
                </Container>
        </section>

        </main>
        <Footer1 />
    </div>
  )
}

export default Graphix