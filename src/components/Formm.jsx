import React from 'react';

const Formm = () => {
  return (
    <div className="container flex flex-col items-center justify-center min-h-screen  p-4 mb-[150px]">
      <div className="flex flex-col md:flex-row    overflow-hidden w-full  space-y-4 md:space-y-0 md:space-x-5 ">
        <div className="w-full md:w-1/2 h-64 md:h-auto relative rounded-[10px] overflow-hidden">
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
        <div className="w-full md:w-1/2  rounded-[10px] bg-white p-10">
          <h2 className="text-[30px] text-[#202020] font-medium leading-[120%] mb-6">
            Остались вопросы?
          </h2>
          <p className="text-[16px] text-[#7A7687] font-medium leading-[140%] mb-10">
            Задайте их по номеру телефона +7 (495) 000-00-00 <br /> или оставьте
            свои координаты и наш менеджер <br /> перезвонит вам через 10 минут.
          </p>
          <form className="space-y-4">
            <div>
              <label className="text-[14px] text-[#7A7687] leading-normal  block text-sm font-medium">
                Ваше имя
              </label>
              <input
                type="text"
                className="outline-none  block w-full border-b border-gray-300  px-2"
              />
            </div>
            <div>
              <label className="text-[14px] text-[#7A7687] leading-normal  block text-sm font-medium">
                Ваш телефон
              </label>
              <input
                type="tel"
                className="outline-none  block w-full border-b border-gray-300  px-2"
              />
            </div>
            <div>
              <label className="text-[14px] text-[#7A7687] leading-normal  block text-sm font-medium">
                Ваш email
              </label>
              <input
                type="email"
                className="outline-none  block w-full border-b border-gray-300  px-2"
              />
            </div>
            <div>
              <label className="text-[14px] text-[#7A7687] leading-normal  block text-sm font-medium mb-[40px]">
                Ваш вопрос
              </label>
              <textarea className="outline-none  block w-full border-b border-gray-300  px-2 mb-[40px]" />
            </div>
          </form>
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className=" text-[14px] font-semibold leadig-normal bg-[#088269] text-[#F8F7F3] rounded-[50px] px-[30px] py-[11px] "
            >
              Отправить
            </button>
            <p className="text-xs mt-2">
              Нажимая «Отправить», я соглашаюсь с обработкой персональных данных
              и условиями{' '}
              <a href="#" className="text-blue-500">
                Политики конфиденциальности
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formm;
