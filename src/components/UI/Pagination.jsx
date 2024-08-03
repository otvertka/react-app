import React from 'react';

const Pagination = ({
  itemsPerPage,
  totalItems,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='mt-20 pb-4'>
      <ul className='flex justify-center gap-2'>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`inline-block w-9 h-9 py-1 px-3 rounded bg-white border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white ${
                currentPage === page ? 'bg-orange-500 text-gray' : ''
              } `}
              onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
