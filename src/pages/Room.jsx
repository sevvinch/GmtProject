import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Data from '../data/room';
import Select from '../components/Offers';
import Question from '../components/Formm';
import Course from '../components/Subscription';
import FastQuestion from '../components/delivery/Documents';
import { RiArrowRightSLine } from 'react-icons/ri';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

export const Order = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container pb-[150px]">
        <div className="grid grid-cols-2 rounded-xl p-[40px] bg-white">
          <h2 className="text-[30px] font-medium">
            Закажите у нас комплексное оснащение
          </h2>
          <div>
            <input
              type="number"
              className="border-b border-b-[#7A7687] px-4 py-2 mb-[30px] bg-transparent text-[#7A7687] w-full outline-none opacity-30"
              placeholder="Ваш телефон"
            />
            <div className="flex justify-between items-center gap-4">
              <button className="rounded-full bg-[#088269] text-[14px] font-medium text-white px-6 py-2">
                Заказать
              </button>
              <p className="text-[12px] font-medium text-[#7A7687]">
                Нажимая «Отправить», я соглашаюсь c обработкой персональных
                данных на условиях{' '}
                <span className="text-[#088269]">
                  Политики конфиденциальности.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Room = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8F7F3]">
      <Header />
      <div className="container pb-[20px]">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to="/kabinet-podklyuch" className="">
            Кабинеты под ключ
          </NavLink>
        </div>
        <div>
          <h1 className="text-[48px] font-medium pt-[80px]">
            Кабинеты под ключ
          </h1>
          <div className="w-full grid grid-cols-2 gap-4 py-10">
            {Data.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden h-[380px] cursor-pointer"
                onClick={() => navigate(`/kabinet-podklyuch/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover"
                />
                <h3 className="py-[20px] px-5 bg-white text-[18px] font-medium">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Select />
      <Order />
      <FastQuestion />
      <Question />
      <Course />
    </div>
  );
};

export default Room;
