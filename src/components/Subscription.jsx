import React from 'react';
// import FooterBottom from '../footer/Footer';
import EmailImg from './../../public/assets/footer/emailImg.svg';

const Subscription = () => {
  return (
    <>
      <div className=" mt-20 bg-[#E5E4ED]">
        <div className="container flex items-center max-md:flex-col justify-between pr-40 bg-transparent">
          <div className=" bg-transparent">
            <img src={EmailImg} alt="" />
          </div>
          <div className=" bg-transparent">
            <h1 className="text-[30px] mb-3 bg-transparent">
              Подпишитесь и будьте в курсе!
            </h1>
            <p className="text-[#7A7687] mb-3 bg-transparent">
              Акции, скидки, распродажи ждут!
            </p>
            <div className=" bg-white mb-6 rounded-3xl justify-between border flex  items-center">
              <input
                id="input"
                type="text"
                placeholder="Введите email"
                className="bg-transparent px-5 w-full outline-none"
              />
              <button className="px-7 py-3 bg-[#088269] rounded-3xl text-[#F8F7F3] font-bold text-[14px]">
                Подписаться
              </button>
            </div>
            <div className="flex items-center  gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <span className="bg-transparent">
                Я даю согласие на обработку своих персональных данных.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
