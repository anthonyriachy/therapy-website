/* eslint-disable no-undef */
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { API_URL } from "../../../env";




export const fetchTherapists = createAsyncThunk(
    "therapists/fetchTherapists",
    async () => {
      const response = await axios.get(`${API_URL}/therapists`);
      return response.data.data;
    }
);

const initialState={
    therapists: [],
    loading: false,
    error: null,
}

const therapistSlice=createSlice({
    name:"therapists",
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTherapists.pending,(state)=>{
            state.loading=true
        })

        builder.addCase(fetchTherapists.fulfilled,(state,action)=>{
            state.loading=false
            state.therapists=action.payload
        })

        builder.addCase(fetchTherapists.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.payload.message
        })

    }
})


export default therapistSlice.reducer;


