import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Data from './../data/brands';

const Brands = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const displayedData = useMemo(() => {
    const slicedData = Data.slice(startIndex, startIndex + 3);
    if (slicedData.length < 3) {
      return [...slicedData, ...Data.slice(0, 3 - slicedData.length)];
    }
    return slicedData;
  }, [startIndex, Data]);

  return (
    <div className="container bg-[#F8F7F3]">
      <div className="py-[100px]">
        <div className="flex justify-between">
          <div className="">
            <h2 className=" text-[30px] font-medium">Бренды</h2>
            <p className=" mt-[20px] text-[16px] font-normal text-[#7A7687]">
              Эксклюзивные поставщики
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2">
              {displayedData.map((data, index) => (
                <div key={index} className="border rounded-xl w-[300px]">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="w-full h-[200px] object-contain rounded-t-xl bg-white p-10"
                  />
                  <div className="p-4">
                    <h3 className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020]">
                      {data.title}
                    </h3>
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
                <NavLink to="/about/Sertificats">
                  <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-semibold text-[16px] text-white bg-[#088269] border-none">
                    Сертификаты
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
