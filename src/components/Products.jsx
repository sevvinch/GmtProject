import { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { IoHeartOutline, IoStatsChartOutline } from 'react-icons/io5';
import Data from './../data/products';

const Products = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const getDisplayedData = () => {
    const endIndex = startIndex + 3;
    return endIndex > Data.length
      ? [
          ...Data.slice(startIndex, Data.length),
          ...Data.slice(0, endIndex - Data.length),
        ]
      : Data.slice(startIndex, endIndex);
  };

  const displayedData = getDisplayedData();

  return (
    <div className="container bg-[#F8F7F3]">
      <div className="py-[100px]">
        <div className="flex justify-between">
          <div className="container">
            <h2 className="text-[#202020] text-[30px] font-medium leading-[120%]  mb-10">
              Каталог товаров
            </h2>
            <div className="text-[16px] font-medium leading-[140%]  mb-[10px] flex flex-col items-start">
              {['Хиты продаж', 'Новинки', 'Акции'].map((category, index) => (
                <button
                  key={index}
                  className="mb-[10px] text-[#7A7687] active:text-[#088269] text-[16px] font-medium active:border-b-[#088269] active:border-b-2"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              {displayedData.map((item, index) => (
                <div
                  key={index}
                  className="relative border rounded-xl w-[300px]"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <IoHeartOutline className="text-[#202020] cursor-pointer w-[25px] h-[25px]" />
                    <IoStatsChartOutline className="text-[#202020] cursor-pointer w-[25px] h-[25px]" />
                  </div>
                  <div className="p-4">
                    <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                      {item.name}
                    </h3>
                    <div className="py-4">
                      <span className="block text-[#7A7687] text-[14px] font-normal">
                        {item.desc}
                      </span>
                      <p className="text-[16px] font-normal text-[#7A7687]">
                        {item.status}
                      </p>
                    </div>
                    <p className="text-[16px] font-medium text-[#202020]">
                      {item.price}
                    </p>
                  </div>
                  <div className="p-4">
                    <button className="w-full transition duration-300 flex justify-center items-center px-4 py-[8px] rounded-full font-semibold text-[16px] text-[#088269] border border-[#D5D1E1]">
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-[40px]">
              <div className="flex items-center gap-3">
                <div
                  onClick={handlePrev}
                  className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
                >
                  <GoArrowLeft />
                </div>
                <div
                  onClick={handleNext}
                  className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
                >
                  <GoArrowRight />
                </div>
              </div>
              <div className="mr-[100px] flex gap-4 justify-items-end">
                <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-[#088269] border border-[#D5D1E1]">
                  Бесплатная консультация
                </button>
                <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-white bg-[#088269] border-none">
                  Все товары
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
