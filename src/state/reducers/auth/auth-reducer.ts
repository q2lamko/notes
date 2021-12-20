import {AuthActionEnum, AuthActionType, AuthStateType} from "./types";
import {IUser} from "../../../models/IUser";

const initialState: AuthStateType = {
    isAuth: false,
    error: '',
    isLoading: true,
    user: {} as IUser
}

export default function authReducer(state = initialState, action: AuthActionType): AuthStateType {
    switch (action.type) {
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload, isLoading: false}
        case AuthActionEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case AuthActionEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        case AuthActionEnum.SET_USER:
            return {...state, user: action.payload}
        default:
            return state
    }
}