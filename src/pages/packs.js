import React, {useState , useEffect} from 'react'
import Navbar from '../components/Header'
import Footer1 from "../components/footer";
import  Animation from '../components/paralex'; 
import { Container } from '@mui/material';
import img from '../img/icon.svg'; 
import {Button} from 'react-bootstrap';
import Loader from '../loader'; 
function Packs() {
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
        <Navbar>  </Navbar>
        <main className='packs'>        
          <Animation />
          <div className='Background'>
            <div className='image'>
              <img src={img} alt="banner" />
            </div>
          </div>
          <section className='section1'>
              <Container>
                        <div className='textcenter'>
                            <h1>Our packs</h1>
                            <span></span>
                           
                        </div>            
              </Container>
          </section>
          <section className='section2'>
            <Container>
              <div className='Cards'>
                      <div className='card'>
                          <h2> SLIVER </h2>
                          <h3>130 <span>DT</span></h3>
                          {/* <h3>Contacter Nous </h3> */}
                          <div className='text'>
                            <p>Sponsoring Social Media $20</p>
                            <p>3 Social Media Posts</p>
                          </div>
                          <a href="/Contact"><Button variant="contained"  className="btn"> Book Now </Button></a>
                      </div>
                      <div className='card'>
                          <h2> GOLD </h2>
                          <h3> 400 <span>DT</span> </h3>
                          <div className='text'>
                            <p>Logo Design</p>
                            <p>Sponsoring Social Media $30</p>
                            <p>5 Social Media Posts</p>
                            <p>1 video motion design  (10 secondes)</p>
                          </div>
                          <a href="/Contact"><Button variant="contained"  className="btn"> Book Now </Button></a>

                      </div>
                      <div className='card'>
                          <h2> DIAMOND </h2>
                          <h3>Contact Us </h3>
                          <div className='text'>
                            <p>Sponsoring Social Media $50 +</p>
                            <p>8 Social Media Posts</p>
                            <p>1 Video Motion design (10+ Secondes)</p>
                          </div>
                          <a href="/Contact"><Button variant="contained"  className="btn"> Book Now </Button></a>

                      </div>
              </div>
            </Container>
          </section>
          
        </main>
        <Footer1 />
    </div>
  )
}

export default Packs