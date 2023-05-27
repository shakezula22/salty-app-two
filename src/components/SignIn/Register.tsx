import Modal from '../UI/Modal';
import Button from '../UI/Button';
import React, { useRef } from 'react';

export const Register: React.FC<{ onClose: () => void }> = props => {
  const newUser = useRef<HTMLInputElement>(null);
  const newEmail = useRef<HTMLInputElement>(null);
  const newPass = useRef<HTMLInputElement>(null);

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(newUser.current?.value);
  };

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={submitFormHandler} className="flex flex-col">
        <label htmlFor="name">First and Last Name</label>
        <input
          className="border border-gray-400 my-2 p-1"
          type="text"
          name="name"
          id="name"
          placeholder="jane doe"
          ref={newUser}
        />
        <label htmlFor="email">Email</label>
        <input
          className="border border-gray-400 my-2 p-1"
          type="email"
          name="email"
          id="email"
          placeholder="email@saltyroots.com"
          ref={newEmail}
        />
        <label htmlFor="password">Create Password</label>
        <input
          className="border border-gray-400 my-2 p-1"
          type="password"
          name="password"
          id="password"
          placeholder="******"
          ref={newPass}
        />
        <div className="flex justify-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Modal>
  );
};
