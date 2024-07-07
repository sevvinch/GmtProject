import React from 'react'

const RulesItem = ({ number, description }) => (
  <li className="mb-5  border-b border-[#D5D1E1] pb-[10px] lg:pb-5">
    <span className="w-1/2 text-[18px] font-semibold leading-normal  lg:text-[18px] lg:leading-[110%]">
      {number}
    </span>
    <br />
    <span className="w-1/2 text-[16px]  text-[#7A7687] font-medium leading-[118%] md:text-[34px] md:text-sm lg:text-[16px] lg:leading-[140%]">
      {description}
    </span>
  </li>
);

const Rules = () => {
  const facts = [
    {
      number: 'Подготовить документы',
      description:
        'Предварительно ознакомиться с условиями выдачи грузов на сайте и подготовьте нужные документы',
    },
    {
      number: 'Проверка упаковки',
      description:
        'При получении необходимо внимательно осмотреть упаковку груза на наличие механических повреждений и нарушений целостности упаковки',
    },
    {
      number: 'Проверка товара',
      description:
        'Вскрыть каждую упаковку и проверите товар по количеству согласно накладной поставщика и на наличие повреждений товара внутри тары',
    },
  ];

  return (
    <div className="block justify-between lg:flex">
      <div className="mb-7 md:w-7/12 lg:mb-0 lg:w-1/3">
        <h1 className=" text-[#202020] mb-[25px] text-lg font-medium md:mb-5 md:text-xl lg:mb-6 lg:text-[30px] lg:leading-[120%]">
          Правила получения товара в пункте выдачи
        </h1>
        <p className=" text-[#202020] mb-8 text-[16px] font-medium leading-[140%] opacity-50 md:text-sm lg:text-[16px] lg:leading-[140%]">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов.
        </p>
      </div>
      <div className="md:w-7/12 lg:w-1/2">
        <ul>
          {facts.map((fact, index) => (
            <RulesItem
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

export default Rules