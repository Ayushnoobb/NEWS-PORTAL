import { createSlice } from "@reduxjs/toolkit";

const initialState : any = {
  token:{},
  userInfo:{}
}

export const AuthSlice = createSlice(
  {
    name:"news-portal/user-auth",
    initialState,
    reducers:{
      login:(state,action) => {
        const {token,userInfo} = action.payload
        state.token = token
        state.userInfo = userInfo
      },
      logout:(state)=>{
        state.token = ''
      }
    }
  }
)