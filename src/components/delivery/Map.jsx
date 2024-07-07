import React from "react";

const Map = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 md:px-5 lg:px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <h2 className="text-3xl lg:text-4xl font-medium mb-6 lg:mb-10">
          Вы сможете забрать оборудование{' '}
          <span className="text-[#088269]">самостоятельно</span> из нашего офиса
        </h2>
        <div className="">
          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h4 className="text-xl font-semibold mb-4">Контакты</h4>
            <a
              href="tel:+70000000000"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              +7 (000) 000-00-00
            </a>
            <a
              href="mailto:info@mail.ru"
              className="block text-sm font-medium text-gray-700"
            >
              info@mail.ru
            </a>
          </div>
          <div className="rounded-lg border border-gray-300 bg-white p-6">
            <h4 className="text-xl font-semibold mb-4">Режим работы</h4>
            <p className="text-sm font-medium text-gray-700 mb-2">
              пн-пт: 09:00-19:00
            </p>
            <p className="text-sm font-medium text-gray-700">сб-вс: выходной</p>
          </div>
        </div>
      </div>
      <div className="relative mb-10 lg:mb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11991.384365119842!2d69.17516795541992!3d41.29045400000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b007e2ac277%3A0x83fc525ce72adbfb!2sComplex%20Med%20Center!5e0!3m2!1sru!2s!4v1719655233089!5m2!1sru!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" rounded-lg w-full h-64 md:h-80 lg:h-96 "
        ></iframe>
        <button className="absolute bottom-4 right-4 bg-[#088269] rounded-full px-5 py-2 text-sm text-white font-semibold md:px-8 md:py-3 lg:px-10 lg:py-4">
          Построить маршрут
        </button>
      </div>
    </div>
  );
};

export default Map;
