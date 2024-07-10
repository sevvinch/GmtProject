import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  return (
    <div className="hidden lg:block border border-[#D5D1E1] p-[15px] rounded-[10px] h-max ">
      <p className="text-[16px] font-medium pb-[15px] mb-[20px] border-b ">
        Направления
      </p>

      <ul className={`rounded-[5px]  flex flex-col gap-2 w-auto `}>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Реанимация
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Хирургия{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Офтальмология{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Лабораторная диагностика{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Акушерство{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Гинекология{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Гистология{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Косметология{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Оториноларингология{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Рентгенология и томография{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Рентгенология и томография{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Стерилизация{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Физиотерапия и реабилитация{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] mb-[7px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Функциональная диагностика{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Новинки{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Распродажи{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
        <Link to={'/kategoriya'}>
          <li className="flex justify-between items-center text-[14px] text-[ #202020] hover:text-[#088269] duration-200  ">
            Кабинеты под ключ{' '}
            <IoIosArrowDown
              className={` rotate-[-90deg] w-[17px] h-[17px]  `}
            />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default CategoryList;
