import React from 'react';
import Footer from '../components/Footer';
import Mail from '../components/Subscription';
import Map from '../components/Formm';
import News from '../components/News';
import Brends from '../components/Brands';
import Section4 from '../components/Products';
import Section2 from '../components/Equipments';
import Section3 from '../components/Offers';
import KategoriyaItem from '../components/categories/CategoriesItem';
import Header from '../components/header/Header'
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Categories = () => {
  return (
    <>
    <Header/>
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link to={'/catalog'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Каталог <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Все категории
          </span>
        </Link>
      </div>
      <KategoriyaItem />
      <Section2 />
      <Section3 />
      <Section4 />
      <Brends />
      <News />
      <Map />
      <Mail />
      <Footer />
    </>
  );
};

export default Categories;
