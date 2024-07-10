import React, { useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';
import { GoChevronRight } from 'react-icons/go';
import ReactPaginate from 'react-paginate';
import Subscription from '../components/Subscription';
import Header from '../components/header/Header';
import Footer from '../components/Footer';
import Data from './../data/news';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = Data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  return (
    <div className="bg-[#F8F7F3]">
      <Header />
      <div className="container pb-[100px]">
        <div className="flex items-center gap-2 pb-[40px] pt-[20px] text-[16px] font-normal">
          <Link to={'/'} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={'/blog'} className="">
            Блог
          </NavLink>
        </div>
        <div className="flex justify-between">
          <div className="w-[25%] h-[50%] border rounded-lg p-5">
            <h3 className="text-[18px] text-[#202020] border-b-[1px] border-[#E5E2EE] pb-[10px]">
              Направления
            </h3>
            {Data.map((data, index) => (
              <div key={index} className="">
                <div className="flex flex-col pt-[10px]">
                  <h4 className="flex justify-between text-[16px] text-[#202020] cursor-pointer">
                    {data.direction} <GoChevronRight />
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[70%] flex flex-col gap-4">
            {currentItems.map((data, index) => (
              <div
                key={index}
                className="blog h-[304px] border border-[#E5E2EE] rounded-xl flex"
              >
                <div className="w-[40%]">
                  <img
                    src={data.image}
                    alt={data.alt}
                    className="w-[430px] h-full rounded-l-xl"
                  />
                </div>

                <div className="w-[60%] p-[25px] bg-white rounded-r-xl">
                  <h4 className="text-[18px] font-semibold text-[#202020]">
                    {data.title1}
                  </h4>
                  <span className="text-[12px] text-[#7A7687] font-normal">
                    {data.time}
                  </span>
                  <p className="pt-[25px] mb-[70px] text-[16px] font-medium text-[#7A7687]">
                    {data.text}
                  </p>
                  <NavLink
                    to={'/blog/informatsioniy-statya'}
                    className=" px-4 py-2 text-[14px] text-[#088269] font-semibold rounded-full border border-[#D5D1E1]"
                  >
                    Подробнее
                  </NavLink>
                </div>
              </div>
            ))}
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={'pagination'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              previousClassName={'page-item'}
              nextClassName={'page-item'}
              breakClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousLinkClassName={'page-link'}
              nextLinkClassName={'page-link'}
              breakLinkClassName={'page-link'}
              activeLinkClassName={'active'}
            />
          </div>
        </div>
      </div>
      <Subscription />
      <Footer />
    </div>
  );
};

export default Blog;
