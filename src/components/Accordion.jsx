import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from 'react-transition-group';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const defaultStyle = {
    transition: `all 300ms ease-in-out`,
    maxHeight: 0,
    overflow: 'hidden',
  };

  const transitionStyles = {
    entering: { maxHeight: '200px', opacity: 1 },
    entered: { maxHeight: '200px', opacity: 1 },
    exiting: { maxHeight: 0, opacity: 0 },
    exited: { maxHeight: 0, opacity: 0 },
  };

  return (
    <div className="bg-[#088269] mb-[150px]">
      <div className=" container py-14 lg:py-[100px]">
        <div className=" justify-between px-4 text-[#f8f7f3] sm:flex md:px-5 lg:">
          <div className="mb-10 text-lg font-medium leading-[120%] sm:mb-0 md:text-xl lg:text-[30px]">
            Информация о компании
          </div>
          <div className="w-full transition duration-700 ease-in-out sm:w-1/2">
            {[
              'О компании',
              'Преимущества сотрудников',
              'Достижения компании',
              'Карьерный рост',
            ].map((title, index) => (
              <div
                key={index}
                className="border-y border-[#f8f7f3] transition duration-300 ease-in-out"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between py-4 focus:outline-none lg:py-6"
                >
                  <span>{title}</span>
                  {activeIndex === index ? (
                    <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[40px] border border-[#F8F7F3] bg-white transition duration-300 ease-in-out lg:h-8 lg:w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M14.9487 14.9497L5.0492 5.05025M14.9487 5.05025L5.0492 14.9497"
                          stroke="#202020"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span className="flex h-[27px] w-[27px] items-center justify-center rounded-[40px] border border-[#F8F7F3] transition duration-300 ease-in-out lg:h-8 lg:w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10 3V17M3 10H17"
                          stroke="#F8F7F3"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  )}
                </button>
                <Transition in={activeIndex === index} timeout={300}>
                  {(state) => (
                    <div
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="transition duration-300 ease-in-out">
                        <p className="text-[12px] font-medium opacity-80 md:mb-8 md:text-sm md:leading-[118%] lg:mb-10 lg:text-[16px] lg:leading-[140%]">
                          Но синтетическое тестирование, в своём классическом
                          представлении, допускает внедрение поэтапного и
                          последовательного развития общества. В рамках
                          спецификации современных стандартов, сторонники
                          тоталитаризма в науке будут функционально разнесены
                        </p>
                        <p className="pb-4 text-[12px] lg:text-sm">
                          <Link to="#">Подробнее ↗</Link>
                        </p>
                      </div>
                    </div>
                  )}
                </Transition>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
