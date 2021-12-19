import React from "react";
import {Note} from "../components/Note";
import {NoteForm} from "../pages/NoteForm";
import Home from "../pages/Home";


export interface IRoute {
    path: string
    element: React.ComponentType
}

export enum RouteNames  {
    HOME='/',
    NOTE='/note',
    MISSING='*'
}

export const routes: IRoute[] = [
    {path: RouteNames.HOME, element: Home},
    {path: RouteNames.NOTE, element: NoteForm},
    {path: RouteNames.MISSING, element: Home},
]