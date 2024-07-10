import { Link, NavLink } from 'react-router-dom';
import Service from '../components/guarantees/Service';
import Notification from '../components/guarantees/Notification';
import GuaranteesForm from '../components/guarantees/GuaranteesForm';
import { RiArrowRightSLine } from 'react-icons/ri';
import Header from '../components/header/Header';
import Footer from '../components/Footer'

const Guarantees = () => {
  return (
    <div className="bg-[#F8F7F3]">
      <Header/>
      <div className="container">
        <Breadcrumbs />
        <Intro />
      </div>
      <Service />
      <Notification />
      <GuaranteesForm />
      <Footer/>
    </div>
  );
};

const Breadcrumbs = () => (
  <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
    <Link to="/" className="text-[#7A7687]">
      Главная
    </Link>
    <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
    <NavLink to="/garantii">Гарантии</NavLink>
  </div>
);

const Intro = () => (
  <div className="pt-[50px] w-[50%]">
    <h1 className="text-[48px] font-medium py-[40px]">Гарантии</h1>
    <p className="font-medium text-[16px] pb-[20px]">
      Регулярное сервисное обслуживание медицинской техники – залог ее надежной,
      беспроблемной эксплуатации, а также продолжительного срока службы.
      Периодическая диагностика позволяет выявить любые неисправности,
      отклонения от нормального рабочего режима на самых ранних сроках. Это
      предотвратит серьезные поломки, приводящие к дорогостоящим ремонтам.
    </p>
    <p className="font-medium text-[16px] pb-[10px]">
      Являясь авторизованным дилером брендов, продукция которых представлена в
      каталоге, компания:
    </p>
    <ServiceList />
    <p className="font-medium text-[16px] pt-[20px]">
      Глобал Медикал Трейд является надежным поставщиком медицинского
      оборудования, предлагая своим клиентам качественную продукцию по лучшей
      цене. Наша компания гарантирует всем клиентам возможность воспользоваться
      услугами квалифицированных мастеров в установке, пуско-наладке, сервисном
      и техническом обслуживании приобретенного оборудования.
    </p>
  </div>
);

const ServiceList = () => (
  <ol className="text-[16px] font-medium list-decimal px-10">
    <li>Предоставляет услуги сервисного и гарантийного обслуживания.</li>
    <li>Осуществляет поставку оригинальных запчастей и комплектующих.</li>
    <li>
      Обучает медицинский персонал работе с современным высокотехнологичным
      оборудованием.
    </li>
  </ol>
);

export default Guarantees;
