import React from 'react';
import MainImg from '../../../public/assets/about/Imgmain.png';
import Facts from '../Facts';

const AboutInfo = () => {
  const paragraphs = [
    'Учитывая стремительное развитие мировых медицинских технологий, врачи в Российской Федерации и соседних странах столкнулись с вызовом, требующим обновления приборов в различных направлениях, от установок компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов. Переход на полностью цифровую платформу при диагностике и лечении заболеваний также стал серьёзным испытанием для большинства больниц и частных клиник.',
    'Компания ООО «Глобал Медикал Трейд» считает своим долгом оказать специалистам всю необходимую помощь в деле поставок медицинского оборудования. Наш каталог включает передовое оборудование от лучших производителей России, Европы, Азии и США.',
  ];

  return (
    <div className="container px-4 md:px-5 lg:px-4">
      <div>
        <div className="mb-[25px] lg:mb-10">
          <img
            className="h-[208px] w-full md:h-[264px] lg:h-[456px]"
            src={MainImg}
            alt="Main Img"
          />
        </div>
        <div className="mb-[60px] md:mb-[120px] lg:mb-[150px] lg:flex">
          <h1 className="mb-5 text-[28px] font-medium leading-[105%] sm:w-1/2 md:text-[34px] md:leading-[110%] lg:mb-0 lg:text-5xl">
            Глобал медикал трейд
          </h1>
          <div className="lg:w-1/2">
            {paragraphs.map((text, index) => (
              <p
                key={index}
                className="mb-[10px] text-[12px] font-medium leading-[118%] md:text-sm lg:mb-4 lg:text-[16px] lg:leading-[140%]"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
        <Facts />
      </div>
    </div>
  );
};

export default AboutInfo;
