import Img1 from './../../public/assets/about/Img2.png';
import Img2 from './../../public/assets/about/Img3.png';
import Img3 from './../../public/assets/about/Img4.png';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import { useState } from 'react';

const Doctors = () => {
  const images = [
    {
      src: Img1,
      alt: 'specialist-by-medicine',
      personName: 'Константин Константинопольский',
      position: 'Основатель компании',
    },
    {
      src: Img2,
      alt: 'specialist-by-medicine',
      personName: 'Константин Константинопольский',
      position: 'Основатель компании',
    },
    {
      src: Img3,
      alt: 'specialist-by-medicine',
      personName: 'Константин Константинопольский',
      position: 'Основатель компании',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const displayedImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];
  return (
    <div>
      <div className="bg-[#F8F7F3]">
        <div className="py-20 container flex justify-between">
          <div className="w-[50%]">
            <h3 className="text-[30px] font-medium pb-10">
              Опытные сотрудники из производственных компаний
            </h3>
            <p className="text-[16px] text-[#202020] font-medium pb-10">
              Наши сотрудники имеют огромный опыт работы в сложных условиях,
              в том числе в разгар пандемии COVID–19. В этот период
              мы осуществили поставки медицинских аппаратов в новейшие клиники
              Минобороны в различных регионах страны.
            </p>
          </div>

          <div className=" w-[50%]">
            <div className="w-full h-[430px] grid grid-cols-2 gap-4 ">
              {displayedImages.map((image, index) => (
                <div
                  key={index}
                  className={` border border-[#E5E2EE] rounded-lg ${
                    index === 0 ? 'row-span-2' : ''
                  } relative`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full  rounded-lg"
                  />
                  {index === 0 && (
                    <div className="absolute bottom-0 left-0 bg-[#F8F7F3] w-full h-[25%] py-2 px-4">
                      <h4 className="text-[#088269] text-[20px] font-medium">
                        {image.personName}
                      </h4>
                      <p className="text-[#202020] text-[16px]">
                        {image.position}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="w-[30%] flex  gap-3 mt-[150px]">
              <button
                onClick={handlePrev}
                className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
              >
                <GoArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-[10px] border border-[#D5D1E1] rounded-full cursor-pointer"
              >
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
