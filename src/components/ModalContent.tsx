import React, {ChangeEvent, useState} from 'react';
import style from "../pages/Home.module.css";


type PropsType = {
    addItem: (title: string, description: string, date: string) => void
    setModalActive:(value:boolean) => void
}

const ModalContent = (props: PropsType) => {
    const [error, setError] = useState<string | null>(null)

    const [newNoteTitle, setNewNoteTitle] = useState("")
    const [newNoteDescription, setNewNoteDescription] = useState("")
    const [noteDate, setNewNoteDate] = useState('21.21.21')

    const onTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewNoteTitle(e.currentTarget.value)
    }
    const onDescriptionChange = (e:ChangeEvent<HTMLInputElement>) => {
        setNewNoteDescription(e.currentTarget.value)
    }

    const addNote = () => {
        if (newNoteTitle.trim() !== "") {
            props.addItem(newNoteTitle.trim(), newNoteDescription.trim(), noteDate)
            setNewNoteTitle(""), setNewNoteDescription(""), props.setModalActive(false);
        } else {
            setError("Введите текст!")
        }
    }

    return (
        <div>
            <h1>Добавить</h1>
            <div>
                <h5>Название заметки</h5>
                <input className={style.input}
                       type="text"
                       onChange={onTitleChange}
                       value={newNoteTitle}/>
            </div>

            <div>
                <h5>Комментарий</h5>
                <input className={style.big_input}
                       type="text"
                       value={newNoteDescription}
                       onChange={onDescriptionChange}
                />
            </div>

            <button className={style.btn} onClick={addNote}>Добавить</button>

        </div>
    );
};

export default ModalContent;