import authReducer from './authReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';

const roodReducer = combineReducers({
    auth: authReducer,
    post: postReducer
})

export default roodReducer;