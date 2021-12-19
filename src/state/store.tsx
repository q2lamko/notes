import {combineReducers, createStore} from "redux";
import {notesReducer} from "./notes-reducer";

export type RootStateType = ReturnType<typeof store.getState>
export type RootDispatchType = ReturnType<typeof store.dispatch>

const rootReducer = combineReducers({
    notes: notesReducer,
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store