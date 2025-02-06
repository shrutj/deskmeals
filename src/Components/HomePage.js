import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import chefLogo from '../Assets/Vintage-chef-character-logo.png';
import './HomePage.css';
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt, FaHandshake } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  const phoneNumber = 9893465216;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const openMenu = ()=>{
    navigate('/Menu');
  }

  return (
    <div className='home-page'>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <img src={logo} alt='Logo' className='navbar-logo' style={{borderRadius: '50%'}} />
        <div className='navbar-menu'>
          <div className='navbar-menu-item' onClick={()=>navigate('/')}><FaHome /> <b>Home</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/Menu')} ><FaUtensils /> <b>Menu</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/PartnerWithUs')}><FaHandshake /> <b>Partner with Us</b></div>
        </div>
      </nav>

      {/* Main Content */}
      <div className='main-content'>
        <h1 className='main-heading'>
          <div className='main-heading-partition-small'>Savor Every Moment</div>
          <div className='main-heading-partition-big'>with Exquisite Flavors</div>
        </h1>
        <p className='main-description'><b>Experience a delightful fusion of taste and ambiance in every visit.</b></p>
        <div>
        <button className='cta-button' onClick={handleCall}>Order Now</button>
        <button className='cta-button' onClick={openMenu} style={{margin: '20px'}}>Check Out Our Menu</button>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <nav >
      {!showMenu && 
      (<img src={logo} alt='Logo' height={100} width={100} className='mobile-menu-logo' style={{position: 'fixed'}} />)
      }
      {!showMenu && (
        <div className='mobile-menu-toggle' onClick={toggleMenu} style={{color: 'black'}}>
          ☰
        </div>
      )}
      </nav>

      {/* Mobile Menu */}
      {showMenu && (
        <div className='mobile-menu'>
          <div className='mobile-menu-close' onClick={toggleMenu}>
            &times;
          </div>
          <img src={logo} alt='Logo' style={{height: '100px', width: '100px', borderRadius: '50%', top: '10px'}} />
          <div className='mobile-menu-item' onClick={()=>navigate('/')}><FaHome /> <b>Home</b></div>
          <div className='mobile-menu-item' onClick={()=>navigate('/Menu')}><FaUtensils /> <b>Menu</b></div>
          <div className='mobile-menu-item' onClick={()=>navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
          <div className='mobile-menu-item' onClick={()=>navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
          <div className='mobile-menu-item' onClick={()=>navigate('/PartnerWithUs')}><FaHandshake /> <b>Partner with Us</b></div>
          <div className='mobile-menu-cta'>
            <button className='cta-button' onClick={handleCall}>Order Now</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className='footer'>
        <p>&copy; 2024 Desk Meals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
