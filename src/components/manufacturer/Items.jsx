import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { LiaChartBar } from 'react-icons/lia';
import { MdOutlineFavorite } from 'react-icons/md';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  addToLike,
  addToList,
  addToStat,
  addToUser,
  removeFromLike,
  removeFromStat,
} from '../../store/add';

const Items = ({ item }) => {
  const dispatch = useDispatch();
  const { like, statist } = useSelector((state) => state.addTo);

  return (
    <div>
      <div className="relative rounded-lg overflow-hidden">
        <Link to="/katalog/laboratory/analiz">
          <img
            src={item.img}
            alt=""
            className="w-full h-[250px] object-cover"
            onClick={() => {
              dispatch(addToUser(item));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </Link>
        <div className="flex justify-between absolute top-2 gap-[85%] px-3">
          <button className="py-1 px-3 border bg-[#dff1e6] text-[#088269] rounded-3xl border-[#088269]">
            Новинка
          </button>
          <div className="flex items-center gap-2 ">
            <div>
              {like.some((e) => e.id === item.id) ? (
                <MdOutlineFavorite
                  className="text-[#088269] bg-transparent w-6 h-6"
                  onClick={() => dispatch(removeFromLike(item))}
                />
              ) : (
                <FavoriteBorderIcon
                  className="bg-transparent hover:text-[#088269]"
                  onClick={() => dispatch(addToLike(item))}
                />
              )}
            </div>
            <div className="">
              {statist.some((e) => e.id === item.id) ? (
                <LiaChartBar
                  className=" text-[#088269] bg-transparent w-6 h-6"
                  onClick={() => dispatch(removeFromStat(item))}
                />
              ) : (
                <LiaChartBar
                  className="bg-transparent  w-6 h-6 cursor-pointer"
                  onClick={() => dispatch(addToStat(item))}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border py-5 px-4">
        <h3 className="text-[18px] font-medium">{item.name}</h3>
        <p className="text-[#7A7687]">{item.common_name}</p>
        <p className="text-[#7A7687]">{item.price_title} </p>
        <h3 className="text-[18px] my-5 font-medium">{item.price} руб</h3>
        <button
          className=" py-3 w-full border rounded-3xl hover:text-white hover:bg-[#088269] text-[#088269]"
          onClick={() => dispatch(addToList(item))}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Items;
