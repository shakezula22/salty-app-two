'use client';

import { useState } from 'react';

export function useModal() {
  const [modal, setModal] = useState(false);

  const openModalHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return {
    value: modal,
    openModalHandler,
    closeModalHandler,
  };
}
