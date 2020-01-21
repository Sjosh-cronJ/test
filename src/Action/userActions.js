import Constant from '../Constants/constants'

export function getUser(payload) {
    return {
        type: Constant.actions.GET_USER,
        payload
    }
}

export function getUserSuccess(payload) {
    return {
        type: Constant.actions.GET_USER_SUCCESS,
        payload
    }
}

export function getUserError(payload) {
    return {
        type: Constant.actions.GET_USER_ERROR,
        payload
    }
}