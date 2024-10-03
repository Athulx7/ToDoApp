import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name:'todo',
  initialState:[],
    reducers:{
        addTotask:(state,action)=>{
            state.push(action.payload)
        },
        removeItemsFromTasks : (state,action)=>{
            return state.filter(item=>item.id !=action.payload)
        }
        
    }

})

export const {addTotask,removeItemsFromTasks} = taskSlice.actions
export default taskSlice.reducer    