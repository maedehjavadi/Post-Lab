import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter-slice';
import profileReducer from './profile-slice';
import usersReducer from './users-slice';


export default combineReducers({
    counter:counterReducer,
    profile:profileReducer,
    users:usersReducer
});

