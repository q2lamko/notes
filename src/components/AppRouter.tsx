import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {RouteNames, routes} from '../router';

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route path={route.path} element={<route.element/>} key={route.path}/>
            )}
            {/*<Navigate to={RouteNames.HOME}/>*/}
        </Routes>
    );
};

export default AppRouter;