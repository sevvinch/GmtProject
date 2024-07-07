import React, { useState } from 'react';
import Logo from './../../../public/assets/icons/logo.svg';
import { FaCaretDown, FaRegUser } from 'react-icons/fa';
import { IoStatsChartOutline } from 'react-icons/io5';
import { GoHeart } from 'react-icons/go';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiSearchLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import HeaderTop from './HeaderTop';
import HeaderBottom from './HeaderBottom';

const navItems = [
  { to: '/', icon: <FaRegUser />, label: 'Войти' },
  { to: '/', icon: <GoHeart />, label: 'Избранное' },
  { to: '/', icon: <IoStatsChartOutline />, label: 'Сравнить' },
  { to: '/', icon: <HiOutlineShoppingCart />, label: 'Корзина' },
];

const categories = [
  'Реанимация',
  'Хирургия',
  'Офтальмология',
  'Лабораторная диагностика',
  'Акушерство',
  'Гинекология',
  'Гистология',
  'Косметология',
  'Оториноларингология',
  'Рентгенология и томография',
  'Гинекология',
  'Стерилизация',
  'Физиотерапия и реабилитация',
  'Функциональная диагностика',
  'Эндоскопия',
  'Новинки',
  'Распродажи',
  'Кабинеты под ключ',
];

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className="">
      <HeaderTop />
      <div className="border-b border-[#E5E2EE]">
        <div className="container py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <NavLink to="/">
                <img src={Logo} alt="Logo" />
              </NavLink>

              <div className="relative flex items-center border border-[#D5D1E1] px-2 rounded-full">
                <button
                  onClick={() => setShowCategories(!showCategories)}
                  className="flex items-center gap-2 text-[14px] text-[#7A7687] rounded-full bg-[#EFEFEF] p-2 relative right-[8px]"
                >
                  Все категории
                  <FaCaretDown className="text-[#7A7687] text-[14px] font-semibold leading-normal" />
                </button>
                {showCategories && (
                  <div className="absolute top-10 left-0 w-[250px] bg-white shadow-md rounded-lg z-10">
                    <ul className="py-2">
                      {categories.map((category, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          {category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Поиск"
                  className="bg-[#F8F7F3] px-4 w-[400px] outline-none"
                />
                <button className="h-[38px] w-[50px] flex items-center text-[15px] text-[#7A7687] rounded-r-full bg-[#D5D1E1] left-2 relative">
                  <RiSearchLine className="text-[#7A7687] ml-5" />
                </button>
              </div>
              <div>
                <p className="text-[12px] font-medium leading-normal text-[#7A7687]">
                  Пн-Пт с 09:00-19:00
                </p>
                <p className="text-[12px] font-medium leading-normal text-[#7A7687]">
                  Сб-Вс - выходной
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.to}
                  className="text-[#7A7687] text-[12px] font-medium leading-normal flex flex-col items-center hover:text-[#07745e] transition-colors duration-300"
                >
                  <div className="flex flex-col items-center">
                    {React.cloneElement(item.icon, {
                      className: 'text-[#7A7687] text-lg',
                    })}
                    <span>{item.label}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
