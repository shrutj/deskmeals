import './App.css';
import HomePage from './Components/HomePage';
import Menu from './Components/Menu'
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import PartnerWithUs from './Components/PartnerWithUs';

import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Menu' element={<Menu />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
          <Route path='/PartnerWithUs' element={<PartnerWithUs />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
