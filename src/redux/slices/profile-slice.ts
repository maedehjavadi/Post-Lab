import { createSlice , PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    user: {
        name: string
        family: string
    }
}

const initialState:CounterState = {
   user: {
       name: '',
       family: ''
   }
}

const profileSlice = createSlice({
    name:"profile",
    initialState,
    reducers:{
        sample(state , action:PayloadAction<{name: string, family: string}>){
            state.user = action.payload
        },

    }
})


export const { sample } = profileSlice.actions;
export default profileSlice.reducer