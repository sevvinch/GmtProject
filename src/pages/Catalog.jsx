import { Link } from 'react-router-dom';
import CatalogSection from '../components/catalog/CatalogSection';
import CatalogTitle from '../components/catalog/CatalogTitle';
import Accordion from '../components/Accordion';
import Brands from '../components/Brands';
import Footer from '../components/Footer';
import Subscription from '../components/Subscription';
import Formm from '../components/Formm';
import News from '../components/News';
import Equipments from '../components/Equipments';
import Offers from '../components/Offers';
import Products from '../components/Products';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Header from '../components/header/Header'

const Catalog = () => {
  return (
    <>
      <Header />
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[#202020] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[#7A7687] font-medium cursor-pointer  flex items-center gap-2 ">
            Каталог
          </span>
        </Link>
      </div>

      <CatalogTitle />
      <CatalogSection />
      <Equipments />
      <Offers />
      <Products />
      <Brands />
      <News />
      <Accordion />
      <Formm />
      <Subscription />
      <Footer />
    </>
  );
};

export default Catalog;
