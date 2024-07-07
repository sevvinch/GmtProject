import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/katalog', text: 'Каталог', icon: <HiOutlineMenuAlt1 /> },
  { to: '/proizvoditel', text: 'Производители' },
  { to: '/kabinet-podklyuch', text: 'Кабинеты под ключ' },
  { to: '/servisi', text: 'Услуги' },
  { to: '/aktsiya', text: 'Акции' },
  { to: '/pokupatel', text: 'Покупателям' },
  { to: '/kontakt', text: 'Контакты' },
];

const HeaderBottom = () => {
  return (
    <div className=" border-b border-[#E5E2EE]">
      <div className="container flex items-center justify-between py-2">
        <ul className="flex items-center justify-between gap-5">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.to}
                className="flex items-center gap-2 text-[14px] font-semibold leading-normal text-[#202020] hover:text-[#088269] active:text-green-600"
              >
                {link.icon && link.icon}
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-[14px] font-semibold">
            Москва <GrLocation />
          </p>
          <button className="text-[14px] px-[30px] py-[11px]  bg-transparent border border-[#E5E2EE] rounded-full hover:border-[#088269] ">
            +7(495)000-00-00
          </button>
          <button className="text-[14px] px-[30px] py-[11px]  text-white bg-[#07745E] border border-[#E5E2EE] rounded-full hover:bg-[#07745E] hover:text-white">
            Заказать звонок
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
