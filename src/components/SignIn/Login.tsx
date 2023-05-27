'use client';

import React, { useRef } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

type LoginProps = {
  onClose: () => void;
  onRegister: () => void;
};

export function Login(props: LoginProps) {
  const userEmail = useRef<HTMLInputElement>(null);
  const userPass = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredEmail = userEmail.current?.value;
    const enteredPass = userPass.current?.value;
  };

  return (
    <Modal onClose={props.onClose}>
      <form
        onSubmit={submitFormHandler}
        id="login-form"
        className="flex flex-col"
      >
        <label htmlFor="email">Email</label>
        <input
          className="border border-gray-400 my-2 p-1"
          type="email"
          name="email"
          placeholder="jane@salty.com"
          ref={userEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          className="border border-gray-400 my-2 p-1"
          type="password"
          name="password"
          placeholder="*******"
          ref={userPass}
        />
      </form>
      <div className="flex flex-col items-center">
        <Button type="submit" form="login-form">
          Submit
        </Button>

        <Button type="button" onClick={props.onRegister}>
          Sign Up Here
        </Button>
      </div>
    </Modal>
  );
}
