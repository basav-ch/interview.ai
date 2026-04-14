import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:"user",
    initialState:{
        userdData:null
    },
    reducers:{
        setUserData: (state,action)=>{
            state.userdData = action.payload
        }
    }
})

export const {setUserData} = userSlice.actions

export default userSlice.reducer