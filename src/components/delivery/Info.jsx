import React from 'react';

const DeliveryInformation = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:px-5 lg:px-4">
      <h1 className="text-5xl lg:text-6xl font-medium mb-7 lg:mb-10">
        Информация о доставке
      </h1>
      <div className="relative mb-10 lg:mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.384365119842!2d69.17516795541992!3d41.29045400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b007e2ac277%3A0x83fc525ce72adbfb!2sComplex%20Med%20Center!5e0!3m2!1sru!2s!4v1719655233089!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" rounded-lg w-full h-64 md:h-80 lg:h-96 "
        ></iframe>
        <button className="absolute bottom-4 right-4 lg:bottom-5 lg:right-5 bg-green-600 rounded-full px-5 py-2 text-sm md:px-8 md:py-3 lg:px-10 lg:py-4 text-white font-semibold">
          Пункт выдачи
        </button>
      </div>
      <div className="flex justify-end">
        <p className="w-5/6 text-sm lg:w-1/2 lg:text-base leading-relaxed font-medium">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов в различных направлениях, от установок
          компьютерной томографии до ультразвуковых сканеров и ЛОР комбайнов.
          Переход на полностью цифровую платформу при диагностике и лечении
          заболеваний также стал серьёзным испытанием для большинства больниц и
          частных клиник.
        </p>
      </div>
    </div>
  );
};

export default DeliveryInformation;
