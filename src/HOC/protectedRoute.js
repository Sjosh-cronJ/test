import React from 'react';
import {
    Redirect,
    Route,
    withRouter
} from 'react-router-dom';
import Login from '../Container/Login/login';
export default function protectedRoute(props) {
    if (!props.isLoggedIn) {
        return <Redirect to='/login' />
    } else {
        return <Route exact path={props.path} component={props.Component} />
    }
}
