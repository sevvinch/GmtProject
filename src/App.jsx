import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import About from './pages/About';
import Delivery from './pages/Delivery';
import Services from './pages/Services';
import Payment from './pages/Payment';
import Guarantees from './pages/Guarantees';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Room from './pages/Room';
import RoomInfo from './pages/RoomInfo';
import Comparison from './pages/Comparison';
import Catalog from './pages/Catalog';
import Sertificats from './components/about/Sertificats';
import Article from './pages/Article';
import Manufacturer from './pages/Manufacturer';
import Categories from './pages/Categories';
import Stocks from './pages/Stocks'
import Backet from './pages/Backet'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/o-kompanii" element={<About />} />
            <Route path="/dostavka" element={<Delivery />} />
            <Route path="/oplata" element={<Payment />} />
            <Route path="/garantii" element={<Guarantees />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/katalog" element={<Catalog />} />
            <Route path="/kabinet-podklyuch" element={<Room />} />
            <Route path="/kabinet-podklyuch/:id" element={<RoomInfo />} />
            <Route path="/servisi" element={<Services />} />
            <Route path="/kontakt" element={<Contacts />} />
            <Route path="/sravneniye" element={<Comparison />} />
            <Route path="/blog/informatsioniy-statya" element={<Article />} />
            <Route path="/proizvoditel" element={<Manufacturer />} />
            <Route path="/kategoriya" element={<Categories />} />
            <Route path="/about/sertificats" element={<Sertificats />} />
            <Route path="/aktsiya" element={<Stocks />} />
            <Route path="/basket" element={<Backet/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
