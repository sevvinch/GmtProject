import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MdChevronRight } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { LuClock } from 'react-icons/lu';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';
import { SlSocialVkontakte } from 'react-icons/sl';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import Header from '../components/header/Header';
import Footer from '../components/Footer'

const Contacts = () => {
  return (
    <div className="bg-[#F8F7F3]">
        <Header/>
      <div className="container">
        <Breadcrumb />
        <div className="py-[100px]">
          <h1 className="text-[48px] font-medium">Контакты</h1>
          <div className="flex justify-between items-center gap-5">
            <ContactInfo />
            <ConsultationForm />
          </div>
          <Map />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

const Breadcrumb = () => (
  <div className="flex items-center gap-2 pt-5 text-[16px] font-normal">
    <Link to="/" className="text-[#7A7687]">
      Главная
    </Link>
    <span className="text-[#7A7687]">
      <MdChevronRight />
    </span>
    <NavLink to="/kontakt">Контакты</NavLink>
  </div>
);

const ContactInfo = () => (
  <div className="bg-white p-[40px] border rounded-lg my-10 w-[50%]">
    <h4 className="text-[30px] font-medium">ООО Глобал Медикал Трейд</h4>
    <AddressInfo
      icon={<IoLocationOutline />}
      label="Юридический адрес:"
      address="Россия, г. Москва, ул. Докукина, 8, стр. 2"
    />
    <AddressInfo
      icon={<IoLocationOutline />}
      label="Фактический адрес:"
      address="Россия, г. Москва, ул. Докукина, 8, стр. 2"
    />
    <WorkingHours />
    <ContactDetails />
    <div className="flex items-center justify-between">
      {' '}
      <Requisites />
      <SocialMedia />
    </div>
  </div>
);

const AddressInfo = ({ icon, label, address }) => (
  <div className="flex gap-2 py-5">
    {icon}
    <div>
      <span className="text-[#7A7687] text-[16px] font-medium">{label}</span>
      <p className="text-[16px] font-medium">{address}</p>
    </div>
  </div>
);

const WorkingHours = () => (
  <div className="flex gap-2 pb-5">
    <LuClock className="text-[#7A7687]" />
    <div>
      <span className="text-[#7A7687] text-[16px] font-medium">
        Режим работы:
      </span>
      <p className="text-[16px] font-medium">Пн-Пт с 09:00-19:00</p>
      <p className="text-[16px] font-medium">Сб-Вс - выходной</p>
    </div>
  </div>
);

const ContactDetails = () => (
  <div>
    <h4 className="text-[20px] font-medium">
      Звоните. Звонки по России бесплатны:
    </h4>
    <div className="py-5">
      <PhoneInfo />
      <EmailInfo />
    </div>
  </div>
);

const PhoneInfo = () => (
  <div className="flex gap-2">
    <BsTelephone className="text-[#7A7687]" />
    <div>
      <span className="text-[#7A7687] text-[16px] font-medium">Телефоны:</span>
      <div className="flex gap-3">
        <p className="text-[16px] font-medium">8-800-000-00-00</p>
        <p className="text-[16px] font-medium">+7-000-000-00-00</p>
        <p className="text-[16px] font-medium">+7-495-000-00-00</p>
      </div>
    </div>
  </div>
);

const EmailInfo = () => (
  <div className="pt-5 flex gap-2">
    <MdOutlineMail className="text-[#7A7687] w-[20px] h-[20px]" />
    <div>
      <span className="text-[#7A7687] text-[16px] font-medium">Пишите:</span>
      <p className="text-[16px] font-medium">info@mail.ru</p>
    </div>
  </div>
);

const Requisites = () => (
  <div className="flex justify-between py-5">
    <div>
      <h4 className="text-[20px] font-medium">Реквизиты:</h4>
      <RequisiteInfo label="ИНН" value="9717039181" />
      <RequisiteInfo label="ОГРН" value="1167746796986" />
    </div>
  </div>
);

const RequisiteInfo = ({ label, value }) => (
  <div className="flex gap-10">
    <span className="text-[16px] text-[#7A7687] font-medium">{label}</span>
    <p className="text-[16px] font-medium">{value}</p>
  </div>
);

const SocialMedia = () => (
  <div>
    <h4 className="text-[20px] font-medium">Мы в соцсетях</h4>
    <div className="flex justify-between mt-[30px]">
      <SocialIcon icon={<SlSocialVkontakte />} />
      <SocialIcon icon={<FaTelegramPlane />} />
      <SocialIcon icon={<FaWhatsapp />} />
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="p-[4px] rounded-md bg-[#088269] text-white">{icon}</div>
);

const ConsultationForm = () => (
  <div className="bg-white p-[40px] border rounded-lg my-10 w-[50%]">
    <h4 className="text-[30px] font-medium">Бесплатная консультация</h4>
    <p className="text-[#7A7687] text-[16px] font-medium py-5 w-[70%]">
      Оставьте свои координаты и наш менеджер перезвонит вам через 10 минут
    </p>
    <FormInput placeholder="Ваше имя" type="text" />
    <FormInput placeholder="Ваш телефон" type="number" />
    <FormInput placeholder="Ваш email" type="text" />
    <FormInput placeholder="Ваш вопрос" type="text" className="pb-[100px]" />
    <SubmitButton />
  </div>
);

const FormInput = ({ placeholder, type, className }) => (
  <input
    type={type}
    placeholder={placeholder}
    className={`outline-none bg-transparent px-4 py-2 mb-[25px] border-b-[1px] border-b-[#7A768] w-full text-[16px] font-normal ${className}`}
  />
);

const SubmitButton = () => (
  <div className="flex items-center justify-between gap-4 mt-[60px] mb-[20px]">
    <button className="bg-[#088269] px-6 py-2 rounded-full text-white">
      Отправить
    </button>
    <p className="text-[12px]">
      Нажимая «Отправить», я соглашаюсь c обработкой персональных данных на
      условиях{' '}
      <span className="text-[#088269]">Политики конфиденциальности</span>
    </p>
  </div>
);

const Map = () => (
  <div className="w-full h-[400px] overflow-hidden rounded-lg shadow-lg mb-[50px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.384365119842!2d69.17516795541992!3d41.29045400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b007e2ac277%3A0x83fc525ce72adbfb!2sComplex%20Med%20Center!5e0!3m2!1sru!2s!4v1719655233089!5m2!1sru!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="rounded-[10px] "
    ></iframe>
  </div>
);

export default Contacts;
