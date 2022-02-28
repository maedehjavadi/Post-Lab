
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from  './rootReducers';
import counterReducer from './slices/post-slice';



export const store = configureStore({
    reducer: rootReducer
    // reducer:{
    //     counter:counterReducer,
    // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;