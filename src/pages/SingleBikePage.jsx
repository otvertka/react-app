import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
// import Counter from '../components/Counter';

import CartContext from '../store/CartContext';

import delivImg from '../../src/Assets/images/devicePage/deliv.png';
import socialImg from '../../src/Assets/images/social_demo.png';
// import prefImg from '../../src/Assets/images/prefHeart.png';

const SingleBikePage = observer(() => {
  const params = useParams();
  const { bikes } = useContext(Context);
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedBike = bikes.bikesAll.find(
    (bike) => parseInt(bike.id) === parseInt(params.id)
  );
  const cartCtx = useContext(CartContext);

  function handleAddBikeToCart() {
    cartCtx.addItem(selectedBike);
  }

  function handleToggleFavorites() {
    if (cartCtx.favorites.some((item) => item.id === selectedBike.id)) {
      cartCtx.removeFromFavorites(selectedBike.id);
    } else {
      cartCtx.addToFavorites(selectedBike);
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <div className='mx-10'>
      <p>{params.id}</p>
      <section>
        <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-1 lg:grid-rows-1 pt-10'>
          {/*див1 картинка */}
          <div className='items-center row-end-2 lg:col-end-1 lg:row-span-2 lg:mr-20'>
            <img className='w-[790px]' src={selectedBike.image} alt='bike' />
          </div>

          {/*див2 текст */}

          <div className='row-end-1 lg:row-end-1 lg:col-end-2'>
            <h2 className='text-3xl md:text-4xl font-medium mb-3'>
              {selectedBike.title}
            </h2>
            <h4 className='mb-3 text-gray-400'>{selectedBike.brand}</h4>
            <div className='flex justify-between mb-3'>
              <h4 className='text-gray-400'>Artikelnummer: {selectedBike.id}</h4>
              <img className='inline-block' src={socialImg} alt='soc' />
            </div>
            <h5 className='text-green-500 md:mb-10'>Vorrätig</h5>
          </div>
          {/* див 3 */}
          <div className='lg:col-end-2 lg:row-end-2'>
            <div className='flex mb-6 md:mb-10'>
              <h2 className='text-4xl font-medium mr-4'>
                {selectedBike.price} €
              </h2>
              <span className='text-lg text-gray-400 line-through inline'>
                5220 €
              </span>
            </div>
            <p className='mb-6 md:mb-8'>
            Professionelles Renn-Hardtail für Cross-Country-Niveau
              Meisterschafts- und Weltcup-Niveau. Einer der leichtesten Rahmen unter den Renn-Hardtails
              Cross-Country-Hardtails.
            </p>

            <div>
              <h2 className='text-lg font-medium mb-6'>Größe:</h2>
              <ul className='flex gap-4 mb-6'>
                <li>
                  <a
                    className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded '
                    href='#'>
                    S
                  </a>
                </li>
                <li>
                  <a
                    className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded '
                    href='#'>
                    M-L
                  </a>
                </li>
                <li>
                  <a
                    className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded '
                    href='#'>
                    M
                  </a>
                </li>
                <li>
                  <a
                    className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded '
                    href='#'>
                    L
                  </a>
                </li>
                <li>
                  <a
                    className='inline-block w-12 h-12 border border-gray-400 hover:border-black hover:bg-black hover:text-white flex justify-center items-center rounded '
                    href='#'>
                    XL
                  </a>
                </li>
              </ul>
            </div>
            <div className='mb-8'>
              <h2 className='text-lg font-medium mb-6'>Farbe:</h2>
              <ul className='flex gap-4'>
                <li>
                  <a
                    className='inline-block w-8 h-8 bg-yellow-200  hover:border-gray-300 hover:border-4 rounded-full '
                    href='#'></a>
                </li>
                <li>
                  <a
                    className='inline-block w-8 h-8 bg-green-600 hover:border-gray-300 hover:border-4 rounded-full '
                    href='#'></a>
                </li>
                <li>
                  <a
                    className='inline-block w-8 h-8 bg-yellow-400 hover:border-gray-300 hover:border-4 rounded-full '
                    href='#'></a>
                </li>
                <li>
                  <a
                    className='inline-block w-8 h-8 bg-orange-500 hover:border-gray-300 hover:border-4 rounded-full '
                    href='#'></a>
                </li>
                <li>
                  <a
                    className='inline-block w-8 h-8 bg-amber-700 hover:border-gray-300 hover:border-4 rounded-full'
                    href='#'></a>
                </li>
                <li>
                  <a
                    className='inline-block w-8 h-8 bg-red-600 hover:border-gray-300 hover:border-4 rounded-full'
                    href='#'></a>
                </li>
              </ul>
            </div>
            <div className='flex gap-3 mb-12'>
              <button
                onClick={handleAddBikeToCart}
                className=' bg-orange-500 rounded-lg w-[320px] h-[52px] text-white'>
                In den Warenkorb
              </button>

              <button onClick={handleToggleFavorites} className='max-w-[29px]'>
                <svg
                  width='29'
                  height='26'
                  viewBox='0 0 29 26'
                  fill={isFavorite ? '#F57520' : 'none'}
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M2.67757 13.34L14.5 25.4464L26.3224 13.34C27.6367 11.9941 28.375 10.1688 28.375 8.26553C28.375 4.30217 25.2374 1.08923 21.367 1.08923C19.5084 1.08923 17.7259 1.84531 16.4117 3.19112L14.5 5.14876L12.5883 3.19112C11.274 1.84531 9.49156 1.08923 7.63294 1.08923C3.76255 1.08923 0.625 4.30217 0.625 8.26553C0.625 10.1688 1.36333 11.9941 2.67757 13.34Z'
                    stroke='#F57520'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className='uppercase text-3xl md:text-4xl font-medium mb-8 md:mb-10'>
        Beschreibung
        </h1>
        <p className='mb-8 md:mb-10'>
        Professionelles Renn-Hardtail für Cross-Country auf Meisterschaftsebene
          und Weltcup-Niveau. Es ist einer der leichtesten Rahmen unter den Renn-Hardtails
          für Cross Country. Scott Scale 700 RC ist ein Rahmen aus Verbundfaser
          HMX-Faser, Sram XX1/X01 1×11-Rennantrieb, Shimano XTR M9000 Scheibenbremsen.
          Shimano XTR M9000 und Syncros XR RC Rennlaufräder. Das Fahrrad von Nino Schurter
          Für Kurzstrecken-Cross Country.
        </p>
      </section>
      <section>
        <h1 className='uppercase text-3xl md:text-4xl font-medium mb-8 md:mb-10'>
        Details
        </h1>
        <ul>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Farbe</h3>
            <span className='text-gray-500'>Gelb</span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Jahr</h3>
            <span className='text-gray-500'>2016</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Raddurchmesser</h3>
            <span className='text-gray-500'>27.5</span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Rahmenmaterial</h3>
            <span className='text-gray-500'>Carbon</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Größe</h3>
            <span className='text-gray-500'>L</span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Land</h3>
            <span className='text-gray-500'>Schweiz</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Hersteller</h3>
            <span className='text-gray-500'>Scott</span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Reifen</h3>
            <span className='text-gray-500'>
              Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy /
              PaceStar compound
            </span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Rahmen</h3>
            <span className='text-gray-500'>
              Scale Carbon / HMX-Technologie / IMP-Technologie / Tapered Lenkrohr / BB92 / SDS-Technologie / IDS SL
            </span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Sattelstütze</h3>
            <span className='text-gray-500'>
              Ritchey WCS 700 Series: Carbon Link FlexLogic / 31.6mm 900 Series:
              Carbon 2B SDS / 34.9mm
            </span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Седло</h3>
            <span className='text-gray-500'>
              Ritchey WCS Streem V3 Titanium rails
            </span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Federgabel</h3>
            <span className='text-gray-500'>
              Rock Shox SID RL3 Air / Dämpfer DNA3 3-Mode / 15mm QR-Achse /
 konisches Steuerrohr/Fernverriegelung, einstellbar
 Zugstufe/Federweg 100 mm
            </span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Offset</h3>
            <span className='text-gray-500'>
              Ritchey WCS C–260 700 Series: +6° / 900 Series: -6° / 31.8mm / 1
              1/8»
            </span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Räder</h3>
            <span className='text-gray-500'>Syncros XR RC</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Lenker</h3>
            <span className='text-gray-500'>
              Ritchey Carbon WCS / 9° / 720mm 
            </span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Bremse Typ</h3>
            <span className='text-gray-500'>Hydraulische Scheibe</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Bremssystem</h3>
            <span className='text-gray-500'>
              Shimano XTR M9000 Disc 180/F and 160/Rmm SM-RT81 IceTech CL Scheiben
            </span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Schalthebel</h3>
            <span className='text-gray-500'>SRAM XO1 Trigger</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Pleuelstangen</h3>
            <span className='text-gray-500'>
              SRAM XX1 GXP PF DM Carbon crankarm / QF 156 700 Series: 34T / 900
              Series: 32T
            </span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Schaltwerk</h3>
            <span className='text-gray-500'>SRAM XX1</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Kette</h3>
            <span className='text-gray-500'>SRAM PCX1</span>
          </li>
          <li className='p-4 bg-gray-100 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Anzahl der Geschwindigkeiten</h3>
            <span className='text-gray-500'>11</span>
          </li>
          <li className='p-4 flex flex-col justify-around md:flex-row md:justify-between md:items-center h-[105px] '>
            <h3 className='font-semibold'>Bürgschaft</h3>
            <span className='text-gray-500'>1 Jahr</span>
          </li>
        </ul>
      </section>
      <section>
        <h1 className='my-10 text-3xl uppercase font-semibold'>Versandoption</h1>
        <img src={delivImg} alt='delivery' />

        <h3 className='mt-6 mb-10 font-semibold'>
        Für den Komfort der Kunden gibt es verschiedene Möglichkeiten der Warenlieferung.        </h3>
        <ul>
          <li>Lieferung in Düsseldorf</li>
          <li>Lieferung in das Land NRW</li>
          <li>Lieferung in Deutschland</li>
        </ul>

        <h3 className='bg-gray-100 rounded p-3 inline-block'>
        Bei einer Bestellung über die Website steht jede dieser Methoden zur Verfügung
 oder von Betreibern
        </h3>
        <p>
        Fahrräder und Fahrradmaschinen werden montiert und konfiguriert geliefert.        </p>
        <p>
        Der Betreiber beantwortet alle Fragen zu den Regeln und Kosten der Lieferung:{' '}
          <span> +49 055-75-86</span>
        </p>

        <h3 className='mt-6 mb-10 font-semibold'>
        Eine Abholung im Geschäft ist für jede Bestellung möglich.        </h3>
      </section>
    </div>
  );
});

export default SingleBikePage;
