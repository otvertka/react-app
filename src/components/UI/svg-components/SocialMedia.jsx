import React from 'react';

import waSVG from '../../../Assets/svg/whatsapp.svg';
import linSVG from '../../../Assets/svg/linkedin.svg';
import youtubeSVG from '../../../Assets/svg/youtube.svg';

const SocialMedia = () => {
  return (
    <ul className='pb-10 flex gap-3'>
      <li>
        <a href='#'>
          <img className='w-10 h-10 hover:scale-110 transition-all' src={waSVG} alt='whatsApp' />
        </a>
      </li>
      <li>
        <a className='hover:text-orange-700' href='#'>
          <img className='w-10 h-10 hover:scale-110 transition-all' src={youtubeSVG} alt='youtube' />
        </a>
      </li>
      <li>
        <a href='#'>
          <img className='w-10 h-10 hover:scale-110 transition-all' src={linSVG} alt='linkedin' />
        </a>
      </li>
    </ul>
  );
};

export default SocialMedia;
