import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FiPlus } from 'react-icons/fi';

const CargoDocuments = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const documents = [
    {
      title: 'Юридические лица',
      content:
        'Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
    },
    {
      title: 'Индивидуальные предприниматели',
      content:
        'Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
    },
    {
      title: 'Физические лица',
      content:
        'Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.',
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto max-w-screen-xl px-4 py-12 lg:py-24">
        <div className="md:flex md:justify-between">
          <div className="md:w-2/3 lg:w-2/5 md:pr-10">
            <h3 className="text-2xl lg:text-3xl font-medium mb-4 lg:mb-6">
              Документы, необходимые для получения груза
            </h3>
            <p className="text-sm lg:text-base">
              По копиям доверенностей и доверенностям с незаполненными
              обязательными реквизитами отгрузка не производится
            </p>
          </div>
          <div className="mt-8 md:mt-0 md:w-4/5 lg:w-3/5">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="border-t border-gray-300 transition duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full py-4 focus:outline-none md:py-6"
                >
                  <span className="text-lg font-semibold">{doc.title}</span>
                  <span className="flex items-center justify-center h-8 w-8 rounded-full border transition duration-300 ease-in-out">
                    {activeIndex === index ? (
                      <AiOutlineClose className="text-white" />
                    ) : (
                      <FiPlus className="text-black" />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="transition duration-300 ease-in-out">
                    <p className="pb-5 text-sm opacity-80 md:text-base">
                      {doc.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CargoDocuments;
