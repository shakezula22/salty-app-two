import { PropsWithChildren } from 'react';

type modalProps = {
  onClose?: () => void;
};

function ModalBackdrop(props: modalProps) {
  return (
    <div
      onClick={props.onClose}
      className="absolute inset-0 top-0 min-w-full z-40 bg-primary bg-opacity-50 backdrop-blur-sm"
    ></div>
  );
}

function ModalWindow(props: PropsWithChildren<modalProps>) {
  return (
    <div className="absolute left-0 top-0 p-2 w-screen md:left-40 md:top-40 min-h-[475px] md:max-h-[90vh] md:max-w-[475] md:w-[60%] bg-white z-50 shadow-md">
      {props.children}
    </div>
  );
}

function Modal(props: PropsWithChildren<modalProps>) {
  return (
    <>
      <ModalBackdrop onClose={props.onClose} />
      <ModalWindow>{props.children}</ModalWindow>
    </>
  );
}

export default Modal;
