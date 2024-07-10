import React from 'react';
import { MdNavigateNext } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/Footer'
import Formm from '../components/Formm'

const Payment = () => {
  const paymentMethods = [
    {
      title: 'Оплата наличными',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
    {
      title: 'Безналичный расчет',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
    {
      title: 'Оплата банковской картой',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
  ];

  const refundMethods = [
    {
      title: 'При оплате наличными',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
    {
      title: 'При оплате банковской картой',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
  ];

  const deliveryConditions = [
    {
      title: 'Лизинг',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
    {
      title: 'Рассрочка',
      items: [
        'Тяжелая как постоянное обеспечение нашей деятельности',
        'Требует от нас анализа',
        'Управление процессами обмена',
        'Равным образом способствует подготовке и реализации',
      ],
    },
  ];

  const renderList = (data) =>
    data.map((method, index) => (
      <div key={index} className="bg-white p-5 rounded-lg">
        <h2 className="text-xl mb-2">{method.title}</h2>
        <ol className="list-decimal list-inside text-gray-600">
          {method.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </div>
    ));

  return (
    <div className="">
      <Header/>
      <div className="container mx-auto p-5">
        <div>
          <p className="flex items-center mt-5 gap-3">
            <Link to="/" className="text-gray-500">
              Главная
            </Link>
            <MdNavigateNext /> <span className="text-black">Оплата</span>
          </p>
        </div>

        <div className="mt-10 py-10 rounded-2xl px-4 md:px-8  ">
          <h1 className="text-3xl mb-4 font-bold">Оплата</h1>
          <p className="text-gray-700 mb-8 w-full md:w-1/2">
            Учитывая стремительное развитие цифровых медицинских технологий,
            цены в Российской Федерации могут сильно отличаться. Существующие
            временные и финансовые условия требуют от пациентов ясного понимания
            всех аспектов, связанных с платежами.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {renderList(paymentMethods)}
          </div>

          <h1 className="text-3xl mb-4 font-bold">
            Порядок возврата денежных средств
          </h1>
          <p className="text-gray-700 mb-8 w-full md:w-1/2">
            Учитывая стремительное развитие цифровых медицинских технологий,
            цены в Российской Федерации могут сильно отличаться. Существующие
            временные и финансовые условия требуют от пациентов ясного понимания
            всех аспектов, связанных с платежами.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {renderList(refundMethods)}
          </div>

          <h1 className="text-3xl mb-4 font-bold">Условия поставок</h1>
          <p className="text-gray-700 mb-8 w-full md:w-1/2">
            Учитывая стремительное развитие цифровых медицинских технологий,
            цены в Российской Федерации могут сильно отличаться. Существующие
            временные и финансовые условия требуют от пациентов ясного понимания
            всех аспектов, связанных с платежами.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {renderList(deliveryConditions)}
          </div>
        </div>
      </div>
      <Formm/>
      <Footer/>
    </div>
  );
};

export default Payment;
