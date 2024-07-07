import React from 'react';
import Logo from './../../public/assets/icons/logo2.png';
import { FaTelegramPlane } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { SlSocialVkontakte } from 'react-icons/sl';
import Pay from './../../public/assets/footer/pay.png';

const FooterBottom = () => {
  return (
    <footer className='bg-[#088269] text-white py-8'>
      <div className='container pb-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 xl:flex xl:justify-between'>
        <div>
          <h3 className='font-bold mb-4'>Покупателям</h3>
          <hr />
          <ul className='flex flex-col md:flex-row gap-4 md:gap-10 mt-3'>
            <div>
              <li className='text-[#F8F7F3]'>О компании</li>
              <li className='text-[#F8F7F3]'>Сертификаты</li>
              <li className='text-[#F8F7F3]'>Вакансии</li>
              <li className='text-[#F8F7F3]'>Гарантия</li>
              <li className='text-[#F8F7F3]'>Услуги</li>
              <li className='text-[#F8F7F3]'>Акции</li>
            </div>
            <div>
              <li className='text-[#F8F7F3]'>Доставка</li>
              <li className='text-[#F8F7F3]'>Оплата</li>
              <li className='text-[#F8F7F3]'>Возврат</li>
              <li className='text-[#F8F7F3]'>FAQ</li>
              <li className='text-[#F8F7F3]'>Лизинг</li>
              <li className='text-[#F8F7F3]'>Отзывы</li>
              <li className='text-[#F8F7F3]'>Блог</li>
            </div>
          </ul>
        </div>
        <div>
          <h3 className='font-bold mb-4'>Каталог</h3>
          <hr />
          <ul className='flex flex-col md:flex-row gap-4 md:gap-12 mt-3'>
            <div>
              <li className='text-[#F8F7F3]'>Реанимация</li>
              <li className='text-[#F8F7F3]'>Хирургия</li>
              <li className='text-[#F8F7F3]'>Офтальмология</li>
              <li className='text-[#F8F7F3]'>Лабораторная диагностика</li>
              <li className='text-[#F8F7F3]'>Акушерство и Гинекология</li>
              <li className='text-[#F8F7F3]'>Гистология</li>
              <li className='text-[#F8F7F3]'>Косметология</li>
            </div>
            <div>
              <li className='text-[#F8F7F3]'>Оториноларингология</li>
              <li className='text-[#F8F7F3]'>Рентгенология и томография</li>
              <li className='text-[#F8F7F3]'>Стерилизация</li>
              <li className='text-[#F8F7F3]'>Физиотерапия и реабилитация</li>
              <li className='text-[#F8F7F3]'>Функциональная диагностика</li>
              <li className='text-[#F8F7F3]'>Эндоскопия</li>
            </div>
            <div>
              <li className='text-[#F8F7F3]'>Новости</li>
              <li className='text-[#F8F7F3]'>Распродажи</li>
              <li className='text-[#F8F7F3]'>Кабинеты под ключ</li>
              <li className='text-[#F8F7F3]'>Скачать каталог</li>
            </div>
          </ul>
        </div>
        <div>
          <h3 className='font-bold mb-4'>Контакты</h3>
          <hr />
          <p className='text-[#F8F7F3] my-6 mt-4'>
            Адрес: Г. Москва, ул. Московская, д. 35
          </p>
          <p className='text-[#F8F7F3] my-6'>График работы:</p>
          <p className='text-[#F8F7F3]'>Пн-Пт: с 09:00 до 19:00</p>
          <p className='text-[#F8F7F3]'>Сб-Вс: выходной</p>
          <p className='text-[#F8F7F3] mt-6'>Телефоны:</p>
          <p className='text-[#F8F7F3]'>+7 000 000-00-00</p>
          <p className='text-[#F8F7F3]'>+7 495 000-00-00</p>
          <p className='text-[#F8F7F3]'>8 800 000-00-00</p>
          <p className='text-[#F8F7F3]'>Email: info@mail.ru</p>
        </div>
      </div>
      <div className='container mx-auto'>
        <hr />
      </div>
      <div className='container mx-auto flex flex-col md:flex-row justify-between py-5'>
        <div className='flex flex-col items-center md:items-start'>
          <img src={Logo} alt='Logo' className='mb-2' />
          <p>ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <p>Мы в соцсетях</p>
          <div className='flex gap-2 mt-2'>
            <div className='p-2 bg-white rounded-lg'>
              <SlSocialVkontakte className='text-[#088269]' />
            </div>
            <div className='p-2 bg-white rounded-lg'>
              <FaTelegramPlane className='text-[#088269]' />
            </div>
            <div className='p-2 bg-white rounded-lg'>
              <IoLogoWhatsapp className='text-[#088269]' />
            </div>
          </div>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <p>Партнерская программа</p>
          <p>Оптовые продажи</p>
          <p>Реквизиты</p>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <p>Способы оплаты</p>
          <img src={Pay} alt='Payment Methods' className='mt-2' />
        </div>
      </div>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-8'>
        <div className='flex flex-col md:flex-row items-center gap-8 md:gap-20 mt-8'>
          <p className='text-sm mt-2 text-center md:text-left'>
            © 2022 Медоборудование. <br /> Все права защищены.
          </p>
          <p className='text-xs opacity-60 text-center md:text-left'>
            Информация на данном сайте носит справочный характер и не является
            публичной офертой, определяемой положениями Статьи 437 Гражданского
            кодекса Российской Федерации.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBottom;
