import React, {useState} from 'react';
import s from "./Note.module.css";
import {Link} from "react-router-dom";

const LinkArray = () => {
    let [viewMode, setViewMode] = useState(true)

    let activateViewMode = () => {
        setViewMode(true)
    };
    return viewMode
        ? <div>
            <Link to="/note">
                <button className={s.btn_link} onMouseOver={activateViewMode} autoFocus>{}</button>
            </Link>
        </div>
        : <div>
            123
        </div>

};

export default LinkArray;