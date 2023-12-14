import Modal from "./Modal";

import closeSVG from "../../Assets/svg/close.svg";

export default function ModalConfirmOrder({ onClose }) {
  return (
    <Modal open={true} onClose={onClose}>
      <div className="w-full md:w-[515px] h-full md:h-[503px] bg-white flex flex-col ">
        <button className="self-end m-2" onClick={onClose}>
          <img src={closeSVG} alt="Close" />
        </button>
        <div className="flex flex-col justify-around">
          <h2 className="text-5xl">Ваш заказ подтверждён</h2>

          <p>На Ваш e-mail наши менеджеры пришлют всю необходимую информацию</p>
          <button className="items-center w-44 h-12 ml-2 rounded-lg bg-orange-600 hover:bg-orange-500 active:bg-orange-700 hover:scale-110 transition-all duration-300 ">Отследить заказ</button>
        </div>
      </div>
    </Modal>
  );
}
