import {combineReducers } from 'redux';
import BlogReducer from './BlogReducer';
import LoadingReducer from './LoadingReducers'
const rootReducer=combineReducers({
    blogsList:BlogReducer,
    loadingReducer:LoadingReducer
})
export default rootReducer