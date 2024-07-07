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

const CategoriesList = () => {
  return (
    <div className="hidden lg:block border border-[--border] p-[15px] rounded-[10px] h-max ">
      <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">
        Направления
      </p>
      <ul className="rounded-[5px] flex flex-col gap-2 w-auto">
        {categories.map((category, index) => (
          <Link key={index}>
            <li className="flex justify-between items-center text-[14px] text-[--second] hover:text-[--pri] duration-200 hover:underline hover:scale-105 ">
              {category}
              <IoIosArrowDown className="rotate-[-90deg] w-[17px] h-[17px]" />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
