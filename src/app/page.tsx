'use client';

import PhotoGrid from '@/components/PhotoGrid';
import Header from '@/components/Header';
import { Login } from '@/components/SignIn/Login';
import { Register } from '@/components/SignIn/Register';

import { useModal } from '@/hooks/use-modal';

export default function Home() {
  const {
    value: loginModal,
    openModalHandler: openLoginHandler,
    closeModalHandler: closeLoginHandler,
  } = useModal();

  const {
    value: registerModal,
    openModalHandler: openRegisterHandler,
    closeModalHandler: closeRegisterHandler,
  } = useModal();

  return (
    <>
      <Header onLogin={openLoginHandler} />
      <main className="mx-4 md:mx-7 ">
        <PhotoGrid />
        <div></div>
        <div></div>
      </main>
      {loginModal && (
        <Login
          onClose={closeLoginHandler}
          onRegister={() => {
            closeLoginHandler();
            openRegisterHandler();
          }}
        />
      )}
      {registerModal && <Register onClose={closeRegisterHandler} />}
    </>
  );
}
