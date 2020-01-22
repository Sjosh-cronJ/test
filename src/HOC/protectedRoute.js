import React from 'react';
import {
    Redirect,
    Route,
} from 'react-router-dom';
export default function protectedRoute(props) {
    if (!props.isLoggedIn) {
        return <Redirect to='/login' />
    } else {
        return <Route exact path={props.path} component={props.Component} />
    }
}
