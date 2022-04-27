import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import s from '../Note/Note.module.css';

type PropsType = {
    id: string

}
const LinkArrow: FC<PropsType> = ({ id }) => {

  return (
    <div>
      <Link to={`/note/${id}`}>
        <button className={s.btn_link} > </button>
      </Link>
    </div>
    )
};

export default LinkArrow;
