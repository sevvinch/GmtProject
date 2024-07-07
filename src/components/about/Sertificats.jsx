import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CertificateImg from '../../../public/assets/about/Img5.png';

const Certificate = ({ image }) => (
  <div className="mx-2 h-[208px] w-[156px] rounded-[10px] bg-white p-3 md:h-[240px] md:w-[180px] lg:h-[280px] lg:w-[210px] lg:p-4">
    <img className="h-full w-full" src={image} alt="Certificate Img" />
  </div>
);

const ArrowButton = ({ direction, onClick }) => (
  <button
    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D5D1E1] transition duration-300 ease-in-out hover:border-[#07745E] lg:h-10 lg:w-10"
    onClick={onClick}
  >
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d={
            direction === 'prev'
              ? 'M16 8.50023C16 8.86454 15.7435 9.16563 15.4107 9.21328L15.3182 9.21985L3.33247 9.21927L7.66255 13.7707C7.92939 14.0511 7.93032 14.5068 7.66462 14.7884C7.42308 15.0444 7.04433 15.0685 6.77698 14.8601L6.70037 14.7906L1.20026 9.01055C1.16509 8.97359 1.13453 8.93358 1.10861 8.89134C1.10128 8.87862 1.09383 8.86561 1.08676 8.85234C1.08026 8.84097 1.07438 8.82915 1.06884 8.81721C1.06114 8.79983 1.05362 8.78188 1.0468 8.76356C1.04125 8.74944 1.03662 8.73571 1.03239 8.72186C1.02737 8.70469 1.02249 8.68639 1.01829 8.66782C1.01517 8.65485 1.01269 8.64237 1.01054 8.62984C1.00751 8.61119 1.00492 8.5919 1.00308 8.57238C1.00149 8.55749 1.00054 8.54274 1.00001 8.52797C0.99987 8.51901 0.999698 8.50964 0.999698 8.50022L1.00004 8.47235C1.00056 8.45822 1.00148 8.44411 1.00278 8.43003L0.999698 8.50022C0.999698 8.45481 1.00368 8.41038 1.01131 8.3673C1.01307 8.35702 1.01518 8.34645 1.01751 8.33594C1.02235 8.31427 1.02795 8.29341 1.0344 8.27296C1.03756 8.2628 1.04125 8.25194 1.04518 8.24117C1.05315 8.21951 1.06181 8.19887 1.07134 8.17876C1.07577 8.16931 1.08072 8.15941 1.08591 8.14961C1.09443 8.13363 1.10321 8.11844 1.11249 8.10364C1.11904 8.09316 1.12629 8.08225 1.13387 8.07152L1.13977 8.06322C1.15814 8.03789 1.17807 8.01389 1.1994 7.99137L1.20022 7.9907L6.70033 2.20972C6.96715 1.92927 7.39886 1.93021 7.66459 2.21183C7.90615 2.46784 7.92737 2.86767 7.72876 3.14896L7.66259 3.22953L3.33429 7.78002L15.3182 7.7806C15.6947 7.7806 16 8.10279 16 8.50023Z'
              : 'M1 8.49977C1 8.13546 1.25651 7.83437 1.58931 7.78672L1.68183 7.78015L13.6675 7.78073L9.33745 3.22931C9.07061 2.94888 9.06968 2.49325 9.33537 2.21161C9.57692 1.95558 9.95566 1.93149 10.223 2.13991L10.2996 2.20942L15.7997 7.98944C15.8349 8.02641 15.8655 8.06641 15.8914 8.10866C15.8987 8.12138 15.9062 8.13439 15.9132 8.14766C15.9197 8.15903 15.9256 8.17085 15.9312 8.18279C15.9389 8.20017 15.9464 8.21812 15.9532 8.23644C15.9587 8.25056 15.9634 8.26429 15.9676 8.27814C15.9726 8.29531 15.9775 8.31361 15.9817 8.33218C15.9848 8.34515 15.9873 8.35763 15.9895 8.37016C15.9925 8.3888 15.9951 8.4081 15.9969 8.42762C15.9985 8.44251 15.9995 8.45726 16 8.47203C16.0001 8.48098 16.0003 8.49036 16.0003 8.49977L16 8.52765C15.9994 8.54177 15.9985 8.55589 15.9972 8.56996L16.0003 8.49977C16.0003 8.54519 15.9963 8.58961 15.9887 8.63269C15.9869 8.64298 15.9848 8.65354 15.9825 8.66406C15.9776 8.68573 15.972 8.70659 15.9656 8.72704C15.9624 8.7372 15.9588 8.74806 15.9548 8.75883C15.9468 8.78048 15.9382 8.80113 15.9287 8.82123C15.9242 8.83069 15.9193 8.84059 15.9141 8.85038C15.9056 8.86637 15.8968 8.88156 15.8875 8.89636C15.881 8.90684 15.8737 8.91775 15.8661 8.92848L15.8602 8.93677C15.8419 8.9621 15.8219 8.98611 15.8006 9.00863L15.7998 9.00929L10.2997 14.7903C10.0328 15.0707 9.60114 15.0698 9.33541 14.7882C9.09385 14.5322 9.07263 14.1323 9.27124 13.851L9.33741 13.7705L13.6657 9.21997L1.68183 9.2194C1.30527 9.2194 1 8.89721 1 8.49977Z'
          }
          fill="#202020"
        />
      </svg>
    </i>
  </button>
);

const Certificats = () => {
  const sliderRef = useRef(null);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());

  function getSlidesToShow() {
    return window.innerWidth < 640 ? 2 : 4;
  }

  useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    className: 'center',
    infinite: true,
    slidesToShow,
    swipeToSlide: true,
    centerPadding: '10px',
    afterChange: (index) => console.log(`Slider Changed to: ${index + 1}`),
  };

  const certificates = Array(4).fill(CertificateImg);

  return (
    <div className="lg mx-auto max-w-[1440px] gap-10 px-4 md:px-5 lg:flex">
      <h1 className="mb-6 text-lg font-medium md:mb-7 md:text-xl lg:mb-0 lg:w-1/5 lg:text-3xl lg:leading-[120%]">
        Сертификаты на продукцию
      </h1>
      <div className="lg:w-4/5">
        <div className="md:mb-10">
          <Slider {...settings} ref={sliderRef}>
            {certificates.map((image, index) => (
              <div key={index}>
                <Certificate image={image} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden gap-3 md:flex">
          <ArrowButton
            direction="prev"
            onClick={() => sliderRef.current.slickPrev()}
          />
          <ArrowButton
            direction="next"
            onClick={() => sliderRef.current.slickNext()}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificats;
