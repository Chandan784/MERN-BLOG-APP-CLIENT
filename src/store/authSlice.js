import { createSlice } from "@reduxjs/toolkit";

 const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    loginMessage:"",
    signupMessage:""
  },
  reducers: {
    setLogin: (state, action) => {
     state.isLogin = true
    },
    setLogout: (state, action) => {
       state.isLogin = false
    },
    login:(state,action)=>{

        

    },
    signup:(state,action)=>{

    }
  },
});



export const {setLogin,setLogout,login,signup} = authSlice.actions

export const authReducer = authSlice.reducer

