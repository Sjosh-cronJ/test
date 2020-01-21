import Constants from '../Constants/constants';

const initialState = {
    users: [],
    fetchingUsers: false,
    isUsersFetched: false,
    fetcingUsersError: false,
    fetcingUsersErrorMsg: '',
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case Constants.actions.GET_USER:
            return {
                ...state,
                fetchingUsers: true,
                isUsersFetched: false,
                fetcingUsersError: false,
                fetcingUsersErrorMsg: '',
            };
        case Constants.actions.GET_USER_SUCCESS:
            return {
                ...state,
                users: action.payload,
                fetchingUsers: false,
                isUsersFetched: true,
            };
        case Constants.actions.GET_USER_ERROR:
            return {
                ...state,
                fetchingUsers: false,
                isUsersFetched: false,
                fetcingUsersError: true,
                fetcingUsersErrorMsg: 'Error loading data',
            };
        default:
            return {
                ...state
            }
    }
}


export default loginReducer;