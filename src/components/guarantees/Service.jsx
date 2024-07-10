import Img1 from "../../../public/assets/guarantees/img1.svg";
import Img2 from '../../../public/assets/guarantees/img2.svg';
import Img3 from '../../../public/assets/guarantees/img3.svg';
// import Img4 from '../../../public/assets/guarantees/img1.svg';

const Service = () => {
  const services = [
    {
      img: Img1,
      text: "Установка, настройка и пуско-наладка медтехники",
    },
    {
      img: Img2,
      text: "Сервисное обслуживание медицинской техники любой комплектации",
    },
    {
      img: Img1,
      text: "Гарантийное и постгарантийное обслуживание",
    },
    {
      img: Img3,
      text: "Диагностика и проведение профилактических работ",
    },
  ];

  const renderService = (service, index) => (
    <div
      key={index}
      className="border border-[#E5E2EE] rounded-md p-[80px] flex flex-col items-center w-[97%] h-[315px] gap-[5px]"
    >
      <img src={service.img} alt={`img-${index}`} className="w-[65px] h-[65px]" />
      <p className="text-[16px] font-medium mt-[20px] text-center">{service.text}</p>
    </div>
  );

  return (
    <div className="bg-[#F8F7F3]">
      <div className="container py-[100px]">
        <h2 className="text-[30px] font-medium">Перечень гарантийных услуг</h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 sm:justify-center items-center gap-[10px] justify-between py-10">
          {services.map((service, index) => renderService(service, index))}
        </div>
        <div className="flex justify-end gap-4 items-center">
          <button className="bg-transparent text-[16px] font-semibold text-[#088269] px-[30px] py-[12px] rounded-full border">
            Гарантийный случай
          </button>
          <button className="bg-[#088269] text-[16px] font-semibold text-[#F8F7F3] px-[30px] py-[12px] rounded-full border">
            Замена товара
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
