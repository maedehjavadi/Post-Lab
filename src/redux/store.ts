
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from  './slices';
import counterReducer from './slices/counter-slice';



export const store = configureStore({
    reducer: rootReducer
    // reducer:{
    //     counter:counterReducer,
    // },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;