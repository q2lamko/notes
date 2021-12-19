import s from './App.module.css'
import {Note} from './components/Note'
import {AddItemForm} from "./components/AddItemForm";
import {useDispatch, useSelector} from 'react-redux';
import {RootStateType} from "./state/store";
import {NoteType} from "./state/notes-reducer";
import style from './App.module.css'
import {FC, useState} from "react";
import {TextEditorProvider} from "./components/TextAreaEditor/context";
import TextEditor from "./components/TextAreaEditor";

import AppRouter from "./components/AppRouter";


const App: FC = () => {
    return (
        <div className="App">
            <div className={s.app}>
                <AppRouter/>
            </div>

        </div>
    )
}

export default App
