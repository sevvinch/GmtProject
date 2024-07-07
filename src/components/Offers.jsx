import React from 'react';
import OffersImg1 from './../../public/assets/offers/Img1.svg';
import OffersImg2 from './../../public/assets/offers/Img2.png';
import OffersImg3 from './../../public/assets/offers/Img3.png';
import OffersImg4 from './../../public/assets/offers/Img4.png';

const Offers = () => {
  return (
    <div className="mb-[100px]">
      <div className="container ">
        <div className="">
          <h2 className=" text-[#202020] text-[30px]  font-medium   mb-[40px]">
            Почему выбирают нас?
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className=" w-[320px] h-[320px] border border-[#E5E2EE] rounded-md p-8 flex flex-col items-center justify-center">
              <img
                src={OffersImg1}
                alt=""
                className=" w-[36px] h-[75px] mb-4"
              />
              <p className="text-16px font-medium text-center">
                Быстрая доставка
              </p>
            </div>
            <div className="w-[320px] h-[320px] border border-[#E5E2EE] rounded-md p-8 flex flex-col items-center justify-center">
              <img src={OffersImg2} alt="" className="w-[65px] h-[73px] mb-4" />
              <p className="text-16px font-medium text-center">
                Весь товар сертифицирован
              </p>
            </div>
            <div className="w-[320px] h-[320px] border border-[#E5E2EE] rounded-md p-8 flex flex-col items-center justify-center">
              <img src={OffersImg3} alt="" className="w-[62px] h-[55px] mb-4" />
              <p className="text-16px font-medium text-center">
                Гибкая система скидок
              </p>
            </div>
            <div className="w-[320px] h-[320px] border border-[#E5E2EE] rounded-md p-8 flex flex-col items-center justify-center">
              <img src={OffersImg4} alt="" className="w-[32px] h-[57px] mb-4" />
              <p className="text-16px font-medium text-center">Лет на рынке</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
