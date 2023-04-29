import PhotoGrid from '@/components/PhotoGrid';
import Modal from '@/components/UI/Modal';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <main className="mx-4 md:mx-7">
        <PhotoGrid />
        <div></div>
        <div></div>
      </main>
      <Modal />
    </Fragment>
  );
}
