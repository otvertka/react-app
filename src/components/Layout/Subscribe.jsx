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
          <h1 className='text-white uppercase text-4xl sm:ml-8 z-10 pb-8'>Newsletter abonnieren und auf dem Laufenden bleiben.</h1>
          <form className='relative flex flex-col gap-2 sm:flex-row max-w-full px-2' onSubmit={handleSubmit}>
            <label htmlFor='subscribe'>E-Mail</label>
            <input className='rounded xs:mr-0 sm:mr-4 ' id='email' type='email' placeholder='E-Mail-Adresse' value={email} onChange={(e) => setEmail(e.target.value)} />

            <button className='bg-orange-500 rounded text-white p-2' type='submit'>
              Abonnieren
            </button>

            <label className='sm:absolute sm:m-14' htmlFor='consent'>
              <input type='checkbox' id='consent' name='consent' required />
              <span className='text-white'>Tolle Angebote, News und Trends – kostenlos in deinem Postfach.<br/>
Datenschutz: Dein Fahrrad GmbH speichert und verarbeitet Deine personenbezogenen Daten auf der Grundlage des Datenschutzhinweises. </span>
            </label>
          </form>
        </div>
      </div>

      {/* Модальное окно */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg- bg-opacity-50'>
          <div className='bg-white p-8 rounded-md'>
            <p className='text-xl '>Danke fürs Abonnieren!</p>
            <p className='mb-4'>Sie haben sich für den Newsletter angemeldet</p>
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
