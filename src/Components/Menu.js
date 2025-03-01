import React, { useState, useEffect } from 'react';
import logo from '../Assets/logo.png';
import vegetarianSign from '../Assets/vegetarian-sign.png';
import { FaHome, FaUtensils, FaInfoCircle, FaPhoneAlt, FaHandshake, FaWhatsapp, FaPlus } from 'react-icons/fa';
import './Menu.css';
import { useNavigate } from 'react-router-dom';
import menuItems from './MenuItems';

const categories = ['All', 'Momos', 'Beverages', 'Sandwiches', 'Maggi', 'Paratha', 'Pasta', 'Fries', 'South Indian', 'North Indian'];

const MenuPage = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setModalOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({ name: '', price: '', quantity: 1, description: '' });
  const [addedItems, setAddedItems] = useState([]);
  const [lastOrder, setLastOrder] = useState({name: '', price: '', description:'', quantity: 1});
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [userName, setUserName] = useState('');
  const [addMoreOn, setAddMoreOn] = useState(false);
  const [totalCartValue, setTotalCartValue] = useState(0);
  const navigate = useNavigate();
  const phoneNumber = '+919893465216';

  // Load order details from local storage on component mount
  useEffect(() => {
    const savedOrderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (savedOrderDetails) {
      setOrderDetails(savedOrderDetails);
    }
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openModal = (name, price, description) => {
    const priceNumber = parseFloat(price.replace('₹', '').trim());
    setOrderDetails(prevDetails => ({ ...prevDetails, name: name, price: priceNumber, description: description }));
    setLastOrder({name: name, price: priceNumber, description: description });
    setModalOpen(true);
  };

  const handleOrder = () => {
    console.log(addedItems, lastOrder);
    // Calculate total cart value
    const total = addedItems.reduce((total, item) => {
      return total + item.price*item.quantity; // Accumulate the total value
    }, 0);

  
    setTotalCartValue(total+lastOrder.price*lastOrder.quantity); // Update the state with the total cart value
    //console.log(setTotalCartValue)
    const isBelow99 = totalCartValue < 129;
    let message = `Hi there! I would like to order:\n`;

    addedItems.forEach(item => {
      message += `- ${item.name} \nDescription: ${item.description} \nPrice: ₹${item.price} \nQuantity: ${item.quantity}\n`;
    });

    // Include the last added item
    message += `- ${lastOrder.name} \nDescription: ${lastOrder.description} \nPrice: ₹${lastOrder.price} \nQuantity: ${orderDetails.quantity}\n`;

    // Calculate Delivery Charges
    if ((total + lastOrder.price*orderDetails.quantity) <= 129) {
      message += `\nDelivery Charges: ₹15`;
    }

    const addOn = (total + lastOrder.price*orderDetails.quantity) > 129 ? 0 : 15;

    message += `\nTotal: ₹${((total + lastOrder.price*orderDetails.quantity) + addOn)}\n`;
    console.log(total + lastOrder.price*orderDetails.quantity + addOn);
    message += `\nDelivery Receiver: ${userName} \nDelivery Address: ${address}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');

    // Clear added items after order
    setAddedItems([]);
    setAddMoreOn(false);
  };

  const addItem = () => {
    if (orderDetails.name && orderDetails.quantity > 0) {
      // Ensure price is a number
      const price = parseFloat(orderDetails.price) || 0; // if price is undefined or NaN, default to 0
      const newItem = { ...orderDetails, price }; // Create a new item object with the current details
      setAddedItems(prevItems => [...prevItems, newItem]); // Add the item to the cart
      setOrderDetails({ name: '', price: '', address: '', userName: '', quantity: 1, description: '' }); // Reset only relevant fields
      setAddMoreOn(true);
      setModalOpen(false);
    }
  };

  // Calculate total cart value when addedItems change
  useEffect(() => {
    const total = addedItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalCartValue(total+lastOrder.price*lastOrder.quantity);
  }, [addedItems]); // This effect runs when addedItems changes

  const dispText = !addMoreOn ? 'Order via WhatsApp' : 'Add Item';

  const isBelow99 = totalCartValue < 129;

  const handleCancel = () => {
    // Reset cart on cancel
    setTotalCartValue(0);
    setAddedItems([]);
    setAddMoreOn(false);
    setModalOpen(false);
  };

  return (
    <div className="menu-page">
      <nav className="menu-navbar">
        <img src={logo} alt='Logo' className='menu-nav-logo' style={{ borderRadius: '50%' }} />
        <div className='menu-nav-menu'>
          <div className='menu-nav-item' onClick={() => navigate('/')}><FaHome /> <b>Home</b></div>
          <div className='menu-nav-item' onClick={() => navigate('/Menu')}><FaUtensils /> <b>Menu</b></div>
          <div className='menu-nav-item' onClick={() => navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
          <div className='menu-nav-item' onClick={() => navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
          <div className='menu-nav-item' onClick={() => navigate('/PartnerWithUs')}><FaHandshake /> <b>Partner with Us</b></div>
        </div>
      </nav>

      

      <main className="menu-main">
        <div className="menu-container">
          <h1 className="menu-title">Our Menu</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* <div className="filter-bar">
            {categories.map(category => (
              <button
                key={category}
                style={{marginBottom:'5px'}}
                className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div> */}

          <div className="menu-items">
            {/* {filteredItems.map(item => (
              <div key={item.id} className="menu-item">
                <img src={vegetarianSign} alt="Vegetarian" className="vegetarian-sign" style={{ height: '25px', width: '25px', borderRadius: '0px' }} />
                <img src={item.imageUrl} alt={item.name} />
                <div className="menu-info">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <p className="price">{item.price}</p>
                  <span>
                    {!addMoreOn ? <a href={`tel:${phoneNumber}`} className="order-button">Order on Call</a> : <></>}
                  </span>
                  <button onClick={() => openModal(item.name, item.price, item.description)} className="order-button-whatsapp">
                    <FaWhatsapp /> {dispText}
                  </button>
                  <b>Coming Soon</b>
                </div>
              </div>
            ))} */}
            <h1 style={{width:"100%", textAlign: 'center', color:'white', textShadow:"0 0 5px #0ff, 0 0 10px #0ff, 0 0 15px #0ff, 0 0 20px #0ff, 0 0 25px #0ff, 0 0 30px #0ff"}}>Coming Soon</h1>
          </div>
        </div>
      </main>

      {isModalOpen && (
        <div className="modal">
          <h2>Place Your Order</h2>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={userName}
            onChange={(e) => {setOrderDetails({ ...orderDetails, userName: e.target.value }); setLastOrder({...lastOrder, userName: e.target.value}); setUserName(e.target.value)}}
          />
          <input
            type="text"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => {setOrderDetails({ ...orderDetails, address: e.target.value }); setLastOrder({...lastOrder, address:e.target.value}); setAddress(e.target.value)}}
          />
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <span>Quantity</span>
            <input
              type="number"
              min="1"
              value={orderDetails.quantity}
              onChange={(e)=> {
                setOrderDetails({ ...orderDetails, quantity: e.target.valueAsNumber });
                setLastOrder({...lastOrder, quantity: e.target.valueAsNumber});
                setQuantity(e.target.valueAsNumber);
              }}
              style={{ width: '50px', marginRight: '5px' }}
            />
            <button onClick={addItem} className='add-item-button'><FaPlus /> Add More</button>
          </div>

          {(totalCartValue < 129) && (
            <div className="cart-info">
              <p>Make your cart value ₹129 or above to qualify for free delivery. A ₹15 delivery charge will be added if the total is below ₹129.</p>
            </div>
          )}

          <div className="modal-buttons">
            <button onClick={handleOrder}>Place Order</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}

<nav className='mobile-nav'>
        {!showMenu && (
          <div>
            <img src={logo} alt='Logo' height={100} width={100} className='mobile-menu-logo' style={{ position: 'fixed' }} />
            <div className='mobile-menu-toggle' onClick={toggleMenu}>
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
          <img src={logo} alt='Logo' style={{ height: '100px', width: '100px', borderRadius: '50%', top: '10px' }} />
          <div className='mobile-menu-item' onClick={() => navigate('/')}><FaHome /> <b>Home</b></div>
          <div className='mobile-menu-item' onClick={() => navigate('/Menu')}><FaUtensils /> <b>Menu</b></div>
          <div className='mobile-menu-item' onClick={() => navigate('/AboutUs')}><FaInfoCircle /> <b>About Us</b></div>
          <div className='mobile-menu-item' onClick={() => navigate('/ContactUs')}><FaPhoneAlt /> <b>Contact Us</b></div>
          <div className='mobile-menu-item' onClick={() => navigate('/PartnerWithUs')}><FaHandshake /> <b>Partner with Us</b></div>
        </div>
      )}

      <footer className="menu-footer">
        <p>&copy; 2024 Desk Meals. All rights reserved.</p>
        <p className="disclaimer-text" style={{ marginRight: '35px' }}>The images are meant for depiction only and the original product may vary.</p>
      </footer>
    </div>
  );
};

export default MenuPage;
