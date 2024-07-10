import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Img from '../../public/assets/room/cabinet.png';
import { Order } from '../pages/Room';
import FastQuestion from '../components/delivery/Documents';
import Consult from '../components/guarantees/GuaranteesForm';
import { RiArrowRightSLine } from 'react-icons/ri';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const RoomInfo = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <Header />
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to="/kabinet-podklyuch" className="text-[#7A7687]">
            Кабинет под ключ
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to="/kabinet-podklyuch" className="text-[#7A7687]">
            Реанимация
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to="/kabinet-podklyuch/:id" className="">
            Палата реанимации и интенсивной терапии
          </NavLink>
        </div>
        <div className="py-10">
          <h1 className="text-[48px] font-medium py-5 w-[70%]">
            Комплексное оснащение палаты реанимации и интенсивной терапии
          </h1>
          <img src={Img} alt="Палата реанимации и интенсивной терапии" />
          <div className="flex justify-end pb-[15px]">
            <p className="text-[16px] font-medium mt-[30px] w-[50%]">
              Учитывая стремительное развитие мировых медицинских технологий,
              врачи в Российской Федерации и соседних странах столкнулись с
              вызовом, требующим обновления приборов в различных направлениях,
              от установок компьютерной томографии до ультразвуковых сканеров и
              ЛОР комбайнов. Переход на полностью цифровую платформу при
              диагностике и лечении заболеваний также стал серьёзным испытанием
              для большинства больниц и частных клиник.
            </p>
          </div>
          <div className="flex justify-end">
            <span className="text-[#07745E] text-[14px] font-medium w-[50%]">
              Скачать каталог "Стандарты оснащения отделений"
            </span>
          </div>
        </div>
      </div>
      <Order />
      <FastQuestion />
      <Consult />
      <Footer />
    </div>
  );
};

export default RoomInfo;
