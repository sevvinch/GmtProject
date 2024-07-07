import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <div className="flex mt-6 items-center justify-center gap-2 text-xl">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2"
        pageClassName="border border-gray-300 rounded-lg px-4 py-2 "
        activeClassName="bg-teal-600 text-white rounded-lg"
        previousClassName="border border-gray-300 rounded-lg px-4 py-2 bg-transparent"
        nextClassName="border border-gray-300 rounded-lg px-4 py-2 bg-transparent"
        breakClassName="border border-gray-300 rounded-lg px-4 py-2 bg-transparent"
      />
    </div>
  );
};

export default Pagination;
