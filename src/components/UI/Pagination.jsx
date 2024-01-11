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
    <div className='mt-20 mb-20'>
      <ul className='flex justify-center'>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`inline-block py-1 px-3 border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white ${
                currentPage === page ? 'bg-orange-500 text-white' : ''
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
