import React from 'react';
import classNames from 'classnames';
import style from './AddItemForm.module.css';

type AddItemFormType = {
    active: boolean
    setActive: (value: boolean) => void
    children?: JSX.Element | JSX.Element[]
}

export function AddItemForm({ active, setActive, children }: AddItemFormType) {
  return (
    <div
      className={active ? classNames(style.modal, style.active) : style.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? classNames(style.modal__content, style.active) : style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>

  );
}
