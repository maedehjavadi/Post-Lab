import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './slices/post-slice';




export default combineReducers({
    post:postReducer,
  
});

