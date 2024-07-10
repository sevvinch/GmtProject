const images = [
  "./../../public/assets/news/img1.png",
  "./../../public/assets/news/img2.png",
  "./../../public/assets/news/img3.png",
  "./../../public/assets/news/img4.png",
  "./../../public/assets/news/img5.png",
  "./../../public/assets/news/img6.png",
  "./../../public/assets/news/img7.png",
  "./../../public/assets/news/img8.png",
];

const directions = [
  "Реанимация",
  "Хирургия",
  "Офтальмология",
  "Лабораторная диагностика",
  "Акушерство и Гинекология",
  "Гистология",
  "Косметология",
  "Оториноларингология",
  "Рентгенология и томография",
  "Стерилизация",
  "Физиотерапия и реабилитация",
  "Функциональная диагностика",
  "Эндоскопия",
];

const createNewsItem = (id, direction, image) => ({
  id,
  title: "Название новости",
  title1: "Что такое инфузомат (инфузионный насос)",
  desc: "Допускает внедрение поэтапного и развития общества.",
  text: "Обеспечение нашей деятельности требует определения и уточнения распределения внутренних резервов и ресурсов. Каждый из нас понимает очевидную вещь.",
  time: "21.11.2023",
  direction,
  image,
});

const newsItems = directions.map((direction, index) => 
  createNewsItem(index + 1, direction, images[index % images.length])
);

export default newsItems;
