import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt, FaHandshake } from 'react-icons/fa';
import './PartnerWithUs.css';

const PartnerWithUs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const phoneNumber = 9893465216;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='partner-page'>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <img src={logo} alt='Logo' className='navbar-logo' style={{borderRadius: '50%'}} />
        <div className='navbar-menu'>
          <div className='navbar-menu-item' onClick={()=>navigate('/')}><FaHome /> <b>Home</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/Menu')}><FaUtensils /> <b>Menu</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
          <div className='navbar-menu-item' onClick={()=>navigate('/PartnerWithUs')}><FaHandshake /> <b>Partner with Us</b></div>
        </div>
      </nav>

      {/* Mobile Menu Toggle Button */}
      <nav>

        {!showMenu && (
        <div>
            <img src={logo} alt='Logo' height={100} width={100} className='mobile-menu-logo' style={{position: 'fixed'}} />
            <div className='mobile-menu-toggle' onClick={toggleMenu} style={{color: 'black'}}>
            ☰
            </div>
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
            <button className='cta-button' onClick={handleCall}>Get in Touch</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div class="content-wrapper">
      <div className='main-content'>
        <h1 className='main-heading'>
          Partner with Us
        </h1>
        <p className='main-description'>
          <b>Join us in creating unforgettable experiences. Let's explore how we can work together to elevate our mutual success.</b>
        </p>
        <button className='cta-button' onClick={handleCall}>Get in Touch</button>
      </div>
      </div>

      {/* Footer */}
      <footer className='footer'>
        <p>&copy; 2024 Desk Meals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PartnerWithUs;
