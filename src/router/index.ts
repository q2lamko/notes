import React from "react";
import {NoteForm} from "../pages/NoteForm/NoteForm";
import Notes from "../pages/Notes/Notes";
import Login from "../pages/login/Login";

export interface IRoute {
    path: string
    element: React.ComponentType
}

export enum RouteNames {
    LOGIN = '/login',
    NOTES = '/',
    NOTE = '/note/:id',
    MISSING = '*'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login},
    {path: RouteNames.MISSING, element: Login},
]
export const privateRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, element: Login},
    {path: RouteNames.NOTES, element: Notes},
    {path: RouteNames.NOTE, element: NoteForm},
    {path: RouteNames.MISSING, element: Notes},
]