import React from 'react';
import Symbol1 from '../../../public/assets/delivery/symbol1.svg';
import Symbol2 from '../../../public/assets/delivery/symbol2.svg';
import Symbol3 from '../../../public/assets/delivery/symbol3.svg';
import Symbol4 from '../../../public/assets/delivery/symbol4.svg';

const ConvenientInformation = () => {
  const symbols = [
    {
      id: 1,
      src: Symbol1,
      alt: 'Symbol 1',
      text: 'Собственный склад с продукцией',
    },
    { id: 2, src: Symbol2, alt: 'Symbol 2', text: 'Доставка по всей России' },
    { id: 3, src: Symbol3, alt: 'Symbol 3', text: 'Весь товар сертифицирован' },
    { id: 4, src: Symbol4, alt: 'Symbol 4', text: 'Безопасные способы оплаты' },
  ];

  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:px-5 lg:px-4">
      <h1 className="text-xl lg:text-3xl font-medium mb-6 lg:mb-10">
        С нами выгодно и удобно
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {symbols.map((symbol) => (
          <div
            key={symbol.id}
            className="flex flex-col items-center justify-center rounded-lg border border-[#E5E2EE] h-40 md:h-48 lg:h-80"
          >
            <img
              className="mb-3 md:mb-4 h-9 md:h-11 lg:h-16"
              src={symbol.src}
              alt={symbol.alt}
            />
            <p className="text-xs md:text-sm lg:text-base font-medium text-center">
              {symbol.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConvenientInformation;
