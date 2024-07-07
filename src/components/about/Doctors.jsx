import React, { useState } from 'react';
import { GrFormNextLink } from 'react-icons/gr';
import { IoMdArrowBack } from 'react-icons/io';

const Doctors = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: '../../../public/assets/about/Img2.png',
      title: 'Константин Константинопольский',
      subtitle: 'Основатель компании',
    },
    {
      src: '../../../public/assets/about/Img3.png',
      title: 'поставки медицинских',
      subtitle: 'аппаратов в новейшие клиники Минобороны в',
    },
    {
      src: '../../../public/assets/about/Img4.png',
      title: ' регионах страны.',
      subtitle: 'Наши сотрудники имеют огромный',
    },
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };
  return (
    <div>
      <div className="container">
        <div className="md:grid mt-20 md:grid-cols-2 md:gap-28">
          <div>
            <h2 className="md:text-[30px] mb-4">
              Опытные сотрудники из производственных компаний
            </h2>
            <p className=" max-sm:[12px]">
              Наши сотрудники имеют огромный опыт работы в сложных условиях, в
              том числе в разгар пандемии COVID–19. В этот период мы осуществили
              поставки медицинских аппаратов в новейшие клиники Минобороны в
              различных регионах страны.
            </p>
          </div>
          <div>
            <div className="flex h-96 justify-between">
              <div className="border overflow-hidden rounded-xl w-[60%]">
                <img
                  src={images[currentIndex].src}
                  alt="img"
                  className="w-full h-[75%] object-cover"
                />
                {images[currentIndex].title && (
                  <div className="p-5">
                    <h4>{images[currentIndex].title}</h4>
                    <p className="text-[14px] text-[#7A7687]">
                      {images[currentIndex].subtitle}
                    </p>
                  </div>
                )}
              </div>
              <div className="w-[37%] flex flex-col justify-between">
                <img
                  src={images[(currentIndex + 1) % images.length].src}
                  alt="img"
                  className="mb-2 h-[47%] object-cover rounded-xl"
                />
                <img
                  src={images[(currentIndex + 2) % images.length].src}
                  alt="img"
                  className="h-[47%] object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="flex mt-5 gap-4 px-4 ">
              <div
                className="p-2 cursor-pointer border rounded-full bg-white"
                onClick={prevImage}
              >
                <IoMdArrowBack className="bg-white" />
              </div>
              <div
                className="p-2 cursor-pointer border rounded-full bg-white"
                onClick={nextImage}
              >
                <GrFormNextLink className="bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
