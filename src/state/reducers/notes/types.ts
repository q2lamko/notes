export type NoteType = {
  id: string
  title: string
  description: string
  date: string
}

export type AddNoteActionType = {
  type: 'ADD_NOTE'
  title: string
  id: string
  description: string
  date: string
}
export type RemoveNoteActionType = {
  type: 'REMOVE_NOTE'
  id: string
}
export type AddNotesActionType = {
  type: 'ADD_NOTES'
  payload: Array<NoteType>
}
export type ChangeDescriptionActionType = {
  type: 'CHANGE_DESCRIPTION'
  id: string
  description: string
}
export type ActionTypes = AddNoteActionType | RemoveNoteActionType | AddNotesActionType | ChangeDescriptionActionType
