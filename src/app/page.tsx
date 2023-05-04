'use client';

import PhotoGrid from '@/components/PhotoGrid';
import Header from '@/components/Header';
import { Login } from '@/components/SignIn/Login';

import { Fragment } from 'react';
import { useModal } from '@/hooks/use-modal';

export default function Home() {
  const {
    value: loginModal,
    openModalHandler: openLoginHandler,
    closeModalHandler: closeLoginHandler,
  } = useModal();

  return (
    <Fragment>
      <Header onLogin={openLoginHandler} />
      <main className="mx-4 md:mx-7 ">
        <PhotoGrid />
        <div></div>
        <div></div>
      </main>
      {loginModal && <Login onClose={closeLoginHandler} />}
    </Fragment>
  );
}
