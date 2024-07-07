import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

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
  'Стерилизация',
  'Физиотерапия и реабилитация',
  'Функциональная диагностика',
  'Новинки',
  'Распродажи',
  'Кабинеты под ключ',
];

const items = [
  {
    src: './../../public/assets/catalog/Img8.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img2.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img3.png',
    text: 'Дерматологическое оборудование',
    span: true,
  },
  {
    src: './../../public/assets/catalog/Img4.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img5.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img6.png',
    text: 'Дерматологическое оборудование',
    span: true,
  },
  {
    src: './../../public/assets/catalog/Img7.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img8.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img9.png',
    text: 'Дерматологическое оборудование',
  },
  {
    src: './../../public/assets/catalog/Img10.png',
    text: 'Дерматологическое оборудование',
  },

];

const CatalogCategories = () => {
  return (
    <div className="container grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <div className="hidden lg:block border border-[#E5E2EE] p-[15px] rounded-[10px] h-max ">
        <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b border-[#E5E2EE]">
          Направления
        </p>
        <ul className="rounded-[5px] flex flex-col gap-2 w-auto">
          {categories.map((category, index) => (
            <Link key={index}>
              <li className="flex justify-between items-center text-[14px] duration-200  hover:text-[] ">
                {category}
                <IoIosArrowDown className="rotate-[-90deg] w-[17px] h-[17px]" />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] mb-[25px] ">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border border-[#E5E2EE] rounded-[10px] overflow-hidden ${item.span ? 'row-[span_2]' : 'h-[154px] sm:h-[216px] lg:h-[304px]'}`}
          >
            <div
              className={`bg-white ${item.span ? 'h-[272px] sm:h-[378px] lg:h-[534px]' : 'h-[109px] sm:h-[148px] lg:h-[220px]'}`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t">
              <p className="text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogCategories;
