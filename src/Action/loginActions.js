import Constant from '../Constants/constants'

export function logIn(payload) {
    return {
        type: Constant.actions.LOG_IN,
        payload
    }
}

export function logInSuccess(payload) {
    return {
        type: Constant.actions.LOG_IN_SUCCESS,
        payload
    }
}

export function logInError(payload) {
    return {
        type: Constant.actions.LOG_IN_ERROR,
        payload
    }
}