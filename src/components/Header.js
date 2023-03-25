
import logo from '../img/logo.png';
import WorkIcon from '@mui/icons-material/Work';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import  NavbarMobile from './header-mobile'; 
import { useTranslation } from 'react-i18next';
export default function Navbar (){
    const [ t ] = useTranslation();
        return (
         <header className="header-left">
          
                < NavbarMobile></NavbarMobile>
                 <nav className='Nav'>
                
               <div className="Logo" id="logo"> <a className="" href="/"> <img src={logo} alt="logo" className="img-fluid" />
                    </a>
                    <span className='Rima'> Rima </span>
                    <span>Designer & Developer </span></div>
                <ul className='Nav-menu'>
  
                    <li className="Nav-item"> <a className="nav-link" href="/About"> <PersonIcon /> {t('title39')}</a></li>
                    <li className="Nav-item"> <a className="nav-link" href="/Portfolio"> <WorkIcon /> Portfolio</a></li>
                    <li className="Nav-item"> <a className="nav-link" href="/Services"> <DesignServicesIcon /> Services</a></li>
                    <li className="Nav-item"> <a className="nav-link" href="/Packs"> <AllInboxIcon /> Packs</a></li>
                    <li className="Nav-item"> <a className="nav-link" href="/Contact"> <PhoneForwardedIcon /> Contact</a></li>
  
                </ul>  
                <ul className='icons'>
                    <li><a className="nav-link" href="www.facebook.com/rimadesigner1"> <FacebookIcon /> </a></li>
                    <li><a className="nav-link" href="https://www.instagram.com/rimadesigner20/"> <InstagramIcon /> </a></li>
                    <li><a className="nav-link" href="https://wa.link/lczouk"> <WhatsAppIcon />  </a></li>
                    <li><a className="nav-link" href="mailto:rimadesigner.tn@gmail.com"> <AttachEmailIcon /> </a></li>
                    

                </ul>
                 </nav>  
            
         </header>
         
         
       

       )


}