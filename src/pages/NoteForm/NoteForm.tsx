import React, {FC, useEffect, useMemo, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootStateType} from '../../state/store';
import {NoteType} from '../../state/reducers/notes/types';
import {useActions} from '../../hooks/useActions';
import {RichTextEditor} from "@mantine/rte";
import style from './NoteForm.module.css'
import {Button} from "antd";

export const NoteForm: FC = () => {
  const {deleteNote} = useActions();
  const {getNotes} = useActions();
  const {updateNote} = useActions();

  useEffect(() => {
    getNotes()
  }, []);

  const RemoveNote = () => {
    deleteNote(note ? note.id : '');
  };

  const params = useParams();
  const notes = useSelector<RootStateType, Array<NoteType>>((state) => state.notes);
  const note =  useMemo(()=>notes.find((el) => el.id == params.id),[notes])

  console.log(notes)
  console.log(note)
  const [value, onChange] = useState("");

  useEffect(()=> {
    if(note?.description) {
      onChange(note.description)
    } else {
      onChange("")
    }
  },[note])

  const onTextDescriptionChange = () => {
    if (params.id) {
      updateNote(params.id, value)
    }
  }

  const [editMode, setEditMode] = useState(true);
  return (
    <div className={style.wrapper}>
      <div className={style.wrapper_content}>
        <div>
          <Button><Link to="/notes">Вернуться </Link></Button>
        </div>
        <div className={style.title}>
          <p> {note?.title}</p>
        </div>
        <div>
          {editMode
          ? (<RichTextEditor controls={[
            ['bold', 'italic', 'underline', 'link', 'image'],
            ['unorderedList', 'h1', 'h2', 'h3'],
            ['sup', 'sub'],
            ['alignLeft', 'alignCenter', 'alignRight'],
          ]} value={value} onChange={onChange}></RichTextEditor>)
          : (<p>{note?.description}</p>)}
        </div>
        <div>
          <p>{note?.date}</p>
        </div>
        <div>
          <Button onClick={RemoveNote}>Удалить</Button>
          <Button onClick={onTextDescriptionChange}>сохранить</Button>
        </div>

      </div>
    </div>

  );
};
