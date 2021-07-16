
import {Route, Redirect} from "react-router-dom";
import React from "react";

export default function PrivateRoute({ component: Component, isAuth, ...rest }) {
    return (
    <Route {...rest} component={(props)=>isAuth ? <Component {...props } /> : <Redirect to="/login"/>} />
    );
}