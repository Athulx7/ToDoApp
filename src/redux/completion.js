import { createSlice } from "@reduxjs/toolkit";

const completeSlice = createSlice({
    name:'complete',
    initialState:[],
    reducers:{
        addtocompletion:(state,action)=>{
            state.push(action.payload)
        }

    }
})

export const {addtocompletion} = completeSlice.actions
export default completeSlice.reducer