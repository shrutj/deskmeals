import React, { useState } from 'react';
import logo from '../Assets/logo.png';
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt, FaHandshake } from 'react-icons/fa';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="about-page">
      {/* Navigation Bar */}
      <nav className="about-navbar">
        <img src={logo} alt='Logo' className='about-nav-logo' style={{ borderRadius: '50%' }} />
        <div className='about-nav-menu'>
          <div className='about-nav-item' onClick={() => navigate('/')}>
            <FaHome /> <b>Home</b>
          </div>
          <div className='about-nav-item' onClick={() => navigate('/Menu')}>
            <FaUtensils /> <b>Menu</b>
          </div>
          <div className='about-nav-item' onClick={() => navigate('/AboutUs')}>
            <FaInfoCircle /> <b>About Us</b>
          </div>
          <div className='about-nav-item' onClick={()=>navigate('/ContactUs')}>
            <FaPhoneAlt /> <b>Contact Us</b>
          </div>
          <div className='about-nav-item' onClick={()=>navigate('/PartnerWithUs')}>
            <FaHandshake /> <b>Partner with Us</b>
          </div>
        </div>
        </nav>

        <nav>
        { !showMenu && (
        <img src={logo} alt='Logo' className='mobile-screen-logo' height={100} width={100} />
        )}
        {!showMenu && (
          <div className='mobile-menu-toggle' onClick={toggleMenu} >
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
          <img src={logo} alt='Logo' style={{height: '100px', width: '100px', borderRadius: '50%'}} />
          <div className='mobile-menu-item' onClick={() => navigate('/')}>
            <FaHome /> <b>Home</b>
          </div>
          <div className='mobile-menu-item' onClick={()=>navigate('/Menu')}><FaUtensils /> <b>Menu</b></div>
          <div className='mobile-menu-item' oonClick={() => navigate('/AboutUs')}>
            <FaInfoCircle /> <b>About Us</b>
          </div>
          <div className='mobile-menu-item' onClick={()=>navigate('/ContactUs')}>
            <FaPhoneAlt /> <b>Contact Us</b>
          </div>
          <div className='mobile-menu-item' onClick={()=>navigate('/PartnerWithUs')}>
            <FaHandshake /> <b>Partner with Us</b>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="about-main">
        <h1>About Us</h1>
        <p>
        Welcome to Desk Meals, your go-to cloud kitchen for exceptional online dining. We specialize in delivering gourmet meals right to your doorstep, combining convenience with quality.
        </p>
        <p>
        Our mission is to offer you an unforgettable culinary experience with dishes crafted from the finest ingredients by our dedicated chefs. Enjoy delicious meals delivered straight to your home, perfect for any occasion.
        </p>
        <p>
        Thank you for choosing Desk Meals. We look forward to serving you soon!
        </p>
      </main>

      {/* Footer */}
      <footer className="about-footer">
        <p>&copy; 2024 Desk Meals. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
