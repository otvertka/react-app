import Modal from './Modal';

import closeSVG from '../../Assets/svg/close.svg';

export default function ModalConfirmOrder({ onClose }) {
  return (
    <Modal open={true} onClose={onClose}>
      <div className='w-full md:w-[515px] h-full md:h-[503px] bg-white flex flex-col p-8 justify-between'>
        <div className='flex flex-col'>
          <button className='self-end m-2' onClick={onClose}>
            <img src={closeSVG} alt='Close' />
          </button>
          <h2 className='text-5xl font-semibold uppercase mb-5'>Ihre Bestellung wurde bestätigt</h2>
          <p className='text-gray-500'>Unsere Manager senden Ihnen alle notwendigen Informationen per E-Mail.</p>
        </div>

        <button className='w-full items-center w-44 h-12 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 hover:scale-110 transition-all duration-300 text-white'>Отследить заказ</button>
      </div>
    </Modal>
  );
}
