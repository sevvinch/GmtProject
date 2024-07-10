import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/header//Header'
import Footer from '../components/Footer';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrAppsRounded } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { addCompare, setWishlist } from '../reducers/Wish';
import { setCards } from '../reducers/card';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { GoHeart, GoHeartFill } from 'react-icons/go';

const Wishlist = () => {
  const { wishlist, compare } = useSelector((state) => state.wish);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCartClick = (e, item) => {
    e.stopPropagation();
    dispatch(setCards(item));
  };

  const handleLikeClick = (e, item) => {
    e.stopPropagation();
    dispatch(setWishlist(item));
  };

  const handleCompare = (e, item) => {
    e.stopPropagation();
    dispatch(addCompare(item));
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Новинка':
        return {
          backgroundColor: '#E1EFE6',
          color: '#088269',
          borderColor: '#088269',
        };
      case 'Хит продаж':
        return {
          backgroundColor: '#E6E6FD',
          color: '#424285',
          borderColor: '#424285',
        };
      case '-30%':
        return {
          backgroundColor: '#FFE095',
          color: '#AD7B00',
          borderColor: '#AD7B00',
        };
      default:
        return {
          backgroundColor: '#FFFFFF',
          color: 'inherit',
          borderColor: 'transparent',
        };
    }
  };

  return (
    <>
      <Header />
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer  flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer  flex items-center gap-2 ">
            Избранное
          </span>
        </Link>
      </div>

      {wishlist.length > 0 && (
        <div className="container custom-margin mt-[40px] md:mt-[50px] lg:mt-[100px]">
          <p className=" custom-title mb-[20px] lg:mb-[40px]"> Избранное</p>

          <div className="grid gap-[20px] grid-cols-1  lg:grid-cols-[1fr_3fr] ">
            <div className="flex gap-[20px] lg:flex-col lg:gap-[10px] ">
              <p
                className={` cursor-pointer hover:text-[--pri] hover:underline duration-200 text-[--second] custom-text font-medium `}
              >
                Все товары ({wishlist.length})
              </p>
              <p
                className={` cursor-pointer hover:text-[--pri] hover:underline duration-200 text-[--text] custom-text font-medium `}
              >
                Маммографы
              </p>
              <p
                className={` cursor-pointer hover:text-[--pri] hover:underline duration-200 text-[--text] custom-text font-medium `}
              >
                Флюорографы
              </p>
            </div>

            <div>
              <div className="flex justify-between px-[20px] py-3 border border-[--border] rounded-[10px] mb-[10px] ">
                <select className="bg-transparent outline-none custom-text ">
                  <option value="">По популярности</option>
                  <option value="">По цене</option>
                  <option value="">По наименованию</option>
                  <option value="">По новинкам</option>
                </select>

                <div className="flex gap-[10px] items-center ">
                  <RxHamburgerMenu />
                  <GrAppsRounded />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-[10px] ">
                {wishlist.map((item) => {
                  const isLiked = wishlist.some(
                    (cartItem) => cartItem.id === item.id,
                  );
                  const isCompared = compare.some(
                    (cartItem) => cartItem.id === item.id,
                  );
                  return (
                    <div
                      onClick={() => navigate(`/tovar/${item.id}`)}
                      className="rounded-[10px]  w-full max-w-[236px] md:max-w-[320px] border border-[--border] overflow-hidden "
                    >
                      <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px]  flex justify-center items-center border-b border-[--border]">
                        <img
                          src={item.img}
                          alt="image"
                          className="w-full h-[172px] md:h-[142px] object-contain  lg:h-[229px]"
                        />
                        <span
                          style={getStatusStyles(item.status)}
                          className={`absolute top-[15px] left-[15px] text-[--pri] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[--pri] py-1 px-[10px] rounded-full`}
                        >
                          {item.status}
                        </span>
                        <div className="flex items-center gap-[10px] absolute top-[15px] right-[15px]">
                          <LuBarChartHorizontalBig
                            onClick={(e) => handleCompare(e, item)}
                            className={` ${isCompared ? 'text-[--pri]' : 'text-[--second] '} w-6 h-6 rotate-[-90deg] hover:text-[--pri] duration-200 cursor-pointer`}
                          />

                          <div onClick={(e) => handleLikeClick(e, item)}>
                            {isLiked ? (
                              <GoHeartFill className="w-6 h-6 text-[--pri] duration-200 cursor-pointer" />
                            ) : (
                              <GoHeart className="w-6 h-6 hover:text-[--pri] duration-200 cursor-pointer" />
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col px-[15px] pb-[10px] lg:pb-[15px]">
                        <div className="flex flex-col   mb-[15px]">
                          <p className="text-[16px] lg:text-[18px] w-[90%] font-semibold leading-[normal] mb-[10px]">
                            {item.title}
                          </p>
                          <span className="text-[12px] font-normal leading-[normal] text-[--text] mb-1">
                            Артикул: {item.element}
                          </span>
                          <span className="text-[12px] font-normal leading-[normal] text-[--text]">
                            {item.isAvailable ? 'В наличии' : 'нет в наличии'}
                          </span>
                          <p className=" mt-[15px] lg:mt-[30px] text-[16px] lg:text-[18px] font-semibold leading-[normal] text-[--second]">
                            {item.price} руб.
                          </p>
                        </div>

                        <button
                          onClick={(e) => handleCartClick(e, item)}
                          className="text-[10px] md:text-[12px] px-[8px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  "
                        >
                          Добавить в корзину
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {wishlist.length == 0 && (
        <div className=" container grid grid-cols-1  lg:grid-cols-2 custom-margin  mt-[40px] md:mt-[50px] lg:mt-[100px] ">
          <p className=" custom-title mb-[30px] lg:mb-0 ">Избранное</p>

          <div className="flex flex-col gap-[20px] lg:gap-[25px] ">
            <p className="text-[18px] md:text-[20px] lg:text-[30px] ">
              Не добавлено товаров в избранное
            </p>
            <p className="w-[85%] md:w-1/2 custom-text text-[--text] ">
              Вы можете перейти на главную страницу или воспользоваться
              каталогом товаров
            </p>
            <div className="flex items-center gap-[10px] ">
              <Link to={'/'}>
                <button className="text-[12px] px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  ">
                  На главную
                </button>
              </Link>
              <Link to={'/catalog'}>
                <button className="text-[12px] bg-[--pri] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200 ">
                  В каталог
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Wishlist;
