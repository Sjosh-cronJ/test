import { fork } from 'redux-saga/effects'
import loginSaga from './loginSaga'
import userSaga from './usersSaga'

export default function* root() {
    yield fork(loginSaga)
    yield fork(userSaga)
}