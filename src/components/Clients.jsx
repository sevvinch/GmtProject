import React from 'react';
import Marquee from 'react-fast-marquee';
import Client1 from './../../public/assets/clients/Img1.png';
import Client2 from './../../public/assets/clients/Img2.png';
import Client3 from './../../public/assets/clients/Img3.png';
import Client4 from './../../public/assets/clients/Img4.png';
import Client5 from './../../public/assets/clients/Img5.png';

const clients = [
  { img: Client1, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client2, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client3, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client4, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client5, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client2, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client4, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client1, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client3, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
  { img: Client5, name: 'НМИЦ онкологии им. Н.Н. Блохина' },
];

const Clients = () => {
  return (
    <div className="mb-[150px]">
      <div className="container">
        <div className="flex justify-between py-[10%]">
          <h1 className="text-[30px] font-medium text-[#202020]">
            Наши клиенты
          </h1>
          <h2 className="text-[#202020] text-[48px] font-medium">
            БОЛЕЕ{' '}
            <span className="text-[48px] font-medium text-[#088269]">5000</span>
            <br /> УСПЕШНЫХ ПРОЕКТОВ
          </h2>
        </div>
      </div>
      <Marquee className="flex items-center gap-3 pb-[9%]">
        {clients.map((client, index) => (
          <div
            key={index}
            className="xl:w-[95%] h-[100%] border border-[#F8F7F3] bg-[#F8F7F3] rounded-lg"
          >
            <div className="bg-white p-8 ">
              <img
                src={client.img}
                alt=""
                className="mx-auto h-[110px] w-[100%]"
              />
            </div>
            <p className="text-[16px] w-[80%] px-4 py-4">{client.name}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Clients;
