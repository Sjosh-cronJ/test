import loginReducer from './loginReducer'
import dashBoardReducer from './dashboardReducer'
import { combineReducers } from 'redux'

const reducers = combineReducers({
    logInReducer: loginReducer,
    dashboardReducer: dashBoardReducer,
})
export default reducers;