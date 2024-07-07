import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import Header from '../components/header/Header'
import Footer from '../components/Footer'
import CategoriesCatalog from '../components/catalog/CatalogCategories'
import Equipments from '../components/Equipments'
import Offers from '../components/Offers'
import Products from '../components/Products'
import Brands from '../components/Brands'
// import News from '../components/News'
import Accordion from '../components/Accordion'
import Formm from '../components/Formm'
import Subscription from  '../components/Subscription'

const Catalog = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={'/'} className="text-[#7A7687]">
            Главная
          </Link>
          <span className="text-[#7A7687]">
            <MdChevronRight />
          </span>
          <NavLink to={'/katalog'} className="">
            Каталог
          </NavLink>
        </div>
      </div>
      <CategoriesCatalog />
      <Equipments />
      <Offers />
      <Products />
      <Brands />
      {/* <News/> */}
      <Accordion />
      <Formm />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Catalog