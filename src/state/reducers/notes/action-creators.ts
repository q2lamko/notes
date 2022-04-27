import axios from 'axios';
import {
  AddNoteActionType, AddNotesActionType, NoteType, RemoveNoteActionType,
} from './types';
import {Dispatch} from "redux";

export enum NotesActionEnum {
  ADD_NOTE = 'ADD_NOTE',
  REMOVE_NOTE = 'REMOVE_NOTE',
  ADD_NOTES = 'ADD_NOTES',
  CHANGE_DESCRIPTION = 'CHANGE_DESCRIPTION'
}

export const notesAC = {
  changeDescription: (id: string, description: string) => ({
    type: NotesActionEnum.CHANGE_DESCRIPTION,
    id, description,
  }),
  addNote: (title: string, description: string, date: string, id: string): AddNoteActionType => ({
    type: NotesActionEnum.ADD_NOTE,
    title,
    id,
    description,
    date,
  }),
  removeNote: (id: string): RemoveNoteActionType => ({type: NotesActionEnum.REMOVE_NOTE, id}),

  addNotes: (payload: Array<NoteType>): AddNotesActionType => ({type: NotesActionEnum.ADD_NOTES, payload}),
  getNotes: () => async (dispatch: Dispatch) => {
    const response = await axios.get<NoteType[]>(`http://localhost:3001/notes`).then(response => response.data)
    dispatch(notesAC.addNotes(response))

  },
  setNote: (title: string, description: string, date: string,) => async (dispatch: Dispatch) => {
    const result = await axios.post(('http://localhost:3001/notes'), {title, description, date});
    dispatch(notesAC.addNote(result.data.title, result.data.description, result.data.date, result.data.id))
  },
  deleteNote: (id: string) => async (dispatch: Dispatch) => {
    await axios.delete(`http://localhost:3001/notes/${id}`);
    dispatch(notesAC.removeNote(id))
  },
  updateNote: (id: string, description: string) => async (dispatch: Dispatch) => {
    await axios.patch(`http://localhost:3001/notes/${id}`, {description});
    dispatch(notesAC.changeDescription(id, description))
  }

};
