import './scss/App.css';
import React, {useState , useEffect} from 'react'

import Navbar from "./components/Header";
import Loader from "./loader"; 
import 'swiper/css';
// import Footer1 from "./components/footer";
import LandingPage from "./components/main";
import useDisableRightClick from "./components/click"; 



function App() {
useDisableRightClick();
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
      
          <div >
        
          
                  <Navbar />
        
              <LandingPage />
            
              <footer>
                <p className="pfooter"> © 2023 All Rights Reserved Created By <b>Rima Designer</b> </p>
              </footer>
            
          </div>
      

 
  );
}

export default App;
