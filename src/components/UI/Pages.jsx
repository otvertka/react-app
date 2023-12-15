import React from 'react';
// import { Pagination } from 'flowbite-react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';

const Pages = observer(() => {
  const { bikes } = useContext(Context);
  // console.log(bikes.bikesAll.length);
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className='mt-20 mb-20'>
      <ul className='flex justify-center'>
        {pages.map((page) => (
          <li>
            <a className='inline-block py-1 px-3 border border-gray-300 text-gray-700 hover:bg-orange-500 hover:text-white' href='#'>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Pages;
