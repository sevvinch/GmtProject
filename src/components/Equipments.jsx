import { useState } from 'react';
import Img1 from './../../public/assets/equipments/Img1.png';
import Img2 from './../../public/assets/equipments/Img2.png';
import Img3 from './../../public/assets/equipments/Img3.png';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

const Cabinet = () => {
  const images = [
    { src: Img1, alt: 'Экспресс лаборатория' },
    { src: Img2, alt: 'Лазерная терапия' },
    { src: Img3, alt: 'Операционный блок' },
    { src: Img1, alt: 'Экспресс лаборатория' },
    { src: Img2, alt: 'Лазерная терапия' },
    { src: Img3, alt: 'Операционный блок' },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % (images.length - 2));
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) =>
        (prevIndex - 1 + (images.length - 2)) % (images.length - 2),
    );
  };

  const displayedImages = images.slice(startIndex, startIndex + 3);

  return (
    <div className=" pt-8 mb-[150px]">
      <div className="container ">
        <h2 className="text-2xl font-medium">
          Комплексное оснащение кабинетов
        </h2>
        <div className="flex justify-between items-start gap-5 py-11">
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden w-[425px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[517px] object-cover"
              />
              <p className="py-5 px-5">{image.alt}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-2 gap-4">
          <div className="flex items-center gap-3">
            <div
              onClick={handlePrev}
              className="p-2.5 border border-[#D5D1E1] rounded-full cursor-pointer"
            >
              <GoArrowLeft />
            </div>
            <div
              onClick={handleNext}
              className="p-2.5 border border-[#D5D1E1] rounded-full cursor-pointer"
            >
              <GoArrowRight />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="border text-sm font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
              Бесплатная консультация
            </button>
            <button className="border text-sm font-semibold border-[#D5D1E1] text-[#088269] rounded-full bg-transparent py-2 px-4 hover:bg-[#088269] hover:text-white">
              Рассчитать стоимость
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;
