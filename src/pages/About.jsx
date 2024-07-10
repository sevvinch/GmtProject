import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import AboutInfo from '../components/about/AboutInfo';
import Partners from '../components/about/Partners';
import Doctors from '../components/about/Doctors';
import Clients from '../components/Clients';
import Offers from '../components/Offers';
import Brends from '../components/Brands';
import Location from '../components/Formm';
import Header from '../components/header/Header';
import Footer from '../components/Footer';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumb = (
    <div className="container md:px-5 lg:px-4">
      <div className="mb-5 flex items-center gap-2 py-5">
        <Link to="/" className="text-sm font-normal text-[#7A7687]">
          Главная
        </Link>
        <MdOutlineKeyboardArrowRight className="h-5 w-5 text-[#7A7687]" />
        <p className="text-sm font-normal">О компании</p>
      </div>
    </div>
  );

  const sections = [
    <AboutInfo />,
    <Partners />,
    <Doctors />,
    <Clients />,
    <Offers />,
    <Brends />,
    <Location />,
  ];

  return (
    <div>
      <Header />
      <div>
        {breadcrumb}
        {sections.map((Section, index) => (
          <React.Fragment key={index}>{Section}</React.Fragment>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default About;
