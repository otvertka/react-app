import React, { useState } from 'react';

import subsribe_backgroundImage from '../../Assets/images/subscribe-sect-img/subscribe-bckg.png';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Сохранение в сторедж
    localStorage.setItem('subscribedEmail', email);

    // Показать Модальное окно
    setShowModal(true);

    // очистить поле email
    setEmail('');
  };

  return (
    <section>
      <div className='w-full h-80 relative'>
        <img src={subsribe_backgroundImage} className='absolute z-0 left-0 top-0 w-full h-full object-cover' alt='subscribe' />
        <div className='py-10 z-20 absolute'>
          <h1 className='text-white uppercase text-4xl sm:ml-8 z-10 pb-8'>Подпишитесь на наши новости</h1>
          <form className='relative flex flex-col gap-2 sm:flex-row max-w-full px-2' onSubmit={handleSubmit}>
            <label htmlFor='subscribe'>E-mail</label>
            <input className='rounded mr-4' id='email' type='email' placeholder='E-mail' value={email} onChange={(e) => setEmail(e.target.value)} />

            <button className='bg-orange-500 rounded text-white p-2' type='submit'>
              Подписаться
            </button>

            <label className='sm:absolute sm:m-14' htmlFor='consent'>
              <input type='checkbox' id='consent' name='consent' required />
              <span className='text-white'>Согласен(на) на обработку персональных данных </span>
            </label>
          </form>
        </div>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg- bg-opacity-50'>
          <div className='bg-white p-8 rounded-md'>
            <p className='text-xl '>Спасибо за подписку!</p>
            <p className='mb-4'>Вы подписались</p>
            <button className='bg-orange-500 text-white rounded p-2' onClick={() => setShowModal(false)}>
              Закрыть
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Subscribe;
