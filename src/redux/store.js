import { configureStore } from "@reduxjs/toolkit";
import taskSlice from './tasks.js'
import completeSlice from './completion.js'

const store = configureStore({
    reducer:{
        taskReducer:taskSlice ,
        completeReducer:completeSlice

    }
})

export default store;