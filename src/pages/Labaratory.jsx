import { Link, NavLink } from 'react-router-dom';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';
import LabaratoriyaProduct from '../components/labaratory/Product';
import { RiArrowRightSLine } from 'react-icons/ri';

const Labaratory = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <div className="container">
        <nav className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to="/" className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <Link to="/katalog" className="text-[#7A7687]">
            Каталог
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to="/katalog/laboratornoe" className="">
            Лабораторное оборудование
          </NavLink>
        </nav>
        <div className="flex gap-4">
          {[
            'Дерматологическое оборудование',
            'Ветеринарное оборудование',
            'Мебель медицинская',
            'Ветеринарное оборудование',
          ].map((text, index) => (
            <button
              key={index}
              className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-white"
            >
              {text}
            </button>
          ))}
          <button className="border border-[#D5D1E1] rounded-full px-4 py-[5px] bg-[#F8F7F3] text-[#088269]">
            Показать больше
          </button>
        </div>
        <section className="my-10">
          <div className="flex justify-between gap-4">
            <aside className="w-[25%] h-[50%]">
              <div className="flex justify-between items-center text-[18px] text-[#202020] border-[1px] border-[#E5E2EE] py-[10px] rounded-xl px-4">
                Направления
                <GoChevronDown />
              </div>
              <div className="border rounded-xl mt-[20px] px-4">
                <div className="flex justify-between items-center py-2 border-b-[1px] border-[#E5E2EE]">
                  <h3>Фильтр по товарам</h3>
                  <GoChevronUp />
                </div>
                <div className="flex justify-between items-center py-2">
                  <p>Цена</p>
                  <GoChevronUp />
                </div>
              </div>
            </aside>
            <LabaratoriyaProduct />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Labaratory;
