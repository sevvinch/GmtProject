// src/data/catalogData.js
import catalogImages from "../data/catalogImages";

const catalog = [
  {
    id: 1,
    image: catalogImages[0],
    alt: "laboratory tools",
    title1: "Оборудование для медицинской метрологии",
    title: "Анализатор мочи MIND UA-66",
    desc: "Артикул: 213134",
    position: "В наличии",
    price: "300 000 руб",
    slug: "Новинки",
    sale: "-30%",
    category: "Реанимация",
    labelClass: "bg-[#59599A]",
    label: "Хит продаж",
  },
  {
    id: 2,
    image: catalogImages[1],
    alt: "laboratory tools",
    title1: "Анестезиология",
    title: "Анализатор мочи MIND UA-66",
    desc: "Артикул: 213134",
    position: "В наличии",
    price: "300 000 руб",
    slug: "Новинки",
    category: "Хирургия",
    labelClass: "bg-[#AD7B00]",
    sale: "-30%",
    label: "-30%",
  },
];

export default catalog;
