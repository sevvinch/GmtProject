import { Link, NavLink } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import { RiArrowRightSLine } from 'react-icons/ri';
import Sale from '../components/Stocks';
import Cabinet from '../components/Equipments';
import CategoryProduct from '../components/Categories';
import Brend from '../components/Brands';
import Consult from '../components/guarantees/GuaranteesForm';
import Course from '../components/Subscription';
import Header from '../components/header/Header';
import Footer from '../components/Footer'
const Stocks = () => {
  const categories = [
    'Группы товаров',
    'Мониторы',
    'Лампы',
    'Кровати',
    'Рентгены',
  ];

  return (
    <div className="bg-[#F8F7F3]">
      <Header/>
      <div className="container pb-[50px]">
        <nav className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to="/aktsiya">Акции</NavLink>
        </nav>
        <div className="my-10">
          <div className="flex justify-between gap-4">
            <aside className="w-[25%] h-[50%]">
              <div className="border rounded-xl px-4">
                <h3 className="flex justify-between items-center py-2 border-b-[1px] border-[#E5E2EE]">
                  Категории
                </h3>
                {categories.map((category, index) => (
                  <p
                    key={index}
                    className="flex justify-between items-center py-2"
                  >
                    {category} <GoChevronRight />
                  </p>
                ))}
              </div>
            </aside>
            <Sale />
          </div>
        </div>
      </div>
      <Cabinet />
      <CategoryProduct />
      <Brend />
      <Consult />
      <Course />
      <Footer/>
    </div>
  );
};

export default Stocks;
