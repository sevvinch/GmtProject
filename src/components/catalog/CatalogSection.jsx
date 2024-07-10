import { Link } from 'react-router-dom';
import CategoryList from '../CategoriesList';

const CatalogSection = () => {
  return (
    <div className="container grid lg:grid-cols-[1fr_3fr] md:pt-[25px] grid-cols-1 gap-[10px] mb-[60px] md:mb-[120px] lg:mb-[150px]">
      <CategoryList />

      <div className="grid grid-cols-2 md:grid-cols-3  gap-[10px] mb-[25px] ">
        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Ветеринарное оборудование
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Анестезиология
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden row-[span_2]  "
        >
          <div className=" bg-white h-[272px] sm:h-[378px] lg:h-[534px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Физиотерапевтическое оборудование
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Стоматологическое оборудование
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Хирургические инструменты
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden row-[span_2]  "
        >
          <div className=" bg-white h-[272px] sm:h-[378px] lg:h-[534px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className="py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px]  border-t ">
            <p className="text-[12px] md:text-[14px] lg:text-[16px]  font-medium leading-[140%]  ">
              Проктологическое оборудование
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Оборудование для медицинской метрологии
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Оборудование для мониторинга пациента
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Оборудование для радиационной терапии
            </p>
          </div>
        </Link>

        <Link
          to={'/kategoriya'}
          className="border border-[--border] rounded-[10px] overflow-hidden h-[154px] sm:h-[216px] lg:h-[304px] "
        >
          <div className=" bg-white h-[109px] sm:h-[148px] lg:h-[220px] p-[10px] lg:p-[20px] ">
            <img
              src="../../../public/assets/categories/Img1.png"
              alt=""
              className="w-full h-full object-contain "
            />
          </div>
          <div className=" py-[10px] px-[15px] lg:py-[20px] lg:px-[25px] pr-[50px] border-t ">
            <p className=" text-[12px] md:text-[14px] lg:text-[16px] font-medium leading-[118%] lg:leading-[140%]  ">
              Педиатрическое оборудование
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CatalogSection;
