
import {Route, Redirect} from "react-router-dom";
import React from "react";

export default function PrivateRoute({ component: Component, isAuth,restricted, ...rest }) {
    return (
    <Route {...rest} component={(props)=>isAuth && restricted ? (<Redirect to="/"/>) : (<Component {...props } />)} />
    );
}