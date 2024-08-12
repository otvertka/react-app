import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';

import delivImg from '../../src/Assets/images/devicePage/deliv.png';
import CartContext from '../store/CartContext';

const SingleHeimtrainerPage = observer(() => {
  const params = useParams();
  const { heimtrainer } = useContext(Context);
  const cartCtx = useContext(CartContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedHeimtrainer = heimtrainer.heimtrainerAll.find((heim) => parseInt(heim.id) === parseInt(params.id));

  function handleToggleFavorites() {
    if (cartCtx.favorites.some((item) => item.id === selectedHeimtrainer.id)) {
      cartCtx.removeFromFavorites(selectedHeimtrainer.id);
    } else {
      cartCtx.addToFavorites(selectedHeimtrainer);
    }
    setIsFavorite(!isFavorite);
  }

  function handleAddHeimtrainerToCard() {
    cartCtx.addItem(selectedHeimtrainer);
  }

  return (
    <div className='mx-10'>
      <p>{params.id}</p>
      <section>
        <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-1 lg:grid-rows-1 pt-10'>
          <div className='items-center row-end-2 lg:col-end-1 lg:row-span-2 lg:mr-20'>
            <img className='w-[790px]' src={selectedHeimtrainer.image} alt='accessory' />
          </div>

          <div className='row-end-1 lg:row-end-1 lg:col-end-2'>
            <h2 className='text-3xl md:text-4xl font-medium mb-3'>{selectedHeimtrainer.title}</h2>
            <h4 className='mb-3 text-gray-400'>{selectedHeimtrainer.brand}</h4>
            <div className='flex justify-between mb-3'>
              <h4 className='text-gray-400'>Artikelnummer : {selectedHeimtrainer.id}</h4>
              {/* <img className='inline-block' src={socialImg} alt='soc' /> */}
            </div>
            <h5 className='text-green-500 md:mb-10'>Vorrätig</h5>
          </div>
          {/* див 3 */}
          <div className='lg:col-end-2 lg:row-end-2'>
            <div className='flex mb-6 md:mb-10'>
              <h2 className='text-4xl font-medium mr-4'>{selectedHeimtrainer.price} €</h2>
              <span className='text-lg text-gray-400 line-through inline'>3000 €</span>
            </div>
            <p className='mb-6 md:mb-8'>Konsole: Kapazitiver Touchscreen 4,7 Zoll mit Maßen: 164 x 122 x 35 mm. Funktionen: Hr, Hrmax, Ftp, W / Kg, Kcal, Geschwindigkeit, Distanz, Runden (Kurven, Berechnung von Watt und U / min jeder Trainingsreihe). Bt Calibrating System® 95,5% der Erfolgsrate.
Schwungrad: Aluminium. Mit diesem Material vermeiden wir Rost. Entspricht 20 kg.
Getriebe: Transmission Poly V® Belt. Der Poly V® wurde für eine größere Kontaktfläche als Trapez- oder Flachriemen entwickelt. Das beste Übersetzungsverhältnis in Bezug auf einen normalen Riemen.
Schutz: Seiten- und Frontschutz des in Tpr hergestellten Schwungrads und der Welle, der durch Schweiß verursachten Rost und Korrosion verhindert. Hintere Schutzvorrichtungen in Bauchmuskeln zum Dehnen auf beiden Seiten und im Mittelrohr.
Pedale: Spd Mixed. Vp Components X 93. Doppelte Verwendung, perfekt für Radfahrer oder gewöhnliche Schuhe.
q Faktor: 160 mm
Lenker: Ergonomischer Lenker, angepasst an das Radfahren mit doppeltem Griff: obere und untere aerodynamische Position. Vertikale und horizontale Gleitregelung mit 6 Positionen, die mit Laser nummeriert und gedruckt sind. Poröse Schaumbeschichtung, antiallergisch und leicht zu reinigen. Einfache Blockpositionierer.
Lenkerschaft: Aluminium mit 7 Positionen per Laser nummeriert und bedruckt.</p>

            {/* <div>
              <h2 className='text-lg font-medium mb-6'>Größe:</h2>
              <ul className='flex gap-4 mb-6'>
                <li>
                  <a className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded ' href='#'>
                    S
                  </a>
                </li>
                <li>
                  <a className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded ' href='#'>
                    M-L
                  </a>
                </li>
                <li>
                  <a className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded ' href='#'>
                    M
                  </a>
                </li>
                <li>
                  <a className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded ' href='#'>
                    L
                  </a>
                </li>
                <li>
                  <a className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded ' href='#'>
                    XL
                  </a>
                </li>
              </ul>
            </div>
            <div className='mb-8'>
              <h2 className='text-lg font-medium mb-6'>Farbe:</h2>
              <ul className='flex gap-4'>
                <li>
                  <a className='inline-block w-8 h-8 bg-yellow-200  hover:border-gray-300 hover:border-4 rounded-full ' href='#'></a>
                </li>
                <li>
                  <a className='inline-block w-8 h-8 bg-green-600 hover:border-gray-300 hover:border-4 rounded-full ' href='#'></a>
                </li>
                <li>
                  <a className='inline-block w-8 h-8 bg-yellow-400 hover:border-gray-300 hover:border-4 rounded-full ' href='#'></a>
                </li>
                <li>
                  <a className='inline-block w-8 h-8 bg-orange-500 hover:border-gray-300 hover:border-4 rounded-full ' href='#'></a>
                </li>
                <li>
                  <a className='inline-block w-8 h-8 bg-amber-700 hover:border-gray-300 hover:border-4 rounded-full' href='#'></a>
                </li>
                <li>
                  <a className='inline-block w-8 h-8 bg-red-600 hover:border-gray-300 hover:border-4 rounded-full' href='#'></a>
                </li>
              </ul>
            </div> */}
            <div className='flex gap-3 mb-12'>
              <button onClick={handleAddHeimtrainerToCard} className=' bg-orange-500 rounded-lg w-[320px] h-[52px] text-white'>
              In den Warenkorb
              </button>

              <button onClick={handleToggleFavorites} className='max-w-[29px]'>
                <svg width='29' height='26' viewBox='0 0 29 26' fill={isFavorite ? '#F57520' : 'none'} xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2.67757 13.34L14.5 25.4464L26.3224 13.34C27.6367 11.9941 28.375 10.1688 28.375 8.26553C28.375 4.30217 25.2374 1.08923 21.367 1.08923C19.5084 1.08923 17.7259 1.84531 16.4117 3.19112L14.5 5.14876L12.5883 3.19112C11.274 1.84531 9.49156 1.08923 7.63294 1.08923C3.76255 1.08923 0.625 4.30217 0.625 8.26553C0.625 10.1688 1.36333 11.9941 2.67757 13.34Z' stroke='#F57520' stroke-linecap='round' stroke-linejoin='round' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className='uppercase text-3xl md:text-4xl font-medium mb-8 md:mb-10'>Beschreibung</h1>
        <p className='mb-8 md:mb-10'>
        Professionelles Renn-Hardtail für Cross-Country auf Meisterschaftsebene
          und Weltcup-Niveau. Es ist einer der leichtesten Rahmen unter den Renn-Hardtails
          für Cross Country. Scott Scale 700 RC ist ein Rahmen aus Verbundfaser
          HMX-Faser, Sram XX1/X01 1×11-Rennantrieb, Shimano XTR M9000 Scheibenbremsen.
          Shimano XTR M9000 und Syncros XR RC Rennlaufräder. Das Fahrrad von Nino Schurter
          Für Kurzstrecken-Cross Country.</p>
      </section>
      <section>
        <h1 className='uppercase text-3xl md:text-4xl font-medium mb-8 md:mb-10'>Eigenschaften:</h1>
        <ul>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Farbe</h3>
            <span className='text-gray-500'>Schwarze</span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Jahr</h3>
            <span className='text-gray-500'>2023</span>
          </li>

          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Land</h3>
            <span className='text-gray-500'>Schweiz</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Hersteller</h3>
            <span className='text-gray-500'>Scott</span>
          </li>

          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Bürgschaft</h3>
            <span className='text-gray-500'>1 Jahr</span>
          </li>
        </ul>
      </section>
      <section>
        <h1 className='my-10 text-3xl uppercase font-semibold'>Lieferung</h1>
        <img src={delivImg} alt='delivery' />

        <h3 className='mt-6 mb-10 font-semibold'>
        Für die Bequemlichkeit der Kunden gibt es mehrere Möglichkeiten der Lieferung von Waren.</h3>
        <ul>
          <li>Lieferung in Düsseldorf</li>
          <li>Lieferung in das Land NRW</li>
          <li>Lieferung in Deutschland</li>
        </ul>

        <h3 className='bg-gray-100 rounded p-3 inline-block'>Jede dieser Lifermethoden ist möglich, wenn eine Bestellung über die Website
          oder über die Betreiber</h3>
        <p>Fahrräder und Fahrradständer werden montiert und aufgestellt geliefert.</p>
        <p>
        Fragen zu den Versandregeln und -kosten werden von einem Mitarbeiter beantwortet: <span> +49 055-75-86</span>
        </p>

        <h3 className='mt-6 mb-10 font-semibold'>Selbstabholung im Geschäft ist für jede Bestellung möglich</h3>
      </section>
    </div>
  );
});

export default SingleHeimtrainerPage;