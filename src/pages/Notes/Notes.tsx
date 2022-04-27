import React, {FC, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';
import {RootStateType} from '../../state/store';
import {AddItemForm} from '../../components/addItemForm/AddItemForm';
import {Note} from './components/Note/Note';
import style from './Notes.module.css';
import ModalContent from './components/modalContent/ModalContent';
import {NoteType} from '../../state/reducers/notes/types';
import {useActions} from '../../hooks/useActions';

const Notes: FC = React.memo(() => {
  const {getNotes} = useActions();
  const {setNote} = useActions();
  const {deleteNote} = useActions()

  const notes = useSelector<RootStateType, Array<NoteType>>((state) => state.notes);
  useEffect(() => {
    getNotes()
  }, []);

  // useEffect(() => {
  //     const raw = localStorage.getItem('notes') || '[]';
  //     addNotes(JSON.parse(raw))
  // }, []);
  // useEffect(() => {
  //     localStorage.setItem('notes', JSON.stringify(notes))
  // }, [notes]);


  const [modalActive, setModalActive] = useState(false);

  return (
    <div className={style.main}>
      <div className={style.content}>
        <div className={style.header_wrapper}>
          <div>
            <h1>Заметки</h1>
          </div>
          <div>
            <button className={classNames(style.openBtn, style.btn)} onClick={() => setModalActive(true)}>
              +
              Добавить заметку
            </button>

            <AddItemForm active={modalActive} setActive={setModalActive}>

              <div className={style.item_form_content}>
                <ModalContent addItem={setNote} setModalActive={setModalActive}/>
              </div>
            </AddItemForm>

          </div>
        </div>

        <div className={style.notes_wrapper}>
          {
            notes.map((nt) => (
              <Note
                key={nt.id}
                title={nt.title}
                date={nt.date}
                id={nt.id}
                removeNote={deleteNote}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
});

export default Notes;
