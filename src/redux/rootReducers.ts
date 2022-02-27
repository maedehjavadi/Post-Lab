import { combineReducers } from '@reduxjs/toolkit';
import postReducer from './slices/post-slice';
import usersReducer from './slices/users-slice'



export default combineReducers({
    post:postReducer,
    users:usersReducer,
});

