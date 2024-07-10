import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../header/Header'
import Map from '../../components/Formm';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Section4 from '../../components/Products';
import { CSSTransition } from 'react-transition-group';
// import '../../ui/Accordion.css';

const Sertificats = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: 'Медицинские инструменты',
      items: [
        'Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.',
        'Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.',
        'Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г',
        'Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.',
        'Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года',
        'Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.',
        'Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.',
        'Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.',
        'Гигрометры ВИТ Свидетельство об утверждении',
      ],
    },
    {
      title: 'Материалы для гинекологии и урологии',
      items: [
        'Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.',
        'Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.',
        'Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г',
        'Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.',
        'Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года',
        'Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.',
        'Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.',
        'Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.',
        'Гигрометры ВИТ Свидетельство об утверждении',
      ],
    },
    {
      title: 'Материалы для инъекционных процедур',
      items: [
        'Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.',
        'Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.',
        'Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г',
        'Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.',
        'Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года',
        'Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.',
        'Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.',
        'Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.',
        'Гигрометры ВИТ Свидетельство об утверждении',
      ],
    },
    {
      title: 'Перевязочные материалы',
      items: [
        'Инструменты медицинские хирургические РУ № РЗН 2015/3121 от 12 октября 2015 г.',
        'Фильтры медицинские РУ № РЗН 2019/8405 от 5 июня 2019 г.',
        'Воздуховоды полимерные РУ № ФСР 2011/10719 от 15 августа 2016 г',
        'Набор оториноларингологический РУ № ФСЗ 2010/08840 от 23 ноября 2018 г.',
        'Инструменты одноразовые РУ № ФСЗ 2009/05638 от 23 ноября 2018 года',
        'Пипетка офтальмологическая РУ № ФСР 2009/04211 от 23 ноября 2015 г.',
        'Термометр инфракрасный РУ № ФСЗ 2012/13255 от 22 ноября 2012 г.',
        'Зажим пупочный РУ № ФСР 2011/10731 от 6 мая 2011 г.',
        'Гигрометры ВИТ Свидетельство об утверждении',
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="container flex pt-[20px] gap-2 custom-text">
        <Link to="/">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </Link>
        <Link to="/about">
          <span className="text-[#7A7687] cursor-pointer flex items-center gap-2">
            О компании <MdKeyboardArrowRight className="w-[20px] h-[20px]" />
          </span>
        </Link>
        <span className="text-[#202020] font-medium cursor-pointer flex items-center gap-2">
          Сертификаты
        </span>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-[30px] md:gap-[55px] mt-[40px] md:mt-[50px] lg:mt-[100px] custom-margin">
        <p className="text-[#202020] text-[48px] font-meduim leading-[110%]">Сертификаты</p>

        <div className="border-t border-[#D5D1E1]">
          {accordionData.map((section, index) => (
            <div key={index} className="border-b border-[#D5D1E1]">
              <div
                className="flex justify-between items-center cursor-pointer py-[15px] lg:py-[25px]"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold text-[14px] md:text-[16px] lg:text-[18px]">
                  {section.title}
                </span>
                <span
                  className={`${
                    activeIndex === index
                      ? 'rotate-45 text-white bg-[#088269]'
                      : 'rotate-0'
                  } duration-200 border-[#D5D1E1] border w-[32px] h-[32px] rounded-full flex justify-center items-center text-[28px]`}
                >
                  +
                </span>
              </div>
              <CSSTransition
                in={activeIndex === index}
                timeout={300}
                classNames="accordion"
                unmountOnExit
              >
                <ul className="pb-5 flex flex-col gap-[10px] cursor-pointer">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-[#088269] text-[12px]">
                      {item}
                    </li>
                  ))}
                </ul>
              </CSSTransition>
            </div>
          ))}
        </div>
      </div>

      <Section4 />
      <Map />
      <Footer />
    </>
  );
};

export default Sertificats;
