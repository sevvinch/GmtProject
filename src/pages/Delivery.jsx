import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import DeliveryInformation from '../components/delivery/Info';
import ConvenientInformation from '../components/delivery/Inform';
import DeliveryRules from '../components/delivery/Rules';
import AccordionSection from '../components/Accordion';
import PickUpSection from '../components/delivery/Map';
import CargoDocuments from '../components/delivery/Documents';
import Consultation from '../components/delivery/Consultation';
import FooterTop from '../components/Subscription';
import Header from '../components/header/Header';
import Footer from '../components/Footer'

const Delivery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      component: <DeliveryInformation />,
      marginBottom: 'mb-60 md:mb-120 lg:mb-150',
    },
    {
      component: <ConvenientInformation />,
      marginBottom: 'mb-60 md:mb-120 lg:mb-150',
    },
    { component: <DeliveryRules />, marginBottom: 'mb-60 md:mb-120 lg:mb-150' },
    {
      component: <AccordionSection />,
      marginBottom: 'mb-60 md:mb-120 lg:mb-150',
    },
    { component: <PickUpSection />, marginBottom: 'mb-60 md:mb-120 lg:mb-150' },
    {
      component: <CargoDocuments />,
      marginBottom: 'mb-60 md:mb-120 lg:mb-150',
    },
    { component: <Consultation />, marginBottom: 'mb-60 md:mb-120 lg:mb-150' },
    { component: <FooterTop />, marginBottom: '' },
  ];

  return (
    <div className="">
      <Header/>
      <div className="container px-4 md:px-5 lg:px-4">
        <div className="mb-10 md:mb-12 lg:mb-24">
          <div className="flex items-center gap-2 py-5">
            <Link to="/" className="text-sm font-normal text-[#7A7687]">
              Главная
            </Link>
            <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
            <p className="text-sm font-normal">Доставка</p>
          </div>
        </div>
        {sections.map((section, index) => (
          <div key={index} className={section.marginBottom}>
            {section.component}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Delivery;
