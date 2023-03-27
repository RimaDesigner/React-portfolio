import './scss/App.css';
import React, {useState , useEffect} from 'react'

import Navbar from "./components/Header";
import Loader from "./loader"; 
import 'swiper/css';

import LandingPage from "./components/main";



function App() {


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
 : (
      
          <div>
        
          
                  <Navbar />
        
              <LandingPage />
            
              <footer>
                <p className="pfooter"> © 2023 All Rights Reserved Created By <b>Rima Designer</b> </p>
              </footer>
            
          </div>
      

 
  );
}

export default App;
