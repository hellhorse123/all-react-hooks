import React, { useRef, useState } from "react";
import ConfirmationModal from "./ConfirmationModal";

function UseImperativeHandleHookModal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button onClick={() => modalRef.current.focusCloseBtn()}>Focus Close</button>
      <button onClick={() => modalRef.current.focusConfirmBtn()}>Focus Confirm</button>
      <button onClick={() => modalRef.current.focusDenyBtn()}>Focus Deny</button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onChange={(e) => setOpen(false)}
      />
      <br />
    </>
  );
}

export default UseImperativeHandleHookModal;
