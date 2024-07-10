import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { FaMinus } from 'react-icons/fa6';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { addCompare, setWishlist } from '../reducers/Wish';
import {
  decrement,
  increment,
  handleRemove,
  handlePrice,
} from '../reducers/card';

const Backet = () => {
  const { cards, totalPrice } = useSelector((state) => state.card);
  const { wishlist, compare } = useSelector((state) => state.wish);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handlePrice());
  }, [cards]);

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
      <div className=" container flex pt-[20px] gap-2 custom-text ">
        <Link to={'/'}>
          <span className="text-[--text] cursor-pointer flex items-center gap-2 ">
            Главная <MdKeyboardArrowRight className="w-[20px] h-[20px] " />
          </span>
        </Link>
        <Link>
          <span className="text-[--second] font-medium cursor-pointer flex items-center gap-2 ">
            Корзина ( {cards.length} )
          </span>
        </Link>
      </div>

      <div className=" container custom-margin mt-[20px] lg:mt-[25px] ">
        <div className=" grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-[10px] ">
          <div className="flex flex-col gap-[10px] ">
            {cards.map((card) => {
              const isLiked = wishlist.some(
                (cartItem) => cartItem.id === card.id,
              );
              const isCompared = compare.some(
                (cartItem) => cartItem.id === card.id,
              );
              const itemTotal = card.amount * card.price;
              return (
                <div
                  key={card.id}
                  className="grid grid-cols-2 md:grid-cols-[2fr_3fr_2fr] border border-[--border] rounded-[10px] overflow-hidden  "
                >
                  <div className="border-r relative h-full max-h-[267px] p-[25px] pt-[61px] bg-white">
                    <img
                      src={card.img}
                      alt=""
                      className="w-full h-full object-contain"
                    />

                    <span
                      style={getStatusStyles(card.status)}
                      className={`absolute top-[15px] left-[15px] text-[12px] lg:text-[14px] font-semibold leading-[normal] border border-[--pri] py-1 px-[10px] rounded-full`}
                    >
                      {card.status}
                    </span>
                    <span
                      onClick={() => dispatch(setWishlist(card))}
                      className="absolute top-[11px] right-2 md:hidden"
                    >
                      {isLiked ? (
                        <GoHeartFill className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer text-[--pri] hover:scale-105 duration-200" />
                      ) : (
                        <GoHeart className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer hover:text-[--pri] hover:scale-105 duration-200" />
                      )}
                    </span>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-[21px] justify-between py-[10px] px-[15px] md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px]">
                    <div>
                      <span className="flex justify-between">
                        <p className="text-[14px] md:text-[16px] lg:text-[18px] font-semibold leading-normal w-[70%] mb-2">
                          {card.title}
                        </p>
                        <span className="md:hidden">
                          <IoCloseSharp
                            onClick={() => dispatch(handleRemove(card.id))}
                            className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:text-[--pri] hover:scale-105 duration-200"
                          />
                        </span>
                      </span>
                      <p className="text-[10px] md:text-[12px] text-[--text] mb-1">
                        Артикул: {card.element}{' '}
                      </p>
                      <p className="text-[10px] md:text-[12px] text-[--text]">
                        {card.isAvailable ? 'В наличии' : 'нет в наличии'}{' '}
                      </p>
                    </div>

                    <div>
                      <p className="text-[14px] md:text-[16px] lg:text-[17px] font-semibold leading-normal mb-[28px]">
                        {itemTotal} руб.
                      </p>
                      <div className="flex justify-center max-w-[150px] items-center gap-[20px] text-[12px] py-2 lg:py-[8px] px-[20px] lg:px-[20px] border border-[--border] rounded-full">
                        <FaMinus
                          onClick={() => dispatch(decrement(card.id))}
                          className="hover:text-[--pri] cursor-pointer"
                        />
                        <span className="text-[16px] font-semibold text-[--pri]">
                          {card.amount}
                        </span>
                        <button
                          onClick={() => dispatch(increment(card.id))}
                          className="text-[20px] font-semibold hover:text-[--pri] cursor-pointer focus:text-[--pri]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:flex justify-end gap-[6px] lg:gap-[10px] py-[10px] px-[15px] md:py-[15px] md:px-[20px] lg:py-[20px] lg:px-[25px]">
                    <span onClick={() => dispatch(setWishlist(card))}>
                      {isLiked ? (
                        <GoHeartFill className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer text-[--pri] hover:scale-105 duration-200" />
                      ) : (
                        <GoHeart className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer hover:text-[--pri] hover:scale-105 duration-200" />
                      )}
                    </span>
                    <LuBarChartHorizontalBig
                      onClick={() => dispatch(addCompare(card))}
                      className={`${isCompared ? 'text-[--pri] ' : 'text-[--second] '} rotate-[-90deg] w-[20px] h-[20px] lg:w-[24px] lg:h-[24px] cursor-pointer hover:text-[--pri] hover:scale-105 duration-200 `}
                    />
                    <IoCloseSharp
                      onClick={() => dispatch(handleRemove(card.id))}
                      className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] cursor-pointer hover:text-[--pri] hover:scale-105 duration-200"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="min-w-[236px]">
            <div className="bg-white border border-[--border] rounded-[10px] px-[20px] py-[15px]">
              <span className="flex justify-between items-center pb-[15px] mb-[15px] border-b">
                <span className="text-[12px] md:text-[14px] font-semibold">
                  Итого
                </span>
                <span className="text-[12px] md:text-[14px] font-semibold">
                  {totalPrice} руб.
                </span>
              </span>

              <span className="flex justify-between items-center mb-2">
                <span className="text-[12px] font-medium">
                  Товары ({cards.length} шт)
                </span>
                <span className="text-[12px] font-medium">
                  {totalPrice} руб.
                </span>
              </span>

              <span className="flex justify-between items-center">
                <span className="text-[12px] font-medium">Скидка</span>
                <span className="text-[12px] font-medium">0 руб.</span>
              </span>

              <span className="flex flex-col gap-[10px] mt-[20px]">
                <button className="text-[12px] bg-[#088269] text-white py-2 lg:py-[11px] px-[20px] lg:px-[30px] rounded-full font-semibold lg:text-[14px] hover:bg-[#07745E] duration-200  ">
                  Оформить заказ
                </button>

                <button className="text-[12px]  px-[10px]  py-2 lg:py-[11px] md:px-[20px] lg:px-[30px] border border-[#D5D1E1] text-[ #202020] rounded-full font-semibold  hover:border-[#07745E] duration-200 ">
                  Задать вопрос
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Backet;
