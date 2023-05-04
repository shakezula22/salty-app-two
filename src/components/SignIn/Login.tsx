import Modal from '../UI/Modal';

type LoginProps = {
  onClose: () => void;
};

export function Login(props: LoginProps) {
  return (
    <Modal onClose={props.onClose}>
      <p>Login Here</p>
    </Modal>
  );
}
