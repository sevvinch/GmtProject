import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GoChevronDown, GoChevronUp, GoSearch } from "react-icons/go";
import Data from "../data/brands";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import Catalog from "../components/catalog/CatalogSection";
import Select from "../components/Offers";
import News from "../components/News";
import FastQuestion from "../components/Subscription";
import Consult from "../components/guarantees/GuaranteesForm";
import { RiArrowRightSLine } from "react-icons/ri";
import Header from "../components/header/Header";
import Footer from '../components/Footer'


const Manifacturer = () => {
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const navigate = useNavigate();

  const uniqueCountries = [...new Set(Data.map((item) => item.country))];

  const handleCountryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedCountries((prev) =>
      checked ? [...prev, value] : prev.filter((country) => country !== value)
    );
  };

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleResetFilters = () => {
    setSelectedCountries([]);
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleShowFilters = () => setShowFilters(true);

  const filteredData = Data.filter((item) => {
    const countryMatch = selectedCountries.length
      ? selectedCountries.includes(item.country)
      : true;
    const searchMatch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    return countryMatch && searchMatch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => setCurrentPage(page);

  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#F8F7F3]">
        <Header/>
      <div className="container">
        <div className="flex items-center gap-2 py-5 text-[16px] font-normal">
          <Link to={"/"} className="text-[#7A7687]">
            Главная
          </Link>
          <RiArrowRightSLine className="text-[20px] text-[#7A7687]" />
          <NavLink to={"/proizvoditel"} className="">
            Производители
          </NavLink>
        </div>
        <div className="my-10">
          <div className="flex justify-between gap-4">
            <div className="w-[25%] h-[50%]">
              <div className="flex justify-between items-center text-[18px] text-[#202020] border-[1px] border-[#E5E2EE] py-[8px] rounded-xl px-4">
                Направления
                <GoChevronDown />
              </div>
              <div className="border rounded-xl py-[20px] mt-[20px]">
                <h3 className="flex justify-between items-center py-2 px-4">
                  Страны <GoChevronUp />
                </h3>
                <div className="my-5 flex items-center pl-4">
                  <input
                    type="text"
                    placeholder="Поиск по стране"
                    className="px-4 py-[5px] outline-none border rounded-full w-full"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  <GoSearch className="relative right-6 w-[20px] h-[20px] text-[#7A7687] text-[20px]" />
                </div>
                <div className="flex flex-col px-5 gap-2">
                  {uniqueCountries.map((country, index) => (
                    <div className="flex items-center gap-2 px-4 py-2" key={index}>
                      <input
                        type="checkbox"
                        id={`country-${index}`}
                        value={country}
                        checked={selectedCountries.includes(country)}
                        onChange={handleCountryChange}
                      />
                      <label htmlFor={`country-${index}`} className="text-[#202020]">
                        {country}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 my-4">
                <button
                  className="w-[50%] px-4 py-2 rounded-full border font-semibold text-[14px]"
                  onClick={handleResetFilters}
                >
                  Сбросить
                </button>
                <button
                  className="w-[50%] px-4 py-2 rounded-full bg-[#088269] text-[#F8F7F3] text-[14px] font-semibold"
                  onClick={handleShowFilters}
                >
                  Показать
                </button>
              </div>
            </div>
            <div className="w-[75%]">
              <div className="card grid grid-cols-3 gap-4">
                {currentData.map((item, index) => (
                  <div
                    className="border rounded-xl"
                    key={index}
                    onClick={() => navigate(`/proizvoditel/${item.id}`)}
                  >
                    <div className="bg-white p-5 rounded-t-xl h-[70%]">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover mx-auto"
                      />
                    </div>
                    <h3 className="text-[18px] font-medium py-2 px-4">{item.title}</h3>
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-5">
                <button
                  className={`px-[10px] py-2 rounded-lg border ${currentPage === 1 ? "bg-white" : "bg-white"}`}
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <MdKeyboardDoubleArrowLeft />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    className={`px-[12px] py-2 rounded-lg border ${currentPage === index + 1 ? "bg-[#088269] text-white" : "bg-white"}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  className={`px-[10px] py-2 rounded-lg border ${currentPage === totalPages ? "bg-white" : "bg-white"}`}
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <MdKeyboardDoubleArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Catalog />
      <Select />
      <News />
      <FastQuestion />
      <Consult />
      <Footer/>
    </div>
  );
};

export default Manifacturer;
