import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type RootStateType = ReturnType<typeof store.getState>
export type RootDispatchType = ReturnType<typeof store.dispatch>

const rootReducer = combineReducers(reducers);

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
window.store = store;
