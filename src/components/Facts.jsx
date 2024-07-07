import React from 'react';

const FactItem = ({ number, description }) => (
  <li className="mb-5 flex items-center border-b border-[#D5D1E1] pb-[10px] lg:pb-5">
    <span className="w-1/2 text-[48px] font-medium leading-[110%] text-[#088269] lg:text-5xl lg:leading-[110%]">
      {number}
    </span>
    <span className="w-1/2 text-[16px] font-medium leading-[118%] md:text-[34px] md:text-sm lg:text-[16px] lg:leading-[140%]">
      {description}
    </span>
  </li>
);

const Facts = () => {
  const facts = [
    { number: '7 лет', description: 'на рынке' },
    { number: '964+', description: 'оригинальной продукции со всего мира' },
    { number: '23+', description: 'международных сертификатов качества' },
    { number: '2452+', description: 'товаров всегда в наличии' },
  ];

  return (
    <div className="block justify-between lg:flex">
      <div className="mb-7 md:w-7/12 lg:mb-0 lg:w-1/3">
        <h1 className=" text-[#202020] mb-[25px] text-lg font-medium md:mb-5 md:text-xl lg:mb-6 lg:text-[30px] lg:leading-[120%]">
          Цифры и факты
        </h1>
        <p className=" text-[#202020] mb-8 text-[16px] font-medium leading-[140%] opacity-50 md:text-sm lg:text-[16px] lg:leading-[140%]">
          Мы работаем на результат и продаём только качественную продукцию
        </p>
      </div>
      <div className="md:w-7/12 lg:w-1/2">
        <ul>
          {facts.map((fact, index) => (
            <FactItem
              key={index}
              number={fact.number}
              description={fact.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Facts;
