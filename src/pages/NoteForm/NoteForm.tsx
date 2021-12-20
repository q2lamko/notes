import React, {FC} from "react";
import {Link, useParams} from "react-router-dom";
import s from '../Notes/components/Note/Note.module.css'
import {useSelector} from "react-redux";
import {RootStateType} from "../../state/store";
import {NoteType} from "../../state/reducers/notes-reducer";

export const NoteForm: FC = (props) => {
    const params = useParams()
    const notes = useSelector<RootStateType,Array<NoteType>>(state => state.notes)
    const note = notes.find(el => el.id === params.id)
    return (
        <div>
            <div>
                <Link to="/notes">back</Link>
                <div>{note?.title}</div>
                <p>{note?.description}</p>
                <p>{note?.date}</p>
                <div>
                    <button></button></div>
            </div>

        </div>

    )
};