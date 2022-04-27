import {ActionTypes, NoteType} from './types';
import {NotesActionEnum} from './action-creators';

const initialState: Array<NoteType> = [];

export const notesReducer = (state = initialState, action: ActionTypes): Array<NoteType> => {
  switch (action.type) {
    case NotesActionEnum.ADD_NOTE:
      return [{
        id: action.id, title: action.title, description: action.description, date: '21.21',
      }, ...state];
    case NotesActionEnum.REMOVE_NOTE:
      return state.filter((nt) => nt.id !== action.id);
    case NotesActionEnum.ADD_NOTES:
      return [...action.payload]
    case NotesActionEnum.CHANGE_DESCRIPTION:
      return state.map((nt) => nt.id === action.id ? {...nt, description: action.description} : nt);

    default:
      return state;
  }
}

