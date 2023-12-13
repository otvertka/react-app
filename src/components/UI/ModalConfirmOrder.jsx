import Modal from "./Modal";

export default function ModalConfirmOrder({ onClose }) {
  return (
    <Modal className="w-full h-full bg-white" open={true} onClose={onClose}>
      <h2 className="text-5xl">Ваш заказ подтверждён</h2>
      <button>Отследить заказ</button>
    </Modal>
  );
}
