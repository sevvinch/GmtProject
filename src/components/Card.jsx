import React from 'react';
import { GoHeart, GoHeartFill } from 'react-icons/go';
import { LuBarChartHorizontalBig } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCards } from '../reducers/card';
import { addCompare, setWishlist } from '../reducers/Wish';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { wishlist, compare } = useSelector((state) => state.wish);

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

  const isLiked = wishlist.some((cartItem) => cartItem.id === item.id);
  const isCompared = compare.some((cartItem) => cartItem.id === item.id);

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
    <div
      onClick={() => navigate(`/tovar/${item.id}`)}
      className="rounded-[10px]  w-full max-w-[236px] md:max-w-[320px] border border-[--border] overflow-hidden "
    >
      <div className="bg-white p-[10px] md:p-[30px] lg:p-[50px] relative mb-[15px] lg:mb-[20px]  flex justify-center items-center border-b border-[--border]">
        <img
          src={item.img}
          alt="image"
          className="w-full object-contain h-[172px] md:h-[142px]  lg:h-[229px]"
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
            className={` ${isCompared ? 'text-[--pri] ' : 'text-[--second] '} w-6 h-6 rotate-[-90deg] hover:text-[--pri] duration-200 cursor-pointer`}
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

      <div className="flex flex-col   px-[15px] pb-[10px] lg:pb-[15px]">
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
          className="text-[12px]   py-2 lg:py-[11px] px-[20px] lg:px-[30px] border border-[--border] hover:bg-[--pri] hover:text-white text-[--pri] rounded-full font-semibold  hover:border-[#07745E] duration-200  "
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Card;
