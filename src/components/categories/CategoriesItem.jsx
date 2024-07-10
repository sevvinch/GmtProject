import React, { useEffect, useState } from 'react';
import { countries, menuItems } from '../../data/categories';
import { VscSettings } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import { FaSearch } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrAppsRounded } from 'react-icons/gr';
import Card from '../Card';
import { myData } from '../../data/categories';
import {
  Collapse,
  Slider,
  TextField,
  Typography,
  Pagination,
  Stack,
} from '@mui/material';
  // import { useState } from 'react';
  // import { Pagination, Stack } from '@mui/material';

const CategoriesItem = () => {
  const itemsPerPage = 9;
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('Направления');
  const [active, setAvtive] = useState(false);
  const [price, setPrice] = useState([20000, 950000]);


const PaginationComponent = ({ items, itemsPerPage, renderItems }) => {
  
  
  
  const [page, setPage] = useState(1);

  // Calculate the start and end indices for the current page
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentItems = items.slice(startIndex, endIndex);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  // Total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  
  return (
    <>
      <div>
        {renderItems(currentItems)}
      </div>

      <div className="flex mt-[30px] justify-center">
        <Stack spacing={2} direction="row" alignItems="center">
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChangePage}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            sx={{
              '& .MuiPaginationItem-root': {
                bgcolor: 'white',
                color: 'black',
                '&:hover': {
                  bgcolor: '#088269',
                  color: 'white',
                },
                '&.Mui-selected': {
                  bgcolor: '#088269',
                  color: 'white',
                },
              },
            }}
          />
        </Stack>
      </div>
    </>
  );
};



  const handlePlace = () => {
    if (show && active) {
      return { top: '1150px' };
    } else if (show) {
      return { top: '540px' };
    } else if (active) {
      return { top: '730px' };
    } else {
      return { top: '120px' };
    }
  };

  const [sortData, setSortData] = useState(myData);
  const [sortValue, setSortValue] = useState('');

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
  };

  useEffect(() => {
    let filteredData = myData.filter(
      (item) => item.price >= price[0] && item.price <= price[1],
    );

    let sortedData = [...filteredData];
    if (sortValue === 'price') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'name') {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'date') {
      sortedData = myData.filter((item) => item.status === 'Новинка');
    }
    setSortData(sortedData);
  }, [sortValue]);

  const handlePriceChange = (event, newPrice) => {
    setPrice(newPrice);
  };

  const renderDuscount = (currentItems) => (
    <div className="grid grid-cols-2 lg:grid-cols-3  gap-[10px] ">
      {currentItems.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );

  return (
    <>
      <div className=" container flex gap-[5px] items-center overflow-x-scroll mt-[20px] mb-[25px] ">
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#D5D1E1] py-[11px] px-[31px] hover:border-[--pri] hover:text-[#088269] duration-200 ">
          Дерматологическое оборудование
        </button>
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#D5D1E1] py-[11px] px-[31px] hover:border-[--pri] hover:text-[#088269] duration-200 ">
          Ветеринарное оборудование
        </button>
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#D5D1E1] py-[11px] px-[31px] hover:border-[--pri] hover:text-[#088269] duration-200 ">
          Мебель медицинская
        </button>
        <button className="whitespace-nowrap text-[12px] lg:text-[14px] bg-white rounded-full border border-[#D5D1E1] py-[11px] px-[31px] hover:border-[--pri] hover:text-[#088269] duration-200 ">
          Ветеринарное оборудование
        </button>
        <button className="text-[12px]  px-[10px] py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
          Показать больше
        </button>
      </div>

      <div className="mt-[20px] container custom-margin grid grid-cols-1 md:grid-cols-[1fr_3fr] justify-between gap-[10px] ">
        <div className=" relative">
          <div
            onClick={() => setShow((prev) => !prev)}
            className={`relative text-center cursor-pointer gap-1 flex justify-center  md:justify-between  border border-[#D5D1E1] py-[15px] px-[20px] rounded-[10px] `}
          >
            <VscSettings className="w-5 h-5 md:hidden " />
            <p className="text-[#202020] text-[14px] font-medium leading-[118%]">
              {' '}
              {value}{' '}
            </p>
            <IoIosArrowDown
              className={`${show ? ' rotate-180' : ' '} w-5 h-5 duration-200 hidden md:block `}
            />

            <div
              className={` ${
                show ? 'flex' : 'hidden'
              } flex-col z-10 gap-3 absolute w-full border border-[#D5D1E1] rounded-[10px] p-[15px] bg-[#F8F7F3] top-[60px] right-0 `}
            >
              {menuItems.map((val, index) => (
                <div
                  key={val}
                  onClick={() => setValue(val)}
                  className={`text-[12px] flex justify-between items-center hover:text-[#088269] duration-200 hover:underline hover:scale-105 `}
                >
                  {val}
                  <IoIosArrowDown
                    className={` rotate-[-90deg] w-[17px] h-[17px]  `}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className={` ${
              show ? ' top-[470px] ' : null
            } hidden md:block absolute z-10 w-full mt-[10px] border border-[#D5D1E1] py-[15px] px-[20px] rounded-[10px] bg-[#F8F7F3]  `}
          >
            <div>
              <div
                onClick={() => setAvtive((prev) => !prev)}
                className="flex justify-center  md:justify-between gap-1 cursor-pointer "
              >
                <VscSettings className="w-5 h-5 md:hidden " />
                <p className="text-[#202020] text-[14px] font-medium leading-[118%]">
                  Фильтр по товарам
                </p>
                <IoIosArrowDown
                  className={`${
                    active ? ' rotate-180' : ' '
                  } w-5 h-5 duration-200 hidden md:block `}
                />
              </div>

              <div
                className={` ${active ? 'block' : 'hidden'} text-[12px] lg:text-[14px] mt-[20px] `}
              >
                <Collapse in={true}>
                  <Typography
                    variant="subtitle1"
                    className="text-[12px] lg:text-[14px] pb-[12px] "
                  >
                    Цена
                  </Typography>
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <TextField
                      label="От:"
                      size="small"
                      value={price[0]}
                      variant="standard"
                    />
                    <TextField
                      label="До:"
                      size="small"
                      value={price[1]}
                      variant="standard"
                    />
                  </div>
                  <Slider
                    value={price}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    min={20000}
                    max={950000}
                    style={{ marginBottom: '20px', color: '#088269' }}
                  />
                </Collapse>
              </div>

              <p
                className={` ${active ? 'block' : 'hidden'} text-[12px] lg:text-[14px] mt-[20px] `}
              >
                Страна
              </p>
              <div className={` ${active ? 'block' : 'hidden'} `}>
                <label className="mt-[15px] mb-[12px] bg-white text-[14px] flex justify-between items-center gap-1 border border-[#D5D1E1] rounded-full px-[20px] py-[10px]   ">
                  <input
                    type="text"
                    className="w-full outline-none"
                    placeholder="Поиск по стране"
                  />
                  <FaSearch className="text-[--text] " />
                </label>

                <div className="flex flex-col gap-2 ">
                  {countries.map((country, index) => (
                    <label
                      key={index}
                      htmlFor={country.id}
                      className="flex items-center gap-[10px] "
                    >
                      <input
                        type="checkbox"
                        name={country.id}
                        id={country.id}
                        className=" accent-[--pri] "
                      />
                      {country.title}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div
              className={` ${active ? 'flex' : 'hidden'} flex-col gap-[15px] mt-[25px] `}
            >
              <select
                className=" outline-none w-full bg-inherit"
                name="brend"
                id="brend"
              >
                <option hidden>Состояние</option>
                <option value="">Новый</option>
                <option value="">Демонстрационный</option>
              </select>
              <select
                className=" outline-none w-full bg-inherit"
                name="brend"
                id="brend"
              >
                <option hidden>Назначение</option>
                <option value="">Назначение</option>
                <option value="">Назначение</option>
              </select>
              <select
                className=" outline-none w-full bg-inherit"
                name="brend"
                id="brend"
              >
                <option hidden>Комплектация</option>
                <option value="">Комплектация</option>
                <option value="">Комплектация</option>
              </select>
            </div>
          </div>
          <div
            style={handlePlace()}
            className={` absolute left-0  gap-[10px] items-center hidden md:flex `}
          >
            <button className="text-[12px]  px-[10px] py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[#D5D1E1] text-[#088269] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
              Сбросить
            </button>
            <button className="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
              Показать
            </button>
          </div>
        </div>

        <div>
          <div className="flex justify-between px-[20px] py-3 border border-[#D5D1E1] rounded-[10px] mb-[10px] ">
            <select
              onChange={handleSortChange}
              className="bg-transparent outline-none custom-text "
            >
              <option>По популярности</option>
              <option value="price">По цене</option>
              <option value="name">По наименованию</option>
              <option value="date">По новинкам</option>
            </select>

            <div className="flex gap-[31px] md:gap-[66px] lg:gap-[140px] items-center ">
              <select className="bg-transparent outline-none custom-text ">
                <option value="">Показать {myData.length} </option>
              </select>

              <div className="flex gap-[10px] items-center ">
                <RxHamburgerMenu />
                <GrAppsRounded className="text-[#088269] " />
              </div>
            </div>
          </div>
          <PaginationComponent
            items={sortData}
            itemsPerPage={itemsPerPage}
            renderItems={renderDuscount}
          />
        </div>
      </div>
    </>
  );
};

export default CategoriesItem;
