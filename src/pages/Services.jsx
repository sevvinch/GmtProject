import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import Data from '../data/services';
import Number from '../components/Number';
// import Certificate from '../components/Sertificate';
import Question from '../components/Formm';
import Footer from '../components/Footer'
import Header from '../components/header/Header';

const Services = () => {
  return (
    <div className="">
      <Header/>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <Breadcrumb />

        <h1 className="text-[48px] font-semibold text-[#020202] py-10">
          Услуги
        </h1>

        {/* Services List */}
        <div className="grid grid-cols-2 gap-4 pb-10">
          {Data.map((data, index) => (
            <ServiceCard key={index} data={data} />
          ))}
        </div>
      </div>

      <Number />

      {/* Call to Action Section */}
      <CallToAction />

      {/* <Certificate /> */}
      <Question />
      <Footer />
    </div>
  );
};

const Breadcrumb = () => (
  <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
    <Link to="/" className="text-[#7A7687]">
      Главная
    </Link>
    <span className="text-[#7A7687]">
      <MdChevronRight />
    </span>
    <NavLink to="/uslugi" className="">
      Услуги
    </NavLink>
  </div>
);

const ServiceCard = ({ data }) => (
  <div className="flex justify-between border rounded-xl bg-white">
    <div className="flex flex-col pt-[10px] p-5">
      <h4 className="flex justify-between text-[18px] font-semibold text-[#202020] py-4">
        {data.title}
      </h4>
      <span className="flex justify-between text-[14px] text-[#7A7687]">
        {data.subtitle}
      </span>
      <p className="flex justify-between text-[16px] text-[#7A7687] font-medium">
        {data.desc}
      </p>
      <button className="mt-20 border rounded-full p-2 w-[40%] text-[16px] text-[#088269] font-semiboold">
        Заказать
      </button>
    </div>
    <img src={data.image} alt={data.title} />
  </div>
);

const CallToAction = () => (
  <div className="container flex justify-between py-10">
    <div className="w-[50%]">
      <h2 className="text-[30px] font-semibold">
        Вы сможете <NavLink className="text-[#088269]">оставить заявку</NavLink>{' '}
        на услуги и скачать бланк для заполнения
      </h2>
    </div>
    <div className="flex flex-col items-center">
      <div className="flex justify-between items-center">
        <button className="p-4 text-[16px] font-medium border rounded-xl">
          Бланк для заполнения
        </button>
        <button className="p-4 text-[16px] font-medium border rounded-xl">
          Заполненная форма
        </button>
      </div>
      <button className="my-5 p-4 text-[16px] font-medium border rounded-xl bg-[#088269] text-white">
        Оставить заявку
      </button>
    </div>

  </div>
);

export default Services;
