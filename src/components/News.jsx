import { useState, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import Data from './../data/news';

const News = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % Data.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + Data.length) % Data.length);
  };

  const displayedData = useMemo(() => {
    const endIndex = startIndex + 3;
    if (endIndex <= Data.length) {
      return Data.slice(startIndex, endIndex);
    } else {
      return [
        ...Data.slice(startIndex),
        ...Data.slice(0, endIndex % Data.length),
      ];
    }
  }, [startIndex, Data]);

  return (
    <div className=" mb-[150px]">
      <div className="container">
        <div className="flex justify-between">
          <div className="">
            <h2 className=" text-[30px] font-medium">Новости компании</h2>
          </div>

          <div>
            <div className="flex items-center gap-2">
              {displayedData.map((data, index) => (
                <div key={index} className="border rounded-xl w-[300px]">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="w-full h-[300px] object-cover rounded-t-xl"
                  />
                  <div className="p-5">
                    <span className="block text-[#7A7687] text-[12px] font-normal mb-2">
                      {data.time}
                    </span>
                    <h3 className="text-[18px] font-semibold mb-2">
                      {data.title}
                    </h3>
                    <p className="text-[16px] font-medium text-[#7A7687]">
                      {data.desc}
                    </p>
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

              <div className="mr-[100px] flex justify-items-end">
                <NavLink to="/informatsioniy-statya">
                  <button className="transition duration-300 flex justify-center items-center px-6 py-[11px] rounded-full font-manrope font-semibold text-[16px] text-white bg-[#088269] border-none">
                    Все новости
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

export default News;
