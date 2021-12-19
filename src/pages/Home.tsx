import React, {FC, useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../state/store";
import {addNoteAC, NoteType, removeNoteAC} from "../state/notes-reducer";
import {AddItemForm} from "../components/AddItemForm";
import {Note} from '../components/Note';
import style from './Home.module.css'
import classNames from "classnames";
import ModalContent from "../components/ModalContent";

const Home: FC = () => {
    const notes = useSelector<RootStateType, Array<NoteType>>(state => state.notes)
    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState(false)

    const addNote = useCallback((title: string, description: string, date: string) => {
        dispatch(addNoteAC(title, description, date))
    },[dispatch])

    const removeNote = useCallback((noteId: string) => {
        dispatch(removeNoteAC(noteId))
    }, [dispatch]);

    return (
        <div className={style.main}>
            <div className={style.content}>
                <div className={style.header_wrapper}>
                    <div>
                        <h1>Заметки</h1>
                    </div>
                    <div>
                        <button className={classNames(style.openBtn, style.btn)} onClick={() => setModalActive(true)}>+
                            Добавить заметку
                        </button>


                        <AddItemForm active={modalActive} setActive={setModalActive} >

                            <div className={style.item_form_content}>
                                <ModalContent addItem={addNote} setModalActive={setModalActive}/>
                            </div>
                        </AddItemForm>


                    </div>
                </div>

                <div className={style.notes_wrapper}>
                    {
                        notes.map((nt) => {
                            return <Note
                                key={nt.id}
                                title={nt.title}
                                data={nt.date}
                                id={nt.id}
                                removeNote={removeNote}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;