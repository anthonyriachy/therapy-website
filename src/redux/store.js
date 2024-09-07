import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import TherapistReducer from "./slices/TherapistSlice";

const store=configureStore({
    reducer:{
        auth:authReducer,
        therapists: TherapistReducer,

    }
})

export default store;