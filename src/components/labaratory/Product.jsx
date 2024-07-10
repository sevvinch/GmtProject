import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { RiAlignItemBottomLine } from 'react-icons/ri';
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';
import { IoIosHeartEmpty } from 'react-icons/io';
import Data from '../../data/catalog';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/addToCard';

const Product = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState([]);
  const [compare, setCompare] = useState([]);

  const handlePageClick = ({ selected }) => setCurrentPage(selected);
  const offset = currentPage * itemsPerPage;
  const currentItems = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const toggleItem = (id, listSetter) => {
    listSetter((prevList) =>
      prevList.includes(id)
        ? prevList.filter((itemId) => itemId !== id)
        : [...prevList, id],
    );
  };

  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        {currentItems.map((data, index) => (
          <div
            key={index}
            className="relative w-[320px] border-[1px] bg-[#f8f7f3] rounded-lg transform"
          >
            {data.label && (
              <span
                className={`absolute top-2 left-2 px-2 py-1 rounded-full text-[#F8F7F3] font-medium text-xs ${data.labelClass}`}
              >
                {data.label}
              </span>
            )}
            <div
              className="w-full h-[250px] flex items-center justify-center rounded-lg"
              onClick={() => navigate(`/katalog/laboratornoe/${data.id}`)}
            >
              <img
                src={data.image}
                alt={data.alt}
                className="w-full h-full object-contain rounded-t-xl bg-white p-10 cursor-pointer"
              />
            </div>
            <div className="absolute top-2 right-2 flex gap-2">
              <RiAlignItemBottomLine
                className={`text-2xl cursor-pointer ${
                  compare.includes(data.id)
                    ? 'text-[#088269]'
                    : 'text-[#202020]'
                }`}
                onClick={() => toggleItem(data.id, setCompare)}
              />
              <IoIosHeartEmpty
                className={`text-2xl cursor-pointer ${
                  favorites.includes(data.id)
                    ? 'text-[#088269]'
                    : 'text-[#202020]'
                }`}
                onClick={() => toggleItem(data.id, setFavorites)}
              />
            </div>
            <div className="p-4">
              <h3
                className="pr-[80px] text-[18px] font-semibold mb-2 text-[#202020] cursor-pointer"
                onClick={() => navigate(`/katalog/laboratornoe/${data.id}`)}
              >
                {data.title}
              </h3>
              <div className="py-4">
                <span className="block text-[#7A7687] text-[14px] font-normal">
                  {data.desc}
                </span>
                <p className="text-[16px] font-normal text-[#7A7687]">
                  {data.position}
                </p>
              </div>
              <p className="text-[16px] font-medium text-[#202020]">
                {data.price}
              </p>
            </div>
            <div className="p-4">
              <button
                onClick={() => dispatch(addToCart(data))}
                className="w-full transition duration-300 flex justify-center items-center px-4 py-[8px] rounded-full font-semibold text-[16px] text-[#088269] border border-[#D5D1E1] hover:bg-green-600 hover:text-white"
              >
                Добавить в корзину
              </button>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        previousLabel={
          <MdOutlineKeyboardDoubleArrowLeft className="text-[20px] p-[5px] w-[35px] h-[35px] bg-white rounded-lg border" />
        }
        nextLabel={
          <MdOutlineKeyboardDoubleArrowRight className="text-[20px] p-[5px] w-[35px] h-[35px] bg-white rounded-lg border" />
        }
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="flex justify-center mt-4 items-center"
        pageClassName="mx-1"
        pageLinkClassName="px-3 py-1 rounded-lg border border-[#E5E2EE] font-semibold text-[#202020] bg-white"
        activeLinkClassName="bg-emerald-700 text-[#FFFFFF]"
      />
    </div>
  );
};

export default Product;
