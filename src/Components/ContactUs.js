import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt, FaHandshake } from 'react-icons/fa';
import './ContactUs.css';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="contact-page">
      {/* Navigation Bar */}
      <nav className="contact-navbar">
          <img src={logo} alt='Logo' className='contact-nav-logo' />
        <div className="contact-nav-menu">
          <div className='contact-nav-item' onClick={()=>navigate('/')}><FaHome /> <b>Home</b></div>
          <div className='contact-nav-item' onClick={()=>navigate('/Menu')}><FaUtensils /> <b>Menu</b></div>
          <div className='contact-nav-item' onClick={()=>navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
          <div className='contact-nav-item' onClick={()=>navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
          <div className='contact-nav-item' onClick={()=>navigate('/PartnerWithUs')}><FaHandshake /> <b>Partner with Us</b></div>
        </div>
      </nav>

        <nav >
        {!showMenu && (<div>
        <img src={logo} alt='Logo' height={100} width={100} className='contact-mobile-logo' />
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          ☰
        </div>
        </div>
        )}
        </nav>
        {showMenu && (
          <div className='mobile-menu'>
            <div className='mobile-menu-close' onClick={toggleMenu}>
              &times;
            </div>
            <img src={logo} alt='Logo' style={{height: '100px', width: '100px', borderRadius: '50%'}} />
            <div className='mobile-menu-item' onClick={()=>navigate('/')}><FaHome /> <b>Home</b></div>
            <div className='mobile-menu-item' onClick={()=>navigate('/Menu')} ><FaUtensils /> <b>Menu</b></div>
            <div className='mobile-menu-item' onClick={()=>navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
            <div className='mobile-menu-item' onClick={()=>navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
            <div className='mobile-menu-item' onClick={()=>navigate('/PartnerWithUs')}>
              <FaHandshake /> <b>Partner with Us</b>
            </div>
          </div>
        )}

      {/* Main Content */}
      <main className="contact-main">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:9893465216">+91 9893465216</a>
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:deesharma9174@gmail.com">deesharma9174@gmail.com</a>
        </p>
        <p>
          <strong>Address:</strong> <u>Sanskar Stationary, Scheme No. 54, Vijay Nagar, Indore, Madhya Pradesh-452010</u>
        </p>
      </main>

      {/* Footer */}
      <footer className="contact-footer">
        <p>&copy; 2024 Desk Meals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
