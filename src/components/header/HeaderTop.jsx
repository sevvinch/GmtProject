import { NavLink } from 'react-router-dom';

const links = [
  { to: '/o-kompanii', text: 'О компании' },
  { to: '/dostavka', text: 'Доставка' },
  { to: '/oplata', text: 'Оплата' },
  { to: '/garantii', text: 'Гарантии' },
  { to: '/blog', text: 'Блог' },
];

const contactInfo = [
  { text: 'info@mail.ru' },
  { text: 'г. Москва, ул. Московская, д. 35' },
];

const HeaderTop = () => {
  return (
    <div className="border-b border-[#E5E2EE]">
      <div className="container flex justify-between gap-5 items-center">
        <ul className="flex items-center gap-5">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="text-[12px] font-medium leading-normal text-[#7A7687] hover:text-[#07745e] duration-200 py-[10px]"
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-10 py-2">
          {contactInfo.map((info, index) => (
            <li
              key={index}
              className="text-[12px] font-medium leading-normal text-[#7A7687] "
            >
              {info.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderTop;
