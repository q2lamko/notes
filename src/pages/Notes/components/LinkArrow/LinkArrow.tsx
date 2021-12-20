import React, {FC, useState} from 'react';
import s from "../Note/Note.module.css";
import {Link} from "react-router-dom";

type PropsType = {
    id: string
}
const LinkArrow: FC<PropsType>= ({id}) => {
    let [viewMode, setViewMode] = useState(true)

    let activateViewMode = () => {
        setViewMode(true)
    };
    return viewMode
        ? <div>
            <Link to={`/note/${id}`}>
                <button className={s.btn_link} onMouseOver={activateViewMode} autoFocus>{}</button>
            </Link>
        </div>
        : <div>
            123
        </div>

};

export default LinkArrow;