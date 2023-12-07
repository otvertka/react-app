import Modal from "./Modal";

export default function ModalConfirmOrder() {
  return (
    <Modal className="w-full h-full bg-white" open={true}>
      <h2 className="text-5xl">Ваш заказ подтверждён</h2>
      <button>Отследить заказ</button>
    </Modal>
  );
}
