import {v1} from 'uuid';

export const noteId1 = v1();
export const noteId2 = v1();

export type NoteType = {
    id: string
    title: string
    description: string
    date: string
}

export type AddNoteActionType = {
    type: 'ADD-NOTE'
    title: string
    noteId: string
    description: string
    date: string
}
export type RemoveNoteActionType = {
    type: 'REMOVE-NOTE'
    id: string
}

export type ActionTypes = AddNoteActionType | RemoveNoteActionType

const initialState: Array<NoteType> = [
    {id: noteId1, title: "Длинный заголовок заметки номер один", description: "blabla", date: '11.11.2011'},
    {id: noteId2, title: "Длинный заголовок заметки номер два", description: "blabla", date: '11.11.2011'},
    {id: noteId2, title: "Длинный заголовок заметки номер три", description: "blabla", date: '11.11.2011'},
]
export const notesReducer = (state: Array<NoteType> = initialState, action: ActionTypes): Array<NoteType> => {
    switch (action.type) {
        case 'ADD-NOTE' : {
            return [{id: action.noteId, title: action.title, description: action.description, date: '123'}, ...state]
        }
        case "REMOVE-NOTE": {
            return state.filter(nt => nt.id !== action.id)
        }
        default:
            return state
    }
}

export const addNoteAC = (title: string, description: string, date: string): AddNoteActionType => {
    return {type: 'ADD-NOTE', title, noteId: v1(), description, date}
}
export const removeNoteAC = (noteId: string): RemoveNoteActionType => {
    return {type: 'REMOVE-NOTE', id: noteId}
}