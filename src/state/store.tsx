import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import reducers from './reducers';

export type RootStateType = ReturnType<typeof store.getState>
export type RootDispatchType = ReturnType<typeof store.dispatch>

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store