import React from "react";
import style from './AddItemForm.module.css'
import classNames from "classnames";

type AddItemFormType = {
    active: boolean
    setActive: (value: boolean) => void
    children?: JSX.Element | JSX.Element[]
}

export const AddItemForm = ({active, setActive, children}: AddItemFormType) => {
    return (
        <div className={active ? classNames(style.modal, style.active) : style.modal}
             onClick={() => setActive(false)}>
            <div className={active ? classNames(style.modal__content, style.active) : style.modal__content}
                 onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>

    )
};