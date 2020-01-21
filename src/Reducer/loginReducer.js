import Constants from '../Constants/constants';

const initialState = {
    isLoggedIn: false,
    loggingIn: false,
    isLoggedInError: false,
    loggingInERrorMsg: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.actions.LOG_IN:
            return {
                ...state,
                loggingIn: true,
                isLoggedIn: false,
                isLoggedInError: false,
                loggingInERrorMsg: false,
            };
        case Constants.actions.LOG_IN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: true,
            };
        case Constants.actions.LOG_IN_ERROR:
            return {
                ...state,
                loggingIn: false,
                isLoggedIn: false,
                isLoggedInError: true,
                loggingInERrorMsg: 'Error logging in',
            };
        default:
            return {
                ...state
            }
    }
}


export default loginReducer;