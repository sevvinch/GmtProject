import Category1 from './../../public/assets/categories/Img1.png';
import Category2 from './../../public/assets/categories/Img2.png';
import Category3 from './../../public/assets/categories/Img7.png';
import Category4 from './../../public/assets/categories/Img4.png';
import Category5 from './../../public/assets/categories/Img5.png';
import Category6 from './../../public/assets/categories/Img6.png';
import Category7 from './../../public/assets/categories/Img3.png';

export const CategoryData = [
  { text: 'Дерматологическое оборудование', image: Category1, id: 1 },
  { text: 'Ветеринарное оборудование', image: Category2, id: 2 },
  { text: 'Дерматологическое оборудование', image: Category3, id: 3 },
  { text: 'Оборудование для анастезиологии', image: Category4, id: 4 },
  { text: 'Оборудование для анастезиологии', image: Category5, id: 5 },
  { text: 'Мебель для медецинских целей', image: Category6, id: 6 },
  { text: 'Дерматологическое оборудование', image: Category7, id: 7 },
];

import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const renderCategoryItem = (item, className, heightClass) => (
    <div
      key={item.id}
      className={`w-full flex-shrink-0 rounded-[10px] border border-[#E5E2EE] bg-[#F8F7F3] ${className}`}
    >
      <div
        className={`flex w-full items-center justify-center rounded-t-[10px] border-b border-[#E5E2EE] bg-white ${heightClass}`}
      >
        <img
          src={item.image}
          alt={item.text}
          className="rounded-t-[10px] object-cover"
        />
      </div>
      <div className="px-4 py-4 lg:px-6 lg:py-5">
        <p className="font-medium md:text-sm md:leading-[118%] lg:text-[16px] lg:leading-[140%]">
          {item.text}
        </p>
      </div>
    </div>
  );

  return (
    <div className="mb-[150px]">
      <div className="container md:px-5 lg:px-4 ">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-lg font-medium leading-[120%] md:text-xl lg:text-[30px]">
            Популярные категории
          </h2>
          <Link to="/catalog">
            <button className="rounded-[50px] bg-[#088269] px-5 py-2 text-[#F8F7F3] outline-none transition duration-300 ease-in-out hover:bg-[#07745E] focus:outline-none md:text-[12px] lg:px-[30px] lg:py-[11px] lg:text-sm">
              Все категории
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-[10px] md:grid-cols-3 lg:grid-cols-4">
          <div className="grid grid-rows-2 gap-[10px]">
            {CategoryData.slice(0, 2).map((item) =>
              renderCategoryItem(item, '', 'lg:h-[220px]'),
            )}
          </div>
          <div className="grid grid-rows-1">
            {CategoryData.slice(2, 3).map((item) =>
              renderCategoryItem(item, '', 'h-[515px]'),
            )}
          </div>
          <div className="grid grid-rows-2 gap-[10px]">
            {CategoryData.slice(3, 5).map((item) =>
              renderCategoryItem(item, '', 'lg:h-[220px]'),
            )}
          </div>
          <div className="gap-[10px] md:flex lg:grid lg:grid-rows-2">
            {CategoryData.slice(5, 7).map((item) =>
              renderCategoryItem(item, '', 'lg:h-[220px]'),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
