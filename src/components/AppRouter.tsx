import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from '../router';
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const isAuth = useTypedSelector(state => state.authReducer.isAuth);
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}
                {/*<Navigate to={RouteNames.HOME}/>*/}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={<route.element/>} key={route.path}/>
                )}

            </Routes>
    );
};

export default AppRouter;