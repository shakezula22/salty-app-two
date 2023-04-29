function ModalBackdrop() {
  return (
    <div className="absolute inset-0 top-0 min-w-[350px] z-40 bg-primary bg-opacity-50 backdrop-blur-sm"></div>
  );
}

function ModalWindow() {
  return (
    <div className="absolute left-20 top-40 min-h-[475px] md:max-h-[90vh] md:max-w-[475] w-[60%] bg-white z-50">
      <p>Modal</p>
    </div>
  );
}

function Modal() {
  return (
    <>
      <ModalBackdrop />
      <ModalWindow />
    </>
  );
}

export default Modal;
