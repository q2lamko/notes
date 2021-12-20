import {AuthActionEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {RootDispatchType} from '../../store'
import {Dispatch} from "redux";
import axios from "axios";

export const AuthAC = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setIsError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login: (username: string, password: string) => async (dispatch: Dispatch) => {
        try {
            dispatch(AuthAC.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const mokUser = response.data.find(user => user.username === username && user.password === password)
                if (mokUser) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('auth', mokUser.username)
                    dispatch(AuthAC.setIsAuth(true))
                    dispatch(AuthAC.setUser(mokUser))
                } else {
                    dispatch(AuthAC.setIsError('Не корректный парольи или имя пользователя'))
                }
                dispatch(AuthAC.setIsLoading(false))
            }, 1000)

        } catch (e) {
            dispatch(AuthAC.setIsError('Произошла ошибка при логине'));

        }
    },
    logout: () => async (dispatch: RootDispatchType) => {
        try {

        } catch (e) {

        }
    },
}
