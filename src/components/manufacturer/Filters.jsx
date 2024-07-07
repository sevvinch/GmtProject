import React, { useState } from 'react';

const Filters = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <div className="w-1/4 ">
      <div className="p-5 rounded-xl shadow-md">
        <h3 className="text-lg mb-4">Фильтр по товарам</h3>
        <div className="mb-4">
          <label className="block mb-2">Цена</label>
          <input
            type="range"
            min="20000"
            max="950000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="w-full "
          />
          <input
            type="range"
            min="20000"
            max="950000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>От: {minPrice.toLocaleString()}</span>
            <span>До: {maxPrice.toLocaleString()}</span>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Страна</label>
          <input
            type="text"
            placeholder="Поиск по стране"
            className="w-full p-2 border outline-none rounded mb-2"
          />
          <div className="space-y-2">
            <label className="block">
              <input type="checkbox" className="mr-2" defaultChecked />{' '}
              Австралия
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" defaultChecked /> Австрия
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" defaultChecked /> Беларусь
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Бельгия
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Великобритания
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Германия
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" defaultChecked /> Израиль
            </label>
            <label className="block">
              <input type="checkbox" className="mr-2" /> Испания
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Состояние</label>
          <label className="block">
            <input type="checkbox" className="mr-2" defaultChecked /> Новый
          </label>
          <label className="block">
            <input type="checkbox" className="mr-2" /> Демонстрационный
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Назначение</label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Комплектация</label>
        </div>
      </div>
      <div className="mt-6 flex justify-between">
        <button className="flex-1  rounded-3xl bg-gray-200 p-2 ">
          Сбросить
        </button>
        <button className="flex-1 rounded-3xl bg-green-600 text-white p-2 ">
          Показать
        </button>
      </div>
    </div>
  );
};

export default Filters;
