import { all, put, takeLatest } from 'redux-saga/effects'
import Constants from '../Constants/constants'
import {
    logInSuccess,
    logInError,
} from '../Action/loginActions.js'

function* logIn(action) {
    try {
        if (action.payload && action.payload.userName && action.payload.userName === 'hruday@gmail.com' && action.payload.password && action.payload.password === 'hruday123') {
            yield put(logInSuccess())
        } else {
            yield put(logInError({ error: 'Invalid Credintials' }))
        }

    } catch (error) {
        yield put(logInError(error))
    }
}

export default function* login() {
    yield all([
        takeLatest(Constants.actions.LOG_IN, logIn)
    ])
}