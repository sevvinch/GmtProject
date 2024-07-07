import React from 'react';
import PartnerImg from './../../../public/assets/about/Img1.png';

const PartnerSection = () => {
  const partnerTexts = [
    'Нашими партнёрами являются наиболее серьёзные игроки на мировом рынке профильного оборудования. Это позволяет нам наладить долгосрочное и успешное сотрудничество, добиться лучших цен для государственных учреждений здравоохранения, медицинских центров, лабораторий, а также ветеринарных клиник и кабинетов.',
    'Купить нужную вам технику по оптимальным ценам, выбрать подходящую модель устройства в рамках бюджета в нашей компании окажется намного проще. Мы поддерживаем скидки и особые предложения для наших партнёров, предлагаем оформление аппаратов в лизинг и готовы предоставить системы в рассрочку на выгодных условиях.',
  ];

  return (
    <div className="bg-[#088269]">
      <div className="px-4 py-12 md:px-5 lg:flex lg:gap-14 lg:px-4 lg:py-20">
        <div className="mb-6 w-full md:w-1/3 lg:mb-0 lg:w-1/2">
          <img className="w-full" src={PartnerImg} alt="Partner Section Img" />
        </div>
        <div className="md:w-3/4 lg:w-1/2">
          <h3 className="mb-[10px] text-lg font-medium leading-[120%] text-[#F8F7F3] md:mb-5 md:text-xl lg:mb-6 lg:text-3xl">
            Наши партнёры
          </h3>
          {partnerTexts.map((text, index) => (
            <p
              key={index}
              className="text-[12px] font-medium leading-[140%] text-[#F8F7F3] md:text-sm lg:text-[16px]"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
