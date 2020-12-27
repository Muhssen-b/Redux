import counterReducer from './counter'
import {combineReducers} from 'redux';
import loggedReducer from './islogged';

const allReducers = combineReducers ({
    counter : counterReducer,
    isLogged: loggedReducer
})

export default allReducers;