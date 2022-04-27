import React, {FC, useState} from 'react';
import s from './Note.module.css';
import LinkArrow from '../LinkArrow/LinkArrow';

export type PropsType = {
  title: string
  date: string
  id: string
  removeNote: (noteId: string) => void
}

export const Note: FC<PropsType> = (props) => {
  const removeNote = () => {
    props.removeNote(props.id);
  };

  return (
    <div className={s.content}>
      <div className={s.wrapper} >
        <div className={s.title}>{props.title}</div>
        <div className={s.date}>{props.date}</div>
        <button onClick={removeNote}>удалить</button>
        <div>
          <LinkArrow id={props.id}  />
        </div>
      </div>

    </div>
  );
};
