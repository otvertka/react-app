import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);

  const handleClose = () => {
    dialog.current.close();
    onClose();
  };

  return createPortal(
    <dialog ref={dialog}>
      <div>
        {" "}
        {children} <button onClick={handleClose}> Закрыть</button>
      </div>{" "}
    </dialog>,
    document.getElementById("modal")
  );
}
