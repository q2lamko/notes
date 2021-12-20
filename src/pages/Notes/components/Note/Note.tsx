import React, {FC, useState} from "react";
import s from './Note.module.css'
import LinkArrow from "../LinkArrow/LinkArrow";

export type PropsType = {
    title: string
    date: string
    id:string
    removeNote:(noteId:string) => void
}

export const Note: FC<PropsType> = (props) => {

    const removeNote = () => {
        props.removeNote(props.id)
    }

    return (
        <div className={s.content}>
            <div className={s.wrapper}>
                <div>{props.title}</div>
                <div><h5>{props.date}</h5></div>
                {/*<button onClick={removeNote}>remove</button>*/}
                <LinkArrow id={props.id}/>
            </div>

        </div>
    )
};