// import React, { useState } from 'react';
// import Filters from '../components/manufacturer/Filters';
// import ItemsList from '../components/manufacturer/ItemsList';
// import Pagination from '../components/manufacturer/Pagination';
// import { ManufacturerData } from '../data/manufacturer';

// const itemsPerPage = 6;

// const MainComponent = () => {
//   const [currentPage, setCurrentPage] = useState(0);
//   const [minPrice, setMinPrice] = useState(20000);
//   const [maxPrice, setMaxPrice] = useState(950000);

//   const pageCount = Math.ceil(ManufacturerData.length / itemsPerPage);

//   const handlePageClick = (event) => {
//     setCurrentPage(event.selected);
//   };

//   const displayItems = [];
//   for (let i = 0; i < itemsPerPage; i++) {
//     displayItems.push(
//       catalogCrData[(currentPage * itemsPerPage + i) % catalogCrData.length],
//     );
//   }

//   return (
//     <div className="my-10">
//       <div className="container mx-auto">
//         <h2 className="text-2xl">Оборудование Draeger</h2>
//         <div className="flex mt-10">
//           <div className="px-8 py-3 bg-white border rounded-3xl">
//             <p className="text-sm">Дерматологическое оборудование</p>
//           </div>
//           <div className="px-8 py-3 bg-white border rounded-3xl">
//             <p className="text-sm">Ветеринарное оборудование</p>
//           </div>
//           <div className="px-8 py-3 bg-white border rounded-3xl">
//             <p className="text-sm">Мебель медицинская</p>
//           </div>
//           <div className="px-8 py-3 bg-white border rounded-3xl">
//             <p className="text-sm">Анестезиология</p>
//           </div>
//           <div className="px-8 py-3 border rounded-3xl">
//             <p className="text-sm text-green-600">Показать все</p>
//           </div>
//         </div>
//         <div className="flex gap-5 cursor-pointer justify-between mt-7">
//           <select className="w-1/4 outline-none rounded-xl px-5 py-3 border">
//             <option>Направления</option>
//             <option>Направления</option>
//             <option>Направления</option>
//             <option>Направления</option>
//             <option>Направления</option>
//             <option>Направления</option>
//           </select>
//           <div className="w-3/4 flex justify-between rounded-xl px-5 py-3 border">
//             <select className="border-none outline-none">
//               <option>По популярности</option>
//               <option>По популярности</option>
//               <option>По популярности</option>
//               <option>По популярности</option>
//             </select>
//             <div className="flex gap-32">
//               <div className="flex items-center gap-2">
//                 <p className="text-gray-500">Показать</p>
//                 <select className="border-none outline-none">
//                   <option>36</option>
//                   <option>46</option>
//                   <option>56</option>
//                 </select>
//               </div>
//               <div className="flex gap-2">
//                 <RxHamburgerMenu className="w-5 h-5" />
//                 <LuTable className="w-5 h-5" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex mt-5">
//           <Filters
//             minPrice={minPrice}
//             setMinPrice={setMinPrice}
//             maxPrice={maxPrice}
//             setMaxPrice={setMaxPrice}
//           />
//           <ItemsList items={displayItems} />
//         </div>
//         <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
//       </div>
//     </div>
//   );
// };

// export default MainComponent;
