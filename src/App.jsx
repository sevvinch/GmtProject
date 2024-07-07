import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/About';
import Delivery from './pages/Delivery'
import Catalog from './pages/Catalog'
// import Manufacturer from './pages/Manufacturer'
import Services from './pages/Services';
import Payment from './pages/Payment';
import Guarantees from './pages/Guarantees';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
// другие импорты, если нужно

function App() {
  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-kompanii" element={<About />} />
          <Route path="/dostavka" element={<Delivery />} />
          <Route path="/oplata" element={<Payment />} />
          <Route path="/garantii" element={<Guarantees />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/katalog" element={<Catalog />} />
          {/* <Route path="/proizvoditel" element={<Manufacturer />} /> */}
          <Route path="/kabinet-podklyuch" element={<Home />} />
          <Route path="/servisi" element={<Services />} />
          <Route path="/aktsiya" element={<Home />} />
          <Route path="/pokupatel" element={<Home />} />
          <Route path="/kontakt" element={<Contacts />} />
          {/* другие маршруты, если нужно */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
